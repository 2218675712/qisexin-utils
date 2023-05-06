import React from "react";
export type CellStyle = {
    /** 字体颜色 - 只支持十六进制HEX格式的颜色 */
    color?: string;
    /** 背景颜色 - 只支持十六进制HEX格式的颜色 */
    backgroundColor?: string;
    /** 字体大小 */
    fontSize?: string | number;
    /** 字体粗细 */
    fontWeight?: string | number;
    /** 是否垂直水平居中 */
    alignCenter?: boolean;
    /** 是否自动换行 */
    wrap?: boolean;
    /** 边框颜色，默认为#b4b4b4 */
    borderColor?: string;
};
export interface CellColumnType<T = any> {
    title: React.ReactNode | (() => React.ReactNode);
    dataIndex?: string;
    key?: React.Key;
    width?: string | number;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    cellStyle?: CellStyle;
    cellStyleRender?: (value: any, record: T, index: number) => CellStyle;
    children?: CellColumnType<T>[];
    [key: string]: any;
}
export type XlsxProSheetOptions = {
    /** 头部 */
    columns: CellColumnType[];
    /** 数据内容 */
    dataSource: Record<string, any>[];
    /** 工作表名，如果不传则默认为Sheet1、Sheet2...以此类推 */
    sheetName?: string;
    /** 头部样式，不传则使用默认样式 */
    headerStyle?: CellStyle;
};
export type DownloadXlsxProType = {
    /** 文件名，如果没有携带xlsx后缀，会自动补齐 */
    fileName: string;
    /** 工作表，可以是单个工作表，也可以是多个工作表 */
    sheet: XlsxProSheetOptions | XlsxProSheetOptions[];
};
