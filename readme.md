<div align="center">

# 🛠️ @qisexin/utils-tool

[![npm version](https://img.shields.io/npm/v/@qisexin/utils-tool.svg?style=flat-square)](https://www.npmjs.com/package/@qisexin/utils-tool)
[![npm downloads](https://img.shields.io/npm/dm/@qisexin/utils-tool.svg?style=flat-square)](https://www.npmjs.com/package/@qisexin/utils-tool)
[![license](https://img.shields.io/npm/l/@qisexin/utils-tool.svg?style=flat-square)](https://github.com/2218675712/qisexin-utils/blob/main/LICENSE.txt)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/2218675712/qisexin-utils/ci.yml?style=flat-square)](https://github.com/2218675712/qisexin-utils/actions)
[![codecov](https://img.shields.io/codecov/c/github/2218675712/qisexin-utils?style=flat-square)](https://codecov.io/gh/2218675712/qisexin-utils)

**🚀 个人前端工具库，将工作中常用的方法封装成小函数，持续丰富中**

[English](./readmeEN.md) | 简体中文

</div>

---

## 📖 目录

<details>
<summary>点击展开完整目录</summary>

- [🚀 安装](#-安装)
- [📦 快速开始](#-快速开始)
- [✨ 项目特点](#-项目特点)
- [📚 API 文档](#-api-文档)
  - [🔤 字符串处理](#-字符串处理)
  - [🔢 数字处理](#-数字处理)
  - [📦 对象处理](#-对象处理)
  - [⏰ 日期时间](#-日期时间)
  - [🌐 DOM 操作](#-dom-操作)
  - [🔗 URL 处理](#-url-处理)
  - [🛠️ 工具函数](#️-工具函数)
  - [📊 Echarts 工具](#-echarts-工具)
- [🎨 Antd 相关工具](#-antd-相关工具)
- [🪝 自定义 Hooks](#-自定义-hooks)
- [🤝 贡献指南](#-贡献指南)
- [📄 许可证](#-许可证)
- [🔗 相关链接](#-相关链接)

</details>

## 🚀 安装

```bash
# npm
npm install @qisexin/utils-tool

# yarn
yarn add @qisexin/utils-tool

# pnpm
pnpm add @qisexin/utils-tool
```

## 📦 快速开始

```javascript
// ES6 模块导入
import { toThousands, getQueryString } from '@qisexin/utils-tool';

// 使用示例
const formattedNumber = toThousands(1234567.89); // "1,234,567.89"
const urlParam = getQueryString('id'); // 获取URL参数
```

<details>
<summary>更多导入方式</summary>

```javascript
// CommonJS 导入
const { toThousands, getQueryString } = require('@qisexin/utils-tool');

// 按需导入（推荐）
import { toThousands } from '@qisexin/utils-tool/formatNumber';
import { getQueryString } from '@qisexin/utils-tool/other';

// Antd 工具导入
import { CopyToClipboard, downloadExcel } from '@qisexin/utils-tool/antd-utils';

// Hooks 导入
import { useLocalStorageState } from '@qisexin/utils-tool/hooks';
```

</details>

## ✨ 项目特点

<table>
<tr>
<td align="center">🎯</td>
<td><strong>TypeScript 支持</strong><br/>使用 TypeScript 编写，提供完整的类型定义文件</td>
</tr>
<tr>
<td align="center">📦</td>
<td><strong>多格式支持</strong><br/>使用 Rollup 打包，提供 ESM、CJS 两种格式</td>
</tr>
<tr>
<td align="center">🌳</td>
<td><strong>按需引入</strong><br/>支持多入口打包，减轻打包体积</td>
</tr>
<tr>
<td align="center">🚫</td>
<td><strong>零依赖</strong><br/>核心工具函数无外部依赖</td>
</tr>
<tr>
<td align="center">🧪</td>
<td><strong>全面测试</strong><br/>完整的单元测试覆盖</td>
</tr>
<tr>
<td align="center">📖</td>
<td><strong>完善文档</strong><br/>详细的 API 文档和使用示例</td>
</tr>
</table>

## 📚 API 文档

### 🔤 字符串处理

<details>
<summary>展开查看字符串处理函数</summary>

#### `encodeValue(val: string): string`
编码字符串中的特殊字符，将特殊字符转换为 URL 编码格式

**参数：**
- `val` (string): 需要编码的字符串

**返回值：** `string` - 编码后的字符串

```javascript
encodeValue('test?name=value') // => 'test%3Fname%3Dvalue'
encodeValue('hello world') // => 'hello%20world'
```

#### `decodeValue(val: string): string`
解码字符串中的特殊字符，将 URL 编码格式转换为原始字符

**参数：**
- `val` (string): 需要解码的字符串

**返回值：** `string` - 解码后的字符串

```javascript
decodeValue('test%3Fname%3Dvalue') // => 'test?name=value'
decodeValue('hello%20world') // => 'hello world'
```

#### `getActualWidthOfChars(text: string, options?: { font?: string }): number`
通过 Canvas 获取字符串的实际像素宽度，支持自定义字体

**参数：**
- `text` (string): 需要测量的文本
- `options` (object, 可选): 配置选项
  - `font` (string, 可选): 字体样式，默认为 '12px Arial'

**返回值：** `number` - 文本的像素宽度

```javascript
getActualWidthOfChars('Hello World') // => 66
getActualWidthOfChars('性能数据', { font: '14px Microsoft YaHei' }) // => 56
```

#### `generateRandomColor(): string[]`
生成随机颜色数组，返回 10 个随机的 RGB 颜色值

**返回值：** `string[]` - 包含 10 个 RGB 颜色字符串的数组

```javascript
generateRandomColor()
// => ['rgb(48, 62, 6)', 'rgb(123, 45, 67)', 'rgb(200, 100, 150)', ...]
```

#### `getRandomKey(): string`
生成随机的唯一标识符，基于时间戳和随机数

**返回值：** `string` - 随机生成的唯一标识符

```javascript
getRandomKey() // => '1701234567890_abc123'
getRandomKey() // => '1701234567891_def456'
```

</details>

### 🔢 数字处理

<details>
<summary>展开查看数字处理函数</summary>

#### `toThousands(x: number, digits?: number): string`
将数字转换为千位分隔符格式，支持指定小数位数

**参数：**
- `x` (number): 需要格式化的数字
- `digits` (number, 可选): 小数位数，默认保持原有精度

**返回值：** `string` - 格式化后的字符串

```javascript
toThousands(1234567.89) // => "1,234,567.89"
toThousands(1234567.123, 2) // => "1,234,567.12"
toThousands(1000) // => "1,000"
```

#### `convertSpecialNumbers(num: number): number`
处理特殊数字值，将 NaN 和 Infinity 转换为 0

**参数：**
- `num` (number): 需要处理的数字

**返回值：** `number` - 处理后的数字

```javascript
convertSpecialNumbers(NaN) // => 0
convertSpecialNumbers(Infinity) // => 0
convertSpecialNumbers(-Infinity) // => 0
convertSpecialNumbers(123) // => 123
```

#### `convertEmptyNumber(num: any): string | number`
处理空值数字显示，0 显示为 0，null/undefined 显示为 '--'

**参数：**
- `num` (any): 需要处理的值

**返回值：** `string | number` - 处理后的显示值

```javascript
convertEmptyNumber(null) // => '--'
convertEmptyNumber(undefined) // => '--'
convertEmptyNumber(0) // => 0
convertEmptyNumber(123) // => 123
```

#### `bytesConverter(bytes: number, unit: string): string`
字节单位转换，将字节数转换为指定单位

**参数：**
- `bytes` (number): 字节数
- `unit` (string): 目标单位 ('B', 'KB', 'MB', 'GB', 'TB')

**返回值：** `string` - 转换后的字符串（包含单位）

```javascript
bytesConverter(1024, 'KB') // => '1KB'
bytesConverter(4 * 1024 * 1024, 'MB') // => '4MB'
bytesConverter(1073741824, 'GB') // => '1GB'
```

</details>

### 📦 对象处理

<details>
<summary>展开查看对象处理函数</summary>

#### `encodeObject(obj: Record<string, any>): Record<string, any>`
递归编码对象中所有字符串值的特殊字符

**参数：**
- `obj` (Record<string, any>): 需要编码的对象

**返回值：** `Record<string, any>` - 编码后的新对象

```javascript
encodeObject({ name: 'hello world', desc: 'test?value' })
// => { name: 'hello%20world', desc: 'test%3Fvalue' }
```

#### `decodeObject(obj: Record<string, any>): Record<string, any>`
递归解码对象中所有字符串值的特殊字符

**参数：**
- `obj` (Record<string, any>): 需要解码的对象

**返回值：** `Record<string, any>` - 解码后的新对象

```javascript
decodeObject({ name: 'hello%20world', desc: 'test%3Fvalue' })
// => { name: 'hello world', desc: 'test?value' }
```

#### `escapeRegExpObject(obj: Record<string, any>): Record<string, any>`
转义对象中所有字符串值的正则表达式特殊字符

**参数：**
- `obj` (Record<string, any>): 需要转义的对象

**返回值：** `Record<string, any>` - 转义后的新对象

```javascript
escapeRegExpObject({ pattern: '[test]', regex: '(.*?)' })
// => { pattern: '\\[test\\]', regex: '\\(\\.\\*\\?\\)' }
```

#### `replaceKeys<T>(obj: T, keysMap: Record<string, string>): T`
根据映射表替换对象或数组中的键名

**参数：**
- `obj` (T): 需要处理的对象或数组
- `keysMap` (Record<string, string>): 键名映射表

**返回值：** `T` - 替换键名后的新对象或数组

```javascript
replaceKeys({ oldKey: 'value' }, { oldKey: 'newKey' })
// => { newKey: 'value' }

replaceKeys([{ a: 1 }, { a: 2 }], { a: 'b' })
// => [{ b: 1 }, { b: 2 }]
```

</details>

### ⏰ 日期时间

<details>
<summary>展开查看日期时间函数</summary>

#### `checkAndCompleteDate(dateString: string): string`
检查日期字符串格式，如果没有时分秒则自动补充 23:59:59

**参数：**
- `dateString` (string): 日期字符串

**返回值：** `string` - 完整的日期时间字符串

```javascript
checkAndCompleteDate('2023-12-01') // => '2023-12-01 23:59:59'
checkAndCompleteDate('2023-12-01 10:30:00') // => '2023-12-01 10:30:00'
```

#### `showDuration(options: { startTime: string; endTime: string; language?: 'zh' | 'en' }): string`
计算并格式化两个时间点之间的时长

**参数：**
- `options` (object): 配置选项
  - `startTime` (string): 开始时间
  - `endTime` (string): 结束时间
  - `language` ('zh' | 'en', 可选): 语言，默认为 'zh'

**返回值：** `string` - 格式化的时长字符串

```javascript
showDuration({
  startTime: '2023-12-01 10:00:00',
  endTime: '2023-12-01 13:30:45'
}) // => '3小时30分钟45秒'

showDuration({
  startTime: '2023-12-01 10:00:00',
  endTime: '2023-12-01 13:30:45',
  language: 'en'
}) // => '3h30m45s'
```

#### `formatUUID(uuidStr: string): string`
将 32 位 UUID 字符串转换为标准的带连字符格式

**参数：**
- `uuidStr` (string): 32 位 UUID 字符串

**返回值：** `string` - 标准格式的 UUID 字符串

```javascript
formatUUID('550e8400e29b41d4a716446655440000')
// => '550e8400-e29b-41d4-a716-446655440000'
```

</details>

### 🌐 DOM 操作

<details>
<summary>展开查看 DOM 操作函数</summary>

#### `copyToClipboard(text: string): Promise<void>`
复制文本到剪贴板，支持现代浏览器的 Clipboard API

**参数：**
- `text` (string): 需要复制的文本

**返回值：** `Promise<void>` - 复制操作的 Promise

```javascript
await copyToClipboard('Hello World')
copyToClipboard('https://example.com').then(() => {
  console.log('复制成功')
})
```

#### `scrollToAnchor(anchorName: string): void`
平滑滚动到指定的锚点元素

**参数：**
- `anchorName` (string): 锚点元素的 ID

**返回值：** `void`

```javascript
scrollToAnchor('section1') // 滚动到 id="section1" 的元素
scrollToAnchor('top') // 滚动到 id="top" 的元素
```

</details>

### 🔗 URL 处理

<details>
<summary>展开查看 URL 处理函数</summary>

#### `getQueryString(name: string): string | null`
从当前页面 URL 中获取指定参数的值

**参数：**
- `name` (string): 参数名

**返回值：** `string | null` - 参数值，不存在时返回 null

```javascript
// 当前 URL: https://example.com?id=123&name=test
getQueryString('id') // => '123'
getQueryString('name') // => 'test'
getQueryString('notexist') // => null
```

#### `urlParamsToObject(url: string): Record<string, string>`
将 URL 中的查询参数转换为对象

**参数：**
- `url` (string): 完整的 URL 字符串

**返回值：** `Record<string, string>` - 参数对象

```javascript
urlParamsToObject('https://example.com?id=123&name=test&active=true')
// => { id: '123', name: 'test', active: 'true' }
```

#### `objectToUrlParams(params: Record<string, any>): string`
将对象转换为 URL 查询参数字符串

**参数：**
- `params` (Record<string, any>): 参数对象

**返回值：** `string` - URL 参数字符串

```javascript
objectToUrlParams({ id: 123, name: 'test', active: true })
// => 'id=123&name=test&active=true'
```

</details>

### 🛠️ 工具函数

<details>
<summary>展开查看工具函数</summary>

#### `mixedSort(a: any, b: any): number`
中英文数字混合排序比较函数，排序优先级：数字 > 英文字母 > 中文拼音

**参数：**
- `a` (any): 第一个比较值
- `b` (any): 第二个比较值

**返回值：** `number` - 比较结果 (-1, 0, 1)

```javascript
const arr = ['中文', '1', 'apple', '2', '测试', 'banana']
arr.sort(mixedSort)
// => ['1', '2', 'apple', 'banana', '测试', '中文']
```

</details>

### 📊 Echarts 工具

<details>
<summary>展开查看 Echarts 工具函数</summary>

#### `largeDataTooltipOptimization(params: any, labelField: string, rowsPerColumn: number, defaultColumnWidth: number): string`
优化 Echarts 大数据量下的 Tooltip 显示，支持多列布局

**参数：**
- `params` (any): Echarts tooltip 的 params 参数
- `labelField` (string): 用作标签的字段名
- `rowsPerColumn` (number): 每列显示的行数
- `defaultColumnWidth` (number): 默认列宽（像素）

**返回值：** `string` - 格式化的 HTML 字符串

```javascript
// 在 Echarts 配置中使用
const option = {
  tooltip: {
    formatter: (params) => largeDataTooltipOptimization(
      params,
      'deviceName',
      10,
      200
    )
  }
}
```

</details>

## 🎨 Antd 相关工具

> ⚠️ **注意**: 使用 antd-utils 时，需要在项目中安装 `react`、`react-dom`、`antd`，并从 `@qisexin/utils-tool/antd-utils` 内引入方法

<details>
<summary>展开查看 Antd 工具</summary>

### CopyToClipboard 组件
复制到剪贴板的 React 组件，基于 Antd 的 Button 组件

**Props：**
- `copyText` (string): 需要复制的文本内容
- `children` (ReactNode): 按钮显示内容
- 其他 Antd Button 组件支持的 props

```tsx
import { CopyToClipboard } from '@qisexin/utils-tool/antd-utils';

// 基础用法
<CopyToClipboard copyText="需要复制的内容">
  点击复制
</CopyToClipboard>

// 自定义样式
<CopyToClipboard
  copyText="https://example.com"
  type="primary"
  size="small"
>
  复制链接
</CopyToClipboard>
```

### downloadExcel
基础的 Excel 文件下载功能

**函数签名：**
```typescript
downloadExcel(data: any[], filename?: string): void
```

**参数：**
- `data` (any[]): 要导出的数据数组
- `filename` (string, 可选): 文件名，默认为 'export.xlsx'

```tsx
import { downloadExcel } from '@qisexin/utils-tool/antd-utils';

const data = [
  { name: '张三', age: 25, city: '北京' },
  { name: '李四', age: 30, city: '上海' }
];

downloadExcel(data, '用户列表.xlsx');
```

### downloadXlsxPro
高级 Excel 文件下载功能，支持复杂样式定制、多工作表、合并单元格等

**主要特性：**
- ✅ 支持多工作表
- ✅ 支持单元格样式定制（字体、颜色、边框等）
- ✅ 支持合并单元格
- ✅ 支持列宽自适应
- ✅ 支持数据类型转换
- ✅ 支持自定义表头

详细使用方法请参考：[downloadXlsxPro 文档](src/antd-utils/downloadXlsxPro.md)

### getColumnSearchProps
为 Antd Table 添加本地搜索功能的高阶函数

**函数签名：**
```typescript
getColumnSearchProps(dataIndex: string, searchInput?: RefObject<InputRef>): ColumnType<any>
```

**参数：**
- `dataIndex` (string): 要搜索的列字段名
- `searchInput` (RefObject<InputRef>, 可选): 搜索输入框的 ref

**返回值：** `ColumnType<any>` - Antd Table 列配置对象

```tsx
import { getColumnSearchProps } from '@qisexin/utils-tool/antd-utils';
import { useRef } from 'react';
import type { InputRef } from 'antd';

const MyTable = () => {
  const searchInput = useRef<InputRef>(null);
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name', searchInput),
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      ...getColumnSearchProps('age'),
    }
  ];
  
  return <Table columns={columns} dataSource={data} />;
};
```

</details>

## 🪝 自定义 Hooks

<details>
<summary>展开查看自定义 Hooks</summary>

### useLocalStorageState
将状态存储在 localStorage 中的 Hook，支持跨标签页通信和 SSR

**函数签名：**
```typescript
useLocalStorageState<T>(
  key: string,
  defaultValue?: T | (() => T),
  options?: {
    defaultValue?: T | (() => T);
    serializer?: Serializer<T>;
    onError?: (error: Error) => void;
  }
): [T, (value: T | ((prevState: T) => T)) => void]
```

**参数：**
- `key` (string): localStorage 的键名
- `defaultValue` (T | (() => T), 可选): 默认值或默认值工厂函数
- `options` (object, 可选): 配置选项
  - `defaultValue` (T | (() => T), 可选): 默认值（优先级高于第二个参数）
  - `serializer` (Serializer<T>, 可选): 自定义序列化器
  - `onError` ((error: Error) => void, 可选): 错误处理函数

**返回值：** `[T, (value: T | ((prevState: T) => T)) => void]` - 状态值和设置函数

```tsx
import { useLocalStorageState } from '@qisexin/utils-tool/hooks';

// 基础用法
const [count, setCount] = useLocalStorageState('count', 0);

// 使用对象
const [user, setUser] = useLocalStorageState('user', {
  name: '',
  age: 0
});

// 自定义配置
const [theme, setTheme] = useLocalStorageState('theme', 'light', {
  onError: (error) => {
    console.error('localStorage error:', error);
  }
});

// 函数式更新
setCount(prev => prev + 1);
```

</details>

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目基于 [MIT](LICENSE.txt) 许可证开源。

## 🔗 相关链接

- [NPM 包地址](https://www.npmjs.com/package/@qisexin/utils-tool)
- [GitHub 仓库](https://github.com/2218675712/qisexin-utils)
- [问题反馈](https://github.com/2218675712/qisexin-utils/issues)

---

<div align="center">

如果这个工具库对你有帮助，请给个 ⭐️ 支持一下！

</div>
