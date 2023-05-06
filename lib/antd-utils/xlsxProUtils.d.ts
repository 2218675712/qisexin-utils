import React from "react";
import { CellColumnType, CellStyle } from "./xlsxProInterface";
/** 转换css样式成xlsx-js-style样式 */
export declare const convertCssToXlsxStyle: (css?: CellStyle) => any;
/** 递归获取任何类型的文本内容，兼容title不为string、或render返回的结果不为string的情况 */
export declare const getRenderedText: (value: React.ReactNode) => any;
/**
 * 根据行索引和列索引，拿到单元格坐标
 * @param rowIndex 行索引
 * @param columnIndex 列索引
 * @param headerRows 表头行数
 * @returns 单元格坐标
 */
export declare const getCellCoordinate: (rowIndex: number, columnIndex: number, headerRows: number) => string;
/**
 * 根据headerData提取出xlsx-js-style可识别的表头单元格合并信息
 * @param headerData 基于columns生成的字符串表头
 * @returns !merge能识别的单元格合并信息
 */
export declare const getHeaderMerges: (headerData: Array<string>[]) => {
    s: {
        r: number;
        c: number;
    };
    e: {
        r: number;
        c: number;
    };
}[];
/**
 * 获取columns的最大深度
 * @param columns 支持表格分组的columns
 * @returns 表头的行数
 */
export declare const getColumnsDepth: (columns: CellColumnType[]) => number;
/**
 * 生成支持表头分组的的字符串表头
 * @param columns 支持表格分组的columns
 * @returns 表头数据
 */
export declare const generateHeader: (columns: CellColumnType[]) => string[][];
/**
 * 基于columns生成扁平化的flatColumns，兼容表头分组的情况
 * @param columns 支持表格分组的columns
 */
export declare const generateFlatColumns: (columns: CellColumnType[]) => CellColumnType<any>[];
export declare const getCellWidth: (str: string) => number;
