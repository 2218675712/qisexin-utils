# 个人自用前端工具库

将工作中常用的一些方法封装成一个个小函数，方便以后使用

npm地址：https://www.npmjs.com/package/@qisexin/utils-tool
## ⚠️注意: 使用antd-utils时，需要在项目中安装 'react', 'react-dom', 'antd'

使用说明

```tsx
import { getColumnSearchProps } from '@qisexin/utils-tool/antd-utils';
//antd table columns配置
[{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
    ...getColumnSearchProps('name'),
}]
```
