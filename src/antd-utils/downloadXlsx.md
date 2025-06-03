# downloadXlsx

`downloadXlsx`通过简单的数据传入，就可以在前端下载一张`xlsx`表格到本地。

该方法的适用场景：

- 后端接口来不及提供
- 灵活导出通过前端静态筛选后的数据
- 数据量不大

::: tip
该方法的 api 设计受到 antd 的启发，表头和表格内容的数据格式与 antd 的 Table 组件设计保持一致，核心思想是通过传入`columns`和`dataSource`来生成表格。

但是由于写入表格的数据类型本质是字符串，而`columns`的`render`函数除了能生成类似“--”这样的字符串，也能生成`Tooltip`、`Button`等复杂的`ReactElement`，因此并不能将 web 的表现形式原封不动搬到 excel 表格中。

`downloadXlsx`方法并不会对`columns`的`render`函数进行识别或执行，如有需要，请先对`dataSource`数据做预处理，详见下方示例。
:::

::: warning
从 2.0.0 版本开始，新增的`downloadXlsxPro`已经全面增加了对`columns`各项属性的识别，包括`render`函数，实现了对`columns`和`dataSource`的零转换，欢迎使用。
:::

## 代码演示

### 下载单张工作表的 xlsx 文件

```typescript
import { downloadXlsx } from "testplus-fe-utils";

// 单个工作表对象
const sheetOption = {
  columns: [
    { title: "姓名", dataIndex: "name" },
    { title: "年龄", dataIndex: "age" },
  ],
  dataSource: [
    { name: "张三", age: 24 },
    { name: "燕子", age: 18 },
  ],
};

downloadXlsx({
  fileName: "基本信息",
  sheet: sheetOption,
});
```

### 对工作表进行命名

在不传入`sheetName`参数时，默认生成的工作表名格式为：Sheet1、Sheet2、Sheet3...，以此类推。

可以在工作表对象内传入`sheetName`参数，定制工作表名。

```diff
// 单个工作表对象
const sheetOption = {
+ sheetName: "工作表A",
  columns: [
    { title: "姓名", dataIndex: "name" },
    { title: "年龄", dataIndex: "age" },
  ],
  dataSource: [
    { name: "张三", age: 24 },
    { name: "燕子", age: 18 },
  ],
};
```

### 下载多张工作表组成的 xlsx 文件

只需要传入多个工作表对象即可。

```typescript
import { downloadXlsx } from "testplus-fe-utils";

// 多个工作表对象组成的数组
const sheetOptionList = [
  {
    sheetName: "工作表A",
    columns: [
      { title: "姓名", dataIndex: "name" },
      { title: "年龄", dataIndex: "age" },
    ],
    dataSource: [
      { name: "张三", age: 24 },
      { name: "燕子", age: 18 },
    ],
  },
  {
    sheetName: "工作表B",
    columns: [{ title: "要求技能", dataIndex: "skills" }],
    dataSource: [
      { skills: "css" },
      { skills: "html" },
      { skills: "javascript" },
    ],
  },
];

downloadXlsx({
  fileName: "基本信息",
  sheet: sheetOptionList,
});
```

### 根据 render 对 dataSource 做预处理

以我们平常开发的表格页面为例，对于复杂的`columns`，以下示例展示了如何对 `dataSource` 做格式转换。

```typescript
import { downloadXlsx } from "testplus-fe-utils";
import { Button, Tag } from "antd";

const columns = [
  { title: "姓名", dataIndex: "name", key: "name" },
  { title: "年龄", dataIndex: "age", key: "age" },
  {
    title: "性别",
    dataIndex: "gender",
    key: "gender",
    render: (val) => {
      if (val === "male") {
        return <Tag color="cyan">男</Tag>;
      }
      if (val === "female") {
        return <Tag color="red">女</Tag>;
      }
      return "-";
    },
  },
  {
    title: "操作",
    dataIndex: "operate",
    key: "operate",
    render: (_, record) => {
      return <Button onClick={() => console.log(record)}>编辑</Button>;
    },
  },
];

const dataSource = [
  { name: "张三", age: 24, gender: "male" },
  { name: "燕子", age: 18, gender: "female" },
];

const sheetOption = {
  sheetName: "工作表A",
  // 过滤“操作”列
  columns: columns.filter((column) => column.dataIndex !== "operate"),
  // 对gender字段做格式化，注意不要影响源数据
  dataSource: dataSource.map(({ gender, ...rest }) => {
    const genderMap = {
      male: "男",
      female: "女",
    };

    return {
      ...rest,
      gender: genderMap[gender] || "",
    };
  }),
};

downloadXlsx({
  fileName: "基本信息",
  sheet: sheetOption,
});
```

## API

### Params

| 参数     |                        说明                         |                    类型                    | 默认值 | 是否必填 |
| -------- | :-------------------------------------------------: | :----------------------------------------: | -----: | -------: |
| fileName | 下载文件名，如果检测到未添加`.xlsx`后缀，会进行补齐 |                  `string`                  |      - |       是 |
| sheet    |                     工作表配置                      | `XlsxSheetOptions` \| `XlsxSheetOptions[]` |      - |       是 |

### XlsxSheetOptions

| 参数       |     说明     |                             类型                             |            默认值 | 是否必填 |
| ---------- | :----------: | :----------------------------------------------------------: | ----------------: | -------: | ---- | -------------- | --- | --- |
| sheetName  | 当前工作表名 |                           `string`                           | Sheet1、Sheet2... |       否 |
| columns    |     表头     | `{ dataIndex: string; title: string; [key: string]: any }[]` |                 - |       是 |
| dataSource |   数据内容   |                   `{ [key: string]: string                   |            number |  boolean | null | undefined }[]` | -   | 是  |
