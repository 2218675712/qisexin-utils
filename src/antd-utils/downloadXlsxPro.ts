import { isEmpty, isNil, merge, truncate } from "lodash-es";
import { utils, writeFile } from "xlsx-js-style";
import { DownloadXlsxProType, XlsxProSheetOptions } from "./xlsxProInterface";
import {
  convertCssToXlsxStyle,
  generateFlatColumns,
  generateHeader,
  getCellCoordinate,
  getHeaderMerges,
  getRenderedText,
} from "./xlsxProUtils";

// 前端下载xlsx
export const downloadXlsxPro = (params: DownloadXlsxProType): void => {
  try {
    const { fileName, sheet } = params;

    const outputFileName = /(\.xlsx)$/.test(fileName)
      ? fileName
      : `${fileName}.xlsx`;

    const workbook = utils.book_new();

    // 生成工作表
    const generateSheet = (options: XlsxProSheetOptions) => {
      const { sheetName, columns, dataSource, headerStyle } = options;

      // 将表头数据转换为 XLSX 格式
      const headerData = generateHeader(columns);

      // 拿到扁平化后的columns
      const flatColumns = generateFlatColumns(columns);

      // 将数据源转换为 XLSX 格式
      const bodyData = dataSource.map((record, rowIndex) => {
        const row: any[] = [];

        flatColumns.forEach((column) => {
          if (column.render) {
            // 如果列定义了 render 属性，则使用 render 函数的返回值作为单元格的值
            const renderedValue = column.render(
              record[column.dataIndex!],
              record,
              rowIndex
            );
            const value = getRenderedText(renderedValue);
            row.push(value);
          } else {
            const value = isNil(record[column.dataIndex!])
              ? ""
              : record[column.dataIndex!];
            row.push(value);
          }
        });

        return row;
      });

      // 合并表头和数据源
      const data = [...headerData, ...bodyData];

      // 将数据转换为工作表对象
      const worksheet = utils.aoa_to_sheet(data);

      // 基于headerData拿出合并单元格信息
      const merges = getHeaderMerges(headerData);

      // 如果表头有合并单元格信息，就做下合并
      if (!isEmpty(merges)) {
        worksheet["!merges"] = merges;
      }

      // 接收columns的宽度，并将像素数转换为列宽
      worksheet["!cols"] = flatColumns.map((column) => {
        if (column.width) {
          return { width: parseInt(String(column.width)) / 7.5 };
        }

        return {};
      });

      // 如果指定了表头样式，则把表头样式追加到默认表头样式（表头默认加粗居中）
      const mergedHeaderStyle = {
        alignCenter: true,
        wrap: true,
        ...headerStyle,
      };

      const range = utils.decode_range(worksheet["!ref"] as string);

      for (let c = range.s.c; c <= range.e.c; c++) {
        for (
          let headerIndex = 0;
          headerIndex < headerData.length;
          headerIndex += 1
        ) {
          const cell = utils.encode_cell({ r: headerIndex, c: c });
          worksheet[cell].s = convertCssToXlsxStyle(mergedHeaderStyle);
        }
      }

      // 如果某个单元格指定了样式，则设置该单元格的样式
      flatColumns.forEach((column, columnIndex) => {
        dataSource.forEach((record, rowIndex) => {
          const cellStyle = {};

          if (column.cellStyle) {
            merge(cellStyle, column.cellStyle);
          }

          // 优先级：传函数 > 直接传对象
          if (column.cellStyleRender) {
            merge(
              cellStyle,
              column.cellStyleRender?.(
                record[column.dataIndex!],
                record,
                rowIndex
              )
            );
          }

          if (!isEmpty(cellStyle)) {
            const coordinate = getCellCoordinate(
              rowIndex,
              columnIndex,
              headerData.length
            );
            worksheet[coordinate].s = convertCssToXlsxStyle(cellStyle);
          }
        });
      });

      // 将工作表添加到工作簿中
      utils.book_append_sheet(
        workbook,
        worksheet,
        truncate(sheetName, {
          length: 31,
          omission: "",
        })
      );
    };

    if (Array.isArray(sheet)) {
      sheet.forEach((sheetItem) => generateSheet(sheetItem));
    } else {
      generateSheet(sheet);
    }

    writeFile(workbook, outputFileName);
  } catch (e) {
    console.error(e);
  }
};
