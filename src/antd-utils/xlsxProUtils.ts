// downloadXlsxPro的各种方法集合

import { isNil, last, merge } from "lodash-es";
import React from "react";
import { CellColumnType, CellStyle } from "./xlsxProInterface";

/** 转换css样式成xlsx-js-style样式 */
export const convertCssToXlsxStyle = (css?: CellStyle) => {
  const DEF_BORDER_COLOR = "D4D4D4";

  const cellStyle: any = {
    // 全部默认垂直居中，水平居左
    alignment: {
      vertical: "center",
      horizontal: "left",
    },
  };

  if (css?.color) {
    merge(cellStyle, { font: { color: { rgb: css.color.replace("#", "") } } });
  }

  if (css?.backgroundColor) {
    merge(cellStyle, {
      fill: { fgColor: { rgb: css.backgroundColor.replace("#", "") } },
    });
  }

  if (css?.fontWeight) {
    const isBold =
      css?.fontWeight === "bold" ||
      css?.fontWeight === "bolder" ||
      Number(css?.fontWeight) >= 700;
    merge(cellStyle, { font: { bold: isBold } });
  }

  if (css?.fontSize) {
    merge(cellStyle, { font: { sz: parseInt(String(css.fontSize)) } });
  }

  if (css?.alignCenter) {
    merge(cellStyle, {
      alignment: { horizontal: "center", vertical: "center" },
    });
  }

  if (css?.wrap) {
    merge(cellStyle, { alignment: { wrapText: css.wrap } });
  }

  const borderColor = css?.borderColor
    ? css?.borderColor?.replace("#", "")
    : DEF_BORDER_COLOR;

  merge(cellStyle, {
    border: {
      top: { style: "thin", color: { rgb: borderColor } },
      bottom: { style: "thin", color: { rgb: borderColor } },
      left: { style: "thin", color: { rgb: borderColor } },
      right: { style: "thin", color: { rgb: borderColor } },
    },
  });

  return cellStyle;
};

/** 递归获取任何类型的文本内容，兼容title不为string、或render返回的结果不为string的情况 */
export const getRenderedText = (value: React.ReactNode): any => {
  if (typeof value === "string") {
    return value;
  }

  if (isNil(value)) {
    return "";
  }

  if (React.isValidElement(value)) {
    const valueChildren = (value.props as any)?.children;

    if (Array.isArray(valueChildren)) {
      return valueChildren.reduce((result, child) => {
        const childText = getRenderedText(child);
        return childText ? result + childText : result;
      }, "");
    }

    if (typeof valueChildren === "string") {
      return valueChildren;
    }

    return getRenderedText(valueChildren);
  }

  return value;
};

/**
 * 根据行索引和列索引，拿到单元格坐标
 * @param rowIndex 行索引
 * @param columnIndex 列索引
 * @param headerRows 表头行数
 * @returns 单元格坐标
 */
export const getCellCoordinate = (
  rowIndex: number,
  columnIndex: number,
  headerRows: number
): string => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Excel 列索引字母
  let result = "";

  // 处理列索引
  columnIndex += 1; // 转换为以1为起点的列索引
  while (columnIndex > 0) {
    const remainder = (columnIndex - 1) % 26; // 列索引计算
    result = letters.charAt(remainder) + result;
    columnIndex = Math.floor((columnIndex - 1) / 26);
  }

  // 处理行索引
  rowIndex += headerRows; // 加上表头行数
  result += (rowIndex + 1).toString(); // 转换为以1为起点的行索引

  return result;
};

/**
 * 根据headerData提取出xlsx-js-style可识别的表头单元格合并信息
 * @param headerData 基于columns生成的字符串表头
 * @returns !merge能识别的单元格合并信息
 */
export const getHeaderMerges = (headerData: Array<string>[]) => {
  const merges = [];

  // 行合并
  for (let i = 0; i < headerData.length; i++) {
    let j = 0;
    while (j < headerData[i].length) {
      const start = j;
      while (
        j < headerData[i].length - 1 &&
        headerData[i][j] === headerData[i][j + 1]
      ) {
        j++;
      }
      const end = j;
      if (start !== end) {
        merges.push({
          s: { r: i, c: start },
          e: { r: i, c: end },
        });
      }
      j++;
    }
  }

  // 列合并
  for (let j = 0; j < headerData[0].length; j++) {
    let i = 0;
    while (i < headerData.length) {
      const start = i;
      while (
        i < headerData.length - 1 &&
        headerData[i][j] === headerData[i + 1][j]
      ) {
        i++;
      }
      const end = i;
      if (start !== end) {
        merges.push({
          s: { r: start, c: j },
          e: { r: end, c: j },
        });
      }
      i++;
    }
  }

  return merges;
};

/**
 * 获取columns的最大深度
 * @param columns 支持表格分组的columns
 * @returns 表头的行数
 */
export const getColumnsDepth = (columns: CellColumnType[]) => {
  let maxDepth = 1;

  const dfs = (columns: CellColumnType[], depth: number) => {
    if (depth > maxDepth) {
      maxDepth = depth;
    }
    columns.forEach((column) => {
      if (column.children) {
        dfs(column.children, depth + 1);
      }
    });
  };

  dfs(columns, 1);
  return maxDepth;
};

/**
 * 生成支持表头分组的的字符串表头
 * @param columns 支持表格分组的columns
 * @returns 表头数据
 */
export const generateHeader = (columns: CellColumnType[]) => {
  const depth = getColumnsDepth(columns);

  const res: Array<string>[] = [];

  for (let i = 0; i < depth; i += 1) {
    res.push([]);
  }

  const genTitle = (treeNode: CellColumnType, topValueList: string[]) => {
    const list = [
      ...topValueList,
      getRenderedText(
        typeof treeNode.title === "function" ? treeNode.title() : treeNode.title
      ),
    ];

    if (treeNode.children) {
      treeNode.children.forEach((child) => genTitle(child, list));
    } else {
      res.forEach((item, index) => item.push(list[index] || last(list)));
    }
  };

  columns.forEach((column) => genTitle(column, []));

  return res;
};

/**
 * 基于columns生成扁平化的flatColumns，兼容表头分组的情况
 * @param columns 支持表格分组的columns
 */
export const generateFlatColumns = (columns: CellColumnType[]) => {
  const flatColumns: CellColumnType[] = [];

  const handleFlatColumns = (columns: CellColumnType[]) => {
    columns.forEach((column) => {
      if (column.children) {
        handleFlatColumns(column.children);
      } else {
        flatColumns.push(column);
      }
    });
  };

  handleFlatColumns(columns);
  return flatColumns;
};

export const getCellWidth = (str: string) => {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (/^[a-zA-Z0-9_\-@#$%^&*()+=\[\]{}\\|;:'",.<>\/?\s]+$/.test(char)) {
      // 英文字符
      width += 1;
    } else {
      // 中文字符
      width += 2;
    }
  }

  return width;
};
