import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import type { FilterDropdownProps } from 'antd/lib/table/interface';

export const getColumnSearchProps = (dataIndex: string) => ({
    filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>
    ),
    onFilter: (val: string | number | boolean, record: any) =>
        String(record[dataIndex])
            .toLowerCase()
            .includes((val as string).toLowerCase()),
    filterDropdown: ({
                         setSelectedKeys,
                         selectedKeys,
                         confirm,
                         clearFilters,
                     }: FilterDropdownProps) => (
        <div style={{padding: 8}}>
            <Input
                placeholder="请输入内容进行搜索"
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => confirm()}
                style={{marginBottom: 8, display: 'block'}}
            />
            <Space>
                <Button
                    onClick={() => {
                        clearFilters?.();
                        confirm();
                    }}
                    size="small"
                    style={{width: 90}}
                >
                    重置
                </Button>
                <Button type="primary" onClick={() => confirm()} size="small" style={{width: 90}}>
                    查询
                </Button>
            </Space>
        </div>
    ),
});
