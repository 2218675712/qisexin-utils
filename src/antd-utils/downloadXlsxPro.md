# downloadXlsxPro

`downloadXlsxPro`是 `downloadXlsx`的升级版，在完全兼容了原 `downloadXlsx`的 API 设计的基础上，额外新增了一些特性，包括：

- 实现对 `dataSource`或 `columns`的零转换
- 新增了 `headerStyle`属性，支持表头样式定制
- 新增了 `cellStyle`和 `cellStyleRender`属性，支持单元格样式定制，常用于一些超标数据的高亮
- 支持表头分组

> 当然，这些功能的升级是和复杂度的升级正相关的，也不可避免的会带来一些性能的损耗，和`downloadXlsx`相比，在数据量大的时候（万级），它在下载速度上的劣势会被逐渐放大。如果你非常在意性能，要导出甚至是 10W 级别的数据，那么使用`downloadXlsx`或者`downloadCsv`会是更好的选择。

## 代码演示

由于加入了样式支持，所以我们在 2.0 版本的工具集中做了多入口打包，引用`downloadXlsxPro`的方式有变化，需从`testplus-fe-utils/downloadXlsxPro`而非默认入口导入。

### 实现对 dataSource 和 columns 的零转换

```tsx
import { downloadXlsxPro } from "testplus-fe-utils/downloadXlsxPro";
import { CellColumnType } from "testplus-fe-utils/lib/xlsxProInterface";

type ResultItem = {
  name: string;
  age: number;
  gender: string;
};

// 这里演示了如何使用工具集的CellColumnType来规避typescript的语法检查
// 如果需要严谨的语法提示，像antd/lib/table中的ColumnType那样传入一个泛型即可
const columns: CellColumnType<ResultItem>[] = [
  {
    title: (
      <div>
        <span>姓名</span>
        <Tooltip title="表示人的名字">
          <QuestionCircleOutlined />
        </Tooltip>
      </div>
    ),
    dataIndex: "name",
    key: "name",
  },
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
];

const dataSource = [
  { name: "张三", age: 24, gender: "male" },
  { name: "燕子", age: 18, gender: "female" },
];

downloadXlsxPro({
  fileName: "基本信息",
  sheet: {
    columns,
    dataSource,
  },
});
```

### 表头分组

`columns[n]` 可以内嵌 `children`，以支持分组表头导出。

```tsx
const columns = [
  {
    title: "运动偏好",
    // 当存在表头分组时，和antd一样，自身不需要dataIndex和key
    children: [
      {
        title: "室内运动",
        dataIndex: "indoor",
        key: "indoor",
      },
      {
        title: "室外运动",
        dataIndex: "outdoor",
        key: "outdoor",
      },
    ],
  },
];
```

### 定制表头样式

```tsx
downloadXlsxPro({
  fileName: "基本信息",
  sheet: {
    columns,
    dataSource,
    // 在工作表中增加headerStyle，表头样式默认居中
    headerStyle: {
      color: "#ffffff",
      fontSize: 18,
      backgroundColor: "#1f78d1",
      borderColor: "#000000",
    },
  },
});
```

### 定制单元格样式

```tsx
Ïconst columns = [
  {
    title: (
      <div>
        <span>姓名</span>
        <Tooltip title="表示人的名字">
          <QuestionCircleOutlined />
        </Tooltip>
      </div>
    ),
    dataIndex: "name",
    key: "name",
    // 支持直接传入cellStyle对象
    cellStyle: {
      alignCenter: true,
    },
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    // 支持传入cellStyleRender函数，入参与render函数一致
    cellStyleRender: (val) =>
      val < 20
        ? { color: "#ff0000", alignCenter: true }
        : { alignCenter: true },
  },
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
    // 支持width宽度识别
    width: 300,
    cellStyle: {
      alignCenter: true,
    },
  },
];
```

## API

### params

|   参数   |                         说明                         |                       类型                       | 默认值 | 是否必填 |
| :------: | :--------------------------------------------------: | :----------------------------------------------: | :----: | :------: |
| fileName | 下载文件名，如果检测到未添加 `.xlsx`后缀，会进行补齐 |                     `string`                     |   -    |    是    |
|  sheet   |                      工作表配置                      | `XlsxProSheetOptions` ｜ `XlsxProSheetOptions[]` |   -    |    是    |

### XlsxProSheetOptions

|    参数    |              说明              |        类型        |      默认值       | 是否必填 |
| :--------: | :----------------------------: | :----------------: | :---------------: | :------: |
| sheetName  |          当前工作表名          |      `string`      | Sheet1、Sheet2... |    否    |
|  columns   | 表格列的配置描述，具体项见下表 | `CellColumnType[]` |         -         |    是    |
| dataSource |            数据数组            |     `object[]`     |         -         |    是    |

### CellColumnType

|      参数       |                               说明                               |                 类型                  | 默认值 |           是否必填           |
| :-------------: | :--------------------------------------------------------------: | :-----------------------------------: | :----: | :--------------------------: |
|      title      |                           列头显示文字                           |   `ReactNode` \| `() => ReactNode`    |   -    |              是              |
|    dataIndex    |                    列数据在数据项中对应的路径                    |               `string`                |   -    | 是，如果包含表头分组则非必填 |
|       key       |                         React 需要的 key                         |               `string`                |   -    |              否              |
|      width      |                              列宽度                              |         `string` \| `number`          |   -    |              否              |
|     render      | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 |    `(value, record, index) => {}`     |   -    |              否              |
|    children     |                             表头分组                             |           `CellColumnType`            |   -    |              否              |
|    cellStyle    |                          设置当前列样式                          |              `CellStyle`              |   -    |              否              |
| cellStyleRender |  生成列样式的渲染函数，参数分别为当前行的值，当前行数据，行索引  | `(value, record, index) => CellStyle` |   -    |              否              |

### CellStyle

|      参数       |                  说明                   |         类型         |               默认值                | 是否必填 |
| :-------------: | :-------------------------------------: | :------------------: | :---------------------------------: | :------: |
|      color      | 字体颜色，只支持十六进制 HEX 格式的颜色 |       `string`       |                  -                  |    否    |
| backgroundColor |                背景颜色                 |       `string`       |                  -                  |    否    |
|    fontSize     |                字体大小                 | `string` \| `number` |                  -                  |    否    |
|   fontWeight    |                字体粗细                 | `string` \| `number` |                  -                  |    否    |
|   alignCenter   |            是否垂直水平居中             |      `boolean`       | 单元格中为 `false`，表头中为 `true` |    否    |
|      wrap       |              是否自动换行               |      `boolean`       |               `false`               |    否    |
