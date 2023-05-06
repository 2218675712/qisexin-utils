/// <reference types="react" />
import type { FilterDropdownProps } from 'antd/lib/table/interface';
/**
 * antd table 加入本地搜索
 * @param dataIndex 索引
 */
export declare const getColumnSearchProps: (dataIndex: string) => {
    filterIcon: (filtered: boolean) => JSX.Element;
    onFilter: (val: string | number | boolean, record: any) => boolean;
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, }: FilterDropdownProps) => JSX.Element;
};
