/*
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table/interface';
import ReactDOM from 'react-dom';
import {getRandomKey} from "@/utils/utils";


import { utils, writeFile } from 'xlsx';
// 功能几乎完美，但是受限于用ReactElement渲染的机制，性能较低，数据量不大的时候可以乱杀
export type BaseSheetOptions = {
  /!** 头部 *!/
  columns: ColumnsType<any>;
  /!** 数据内容 *!/
  dataSource: Record<string, any>[];
};
export type DownloadSnapshotXlsxType = {
  /!** 文件名，如果没有携带xlsx后缀，会自动补齐 *!/
  fileName: string;
  /!** 单个工作表 *!/
  sheet: BaseSheetOptions & {
    /!** 工作表名，如果不传则默认为Sheet1、Sheet2...以此类推 *!/
    sheetName?: string;
  };
};
export const downloadSnapshotExcel = (params: DownloadSnapshotXlsxType) => {
  const { fileName, sheet } = params;
  const { columns, dataSource } = sheet;
  const outputFileName = /(\.xlsx)$/.test(fileName) ? fileName : `${fileName}.xlsx`;
  const ele = document.createElement('div');
  ele.style.display = 'none';
  document.body.appendChild(ele);
  const id = `s${getRandomKey()}`;
  ReactDOM.render(
    [
      <Table
        id={id}
        rowKey={() => getRandomKey()}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />,
    ],
    ele,
    () => {
      const workbook = utils.table_to_book(document.querySelector(`#${id}`), { raw: true });
      writeFile(workbook, outputFileName);
      document.body.removeChild(ele);
    },
  );
};
*/
