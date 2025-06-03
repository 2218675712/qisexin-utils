import { utils, writeFile } from "xlsx";
import { keyBy, mapValues, pick, truncate } from "lodash-es";

export type BaseSheetOptions = {
  /** 头部 */
  columns: { dataIndex: string; title: string; [key: string]: any }[];

  /** 数据内容 */
  dataSource: { [key: string]: string | number | boolean | null | undefined }[];
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

// 前端下载xlsx
const downloadXlsx = (params: DownloadXlsxType): void => {
  try {
    const { fileName, sheet } = params;

    const outputFileName = /(\.xlsx)$/.test(fileName)
      ? fileName
      : `${fileName}.xlsx`;

    const workbook = utils.book_new();

    // 生成工作表
    const generateSheet = (options: XlsxSheetOptions) => {
      const { sheetName, columns, dataSource } = options;

      const header = columns.map((column) => column.dataIndex);

      const insert = mapValues(keyBy(columns, "dataIndex"), "title");

      const rows = [
        insert,
        ...dataSource?.map((record) => pick(record, header)),
      ];

      const singleSheet = utils.json_to_sheet(rows, {
        header,
        skipHeader: true,
      });

      utils.book_append_sheet(
        workbook,
        singleSheet,
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

// 前端下载csv
const downloadCsv = (params: DownloadCsvType): void => {
  try {
    const { fileName, sheet } = params;

    const outputFileName = /(\.csv)$/.test(fileName)
      ? fileName
      : `${fileName}.csv`;

    const workbook = utils.book_new();

    const { columns, dataSource } = sheet;

    const header = columns.map((column) => column.dataIndex);

    const insert = mapValues(keyBy(columns, "dataIndex"), "title");

    const rows = [insert, ...dataSource?.map((record) => pick(record, header))];

    const singleSheet = utils.json_to_sheet(rows, {
      header,
      skipHeader: true,
    });

    utils.book_append_sheet(workbook, singleSheet);

    writeFile(workbook, outputFileName);
  } catch (e) {
    console.error(e);
  }
};

export { downloadXlsx, downloadCsv };
