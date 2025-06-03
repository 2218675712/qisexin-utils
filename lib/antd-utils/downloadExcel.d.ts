export type BaseSheetOptions = {
    /** 头部 */
    columns: {
        dataIndex: string;
        title: string;
        [key: string]: any;
    }[];
    /** 数据内容 */
    dataSource: {
        [key: string]: string | number | boolean | null | undefined;
    }[];
};
export type XlsxSheetOptions = BaseSheetOptions & {
    /** 工作表名，如果不传则默认为Sheet1、Sheet2...以此类推 */
    sheetName?: string;
};
export type DownloadXlsxType = {
    /** 文件名，如果没有携带xlsx后缀，会自动补齐 */
    fileName: string;
    /** 工作表，可以是单个工作表，也可以是多个工作表 */
    sheet: XlsxSheetOptions | XlsxSheetOptions[];
};
export type DownloadCsvType = {
    /** 文件名，如果没有携带csv后缀，会自动补齐 */
    fileName: string;
    /** 工作表*/
    sheet: BaseSheetOptions;
};
declare const downloadXlsx: (params: DownloadXlsxType) => void;
declare const downloadCsv: (params: DownloadCsvType) => void;
export { downloadXlsx, downloadCsv };
