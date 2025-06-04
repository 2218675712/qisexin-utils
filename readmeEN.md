<div align="center">

# 🛠️ @qisexin/utils-tool

[![npm version](https://img.shields.io/npm/v/@qisexin/utils-tool.svg?style=flat-square)](https://www.npmjs.com/package/@qisexin/utils-tool)
[![npm downloads](https://img.shields.io/npm/dm/@qisexin/utils-tool.svg?style=flat-square)](https://www.npmjs.com/package/@qisexin/utils-tool)
[![license](https://img.shields.io/npm/l/@qisexin/utils-tool.svg?style=flat-square)](https://github.com/2218675712/qisexin-utils/blob/main/LICENSE.txt)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/2218675712/qisexin-utils/ci.yml?style=flat-square)](https://github.com/2218675712/qisexin-utils/actions)
[![codecov](https://img.shields.io/codecov/c/github/2218675712/qisexin-utils?style=flat-square)](https://codecov.io/gh/2218675712/qisexin-utils)

**🚀 Personal frontend utility library that encapsulates commonly used methods from work into small functions, continuously enriching**

English | [简体中文](./readme.md)

</div>

---

## 📖 Table of Contents

<details>
<summary>Click to expand full table of contents</summary>

- [🚀 Installation](#-installation)
- [📦 Quick Start](#-quick-start)
- [✨ Features](#-features)
- [📚 API Documentation](#-api-documentation)
  - [🔤 String Processing](#-string-processing)
  - [🔢 Number Processing](#-number-processing)
  - [📦 Object Processing](#-object-processing)
  - [⏰ Date & Time](#-date--time)
  - [🌐 DOM Operations](#-dom-operations)
  - [🔗 URL Processing](#-url-processing)
  - [🛠️ Utility Functions](#️-utility-functions)
  - [📊 Echarts Tools](#-echarts-tools)
- [🎨 Antd Related Tools](#-antd-related-tools)
- [🪝 Custom Hooks](#-custom-hooks)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🔗 Related Links](#-related-links)

</details>

## 🚀 Installation

```bash
# npm
npm install @qisexin/utils-tool

# yarn
yarn add @qisexin/utils-tool

# pnpm
pnpm add @qisexin/utils-tool
```

## 📦 Quick Start

```javascript
// ES6 module import
import { toThousands, getQueryString } from '@qisexin/utils-tool';

// Usage examples
const formattedNumber = toThousands(1234567.89); // "1,234,567.89"
const urlParam = getQueryString('id'); // Get URL parameter
```

<details>
<summary>More import methods</summary>

```javascript
// CommonJS import
const { toThousands, getQueryString } = require('@qisexin/utils-tool');

// Tree shaking import (recommended)
import { toThousands } from '@qisexin/utils-tool/formatNumber';
import { getQueryString } from '@qisexin/utils-tool/other';

// Antd utils import
import { CopyToClipboard, downloadExcel } from '@qisexin/utils-tool/antd-utils';

// Hooks import
import { useLocalStorageState } from '@qisexin/utils-tool/hooks';
```

</details>

## ✨ Features

<table>
<tr>
<td align="center">🎯</td>
<td><strong>TypeScript Support</strong><br/>Written in TypeScript with complete type definition files</td>
</tr>
<tr>
<td align="center">📦</td>
<td><strong>Multiple Format Support</strong><br/>Bundled with Rollup, providing ESM and CJS formats</td>
</tr>
<tr>
<td align="center">🌳</td>
<td><strong>Tree Shaking</strong><br/>Supports multi-entry bundling to reduce bundle size</td>
</tr>
<tr>
<td align="center">🚫</td>
<td><strong>Zero Dependencies</strong><br/>Core utility functions have no external dependencies</td>
</tr>
<tr>
<td align="center">🧪</td>
<td><strong>Comprehensive Testing</strong><br/>Complete unit test coverage</td>
</tr>
<tr>
<td align="center">📖</td>
<td><strong>Complete Documentation</strong><br/>Detailed API documentation and usage examples</td>
</tr>
</table>

## 📚 API Documentation

### 🔤 String Processing

<details>
<summary>Expand to view string processing functions</summary>

#### `encodeValue(val: string): string`
Encode special characters in strings, converting special characters to URL encoding format

**Parameters:**
- `val` (string): String to be encoded

**Returns:** `string` - Encoded string

```javascript
encodeValue('test?name=value') // => 'test%3Fname%3Dvalue'
encodeValue('hello world') // => 'hello%20world'
```

#### `decodeValue(val: string): string`
Decode special characters in strings, converting URL encoding format to original characters

**Parameters:**
- `val` (string): String to be decoded

**Returns:** `string` - Decoded string

```javascript
decodeValue('test%3Fname%3Dvalue') // => 'test?name=value'
decodeValue('hello%20world') // => 'hello world'
```

#### `getActualWidthOfChars(text: string, options?: { font?: string }): number`
Get the actual pixel width of a string through Canvas, supports custom fonts

**Parameters:**
- `text` (string): Text to be measured
- `options` (object, optional): Configuration options
  - `font` (string, optional): Font style, defaults to '12px Arial'

**Returns:** `number` - Pixel width of the text

```javascript
getActualWidthOfChars('Hello World') // => 66
getActualWidthOfChars('Performance Data', { font: '14px Microsoft YaHei' }) // => 56
```

#### `generateRandomColor(): string[]`
Generate random color array, returns 10 random RGB color values

**Returns:** `string[]` - Array containing 10 RGB color strings

```javascript
generateRandomColor()
// => ['rgb(48, 62, 6)', 'rgb(123, 45, 67)', 'rgb(200, 100, 150)', ...]
```

#### `getRandomKey(): string`
Generate random unique identifier based on timestamp and random numbers

**Returns:** `string` - Randomly generated unique identifier

```javascript
getRandomKey() // => '1701234567890_abc123'
getRandomKey() // => '1701234567891_def456'
```

</details>

### 🔢 Number Processing

<details>
<summary>Expand to view number processing functions</summary>

#### `toThousands(x: number, digits?: number): string`
Convert numbers to thousands separator format, supports specifying decimal places

**Parameters:**
- `x` (number): Number to be formatted
- `digits` (number, optional): Number of decimal places, defaults to original precision

**Returns:** `string` - Formatted string

```javascript
toThousands(1234567.89) // => "1,234,567.89"
toThousands(1234567.123, 2) // => "1,234,567.12"
toThousands(1000) // => "1,000"
```

#### `convertSpecialNumbers(num: number): number`
Handle special number values, converting NaN and Infinity to 0

**Parameters:**
- `num` (number): Number to be processed

**Returns:** `number` - Processed number

```javascript
convertSpecialNumbers(NaN) // => 0
convertSpecialNumbers(Infinity) // => 0
convertSpecialNumbers(-Infinity) // => 0
convertSpecialNumbers(123) // => 123
```

#### `convertEmptyNumber(num: any): string | number`
Handle empty number display, 0 displays as 0, null/undefined displays as '--'

**Parameters:**
- `num` (any): Value to be processed

**Returns:** `string | number` - Processed display value

```javascript
convertEmptyNumber(null) // => '--'
convertEmptyNumber(undefined) // => '--'
convertEmptyNumber(0) // => 0
convertEmptyNumber(123) // => 123
```

#### `bytesConverter(bytes: number, unit: string): string`
Byte unit conversion, converts bytes to specified unit

**Parameters:**
- `bytes` (number): Number of bytes
- `unit` (string): Target unit ('B', 'KB', 'MB', 'GB', 'TB')

**Returns:** `string` - Converted string (including unit)

```javascript
bytesConverter(1024, 'KB') // => '1KB'
bytesConverter(4 * 1024 * 1024, 'MB') // => '4MB'
bytesConverter(1073741824, 'GB') // => '1GB'
```

</details>

### 📦 Object Processing

<details>
<summary>Expand to view object processing functions</summary>

#### `encodeObject(obj: Record<string, any>): Record<string, any>`
Recursively encode special characters in all string values of an object

**Parameters:**
- `obj` (Record<string, any>): Object to be encoded

**Returns:** `Record<string, any>` - New encoded object

```javascript
encodeObject({ name: 'hello world', desc: 'test?value' })
// => { name: 'hello%20world', desc: 'test%3Fvalue' }
```

#### `decodeObject(obj: Record<string, any>): Record<string, any>`
Recursively decode special characters in all string values of an object

**Parameters:**
- `obj` (Record<string, any>): Object to be decoded

**Returns:** `Record<string, any>` - New decoded object

```javascript
decodeObject({ name: 'hello%20world', desc: 'test%3Fvalue' })
// => { name: 'hello world', desc: 'test?value' }
```

#### `escapeRegExpObject(obj: Record<string, any>): Record<string, any>`
Escape regular expression special characters in all string values of an object

**Parameters:**
- `obj` (Record<string, any>): Object to be escaped

**Returns:** `Record<string, any>` - New escaped object

```javascript
escapeRegExpObject({ pattern: '[test]', regex: '(.*?)' })
// => { pattern: '\\[test\\]', regex: '\\(\\.\\*\\?\\)' }
```

#### `replaceKeys<T>(obj: T, keysMap: Record<string, string>): T`
Replace key names in objects or arrays according to mapping table

**Parameters:**
- `obj` (T): Object or array to be processed
- `keysMap` (Record<string, string>): Key name mapping table

**Returns:** `T` - New object or array with replaced key names

```javascript
replaceKeys({ oldKey: 'value' }, { oldKey: 'newKey' })
// => { newKey: 'value' }

replaceKeys([{ a: 1 }, { a: 2 }], { a: 'b' })
// => [{ b: 1 }, { b: 2 }]
```

</details>

### ⏰ Date & Time

<details>
<summary>Expand to view date & time functions</summary>

#### `checkAndCompleteDate(dateString: string): string`
Check date string format, automatically append 23:59:59 if no time is present

**Parameters:**
- `dateString` (string): Date string

**Returns:** `string` - Complete date-time string

```javascript
checkAndCompleteDate('2023-12-01') // => '2023-12-01 23:59:59'
checkAndCompleteDate('2023-12-01 10:30:00') // => '2023-12-01 10:30:00'
```

#### `showDuration(options: { startTime: string; endTime: string; language?: 'zh' | 'en' }): string`
Calculate and format duration between two time points

**Parameters:**
- `options` (object): Configuration options
  - `startTime` (string): Start time
  - `endTime` (string): End time
  - `language` ('zh' | 'en', optional): Language, defaults to 'zh'

**Returns:** `string` - Formatted duration string

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
Convert 32-character UUID string to standard hyphenated format

**Parameters:**
- `uuidStr` (string): 32-character UUID string

**Returns:** `string` - Standard format UUID string

```javascript
formatUUID('550e8400e29b41d4a716446655440000')
// => '550e8400-e29b-41d4-a716-446655440000'
```

</details>

### 🌐 DOM Operations

<details>
<summary>Expand to view DOM operation functions</summary>

#### `copyToClipboard(text: string): Promise<void>`
Copy text to clipboard, supports modern browser Clipboard API

**Parameters:**
- `text` (string): Text to be copied

**Returns:** `Promise<void>` - Promise for the copy operation

```javascript
await copyToClipboard('Hello World')
copyToClipboard('https://example.com').then(() => {
  console.log('Copy successful')
})
```

#### `scrollToAnchor(anchorName: string): void`
Smoothly scroll to specified anchor element

**Parameters:**
- `anchorName` (string): ID of the anchor element

**Returns:** `void`

```javascript
scrollToAnchor('section1') // Scroll to element with id="section1"
scrollToAnchor('top') // Scroll to element with id="top"
```

</details>

### 🔗 URL Processing

<details>
<summary>Expand to view URL processing functions</summary>

#### `getQueryString(name: string): string | null`
Get specified parameter value from current page URL

**Parameters:**
- `name` (string): Parameter name

**Returns:** `string | null` - Parameter value, returns null if not exists

```javascript
// Current URL: https://example.com?id=123&name=test
getQueryString('id') // => '123'
getQueryString('name') // => 'test'
getQueryString('notexist') // => null
```

#### `urlParamsToObject(url: string): Record<string, string>`
Convert query parameters in URL to object

**Parameters:**
- `url` (string): Complete URL string

**Returns:** `Record<string, string>` - Parameter object

```javascript
urlParamsToObject('https://example.com?id=123&name=test&active=true')
// => { id: '123', name: 'test', active: 'true' }
```

#### `objectToUrlParams(params: Record<string, any>): string`
Convert object to URL query parameter string

**Parameters:**
- `params` (Record<string, any>): Parameter object

**Returns:** `string` - URL parameter string

```javascript
objectToUrlParams({ id: 123, name: 'test', active: true })
// => 'id=123&name=test&active=true'
```

</details>

### 🛠️ Utility Functions

<details>
<summary>Expand to view utility functions</summary>

#### `mixedSort(a: any, b: any): number`
Mixed sorting comparison function for Chinese, English, and numbers, priority: numbers > English letters > Chinese pinyin

**Parameters:**
- `a` (any): First comparison value
- `b` (any): Second comparison value

**Returns:** `number` - Comparison result (-1, 0, 1)

```javascript
const arr = ['中文', '1', 'apple', '2', '测试', 'banana']
arr.sort(mixedSort)
// => ['1', '2', 'apple', 'banana', '测试', '中文']
```

</details>

### 📊 Echarts Tools

<details>
<summary>Expand to view Echarts tool functions</summary>

#### `largeDataTooltipOptimization(params: any, labelField: string, rowsPerColumn: number, defaultColumnWidth: number): string`
Optimize Echarts Tooltip display for large data, supports multi-column layout

**Parameters:**
- `params` (any): Echarts tooltip params parameter
- `labelField` (string): Field name used as label
- `rowsPerColumn` (number): Number of rows per column
- `defaultColumnWidth` (number): Default column width (pixels)

**Returns:** `string` - Formatted HTML string

```javascript
// Use in Echarts configuration
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

## 🎨 Antd Related Tools

> ⚠️ **Note**: When using antd-utils, you need to install `react`, `react-dom`, `antd` in your project and import methods from `@qisexin/utils-tool/antd-utils`

<details>
<summary>Expand to view Antd tools</summary>

### CopyToClipboard Component
React component for copying to clipboard, based on Antd Button component

**Props:**
- `copyText` (string): Text content to be copied
- `children` (ReactNode): Button display content
- Other props supported by Antd Button component

```tsx
import { CopyToClipboard } from '@qisexin/utils-tool/antd-utils';

// Basic usage
<CopyToClipboard copyText="Content to copy">
  Click to copy
</CopyToClipboard>

// Custom styling
<CopyToClipboard
  copyText="https://example.com"
  type="primary"
  size="small"
>
  Copy link
</CopyToClipboard>
```

### downloadExcel
Basic Excel file download functionality

**Function Signature:**
```typescript
downloadExcel(data: any[], filename?: string): void
```

**Parameters:**
- `data` (any[]): Data array to export
- `filename` (string, optional): File name, defaults to 'export.xlsx'

```tsx
import { downloadExcel } from '@qisexin/utils-tool/antd-utils';

const data = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Jane', age: 30, city: 'Los Angeles' }
];

downloadExcel(data, 'user-list.xlsx');
```

### downloadXlsxPro
Advanced Excel file download functionality, supports complex style customization, multiple worksheets, merged cells, etc.

**Key Features:**
- ✅ Support multiple worksheets
- ✅ Support cell style customization (font, color, border, etc.)
- ✅ Support merged cells
- ✅ Support auto column width
- ✅ Support data type conversion
- ✅ Support custom headers

For detailed usage, please refer to: [downloadXlsxPro Documentation](src/antd-utils/downloadXlsxPro.md)

### getColumnSearchProps
Higher-order function to add local search functionality to Antd Table

**Function Signature:**
```typescript
getColumnSearchProps(dataIndex: string, searchInput?: RefObject<InputRef>): ColumnType<any>
```

**Parameters:**
- `dataIndex` (string): Column field name to search
- `searchInput` (RefObject<InputRef>, optional): Ref for search input

**Returns:** `ColumnType<any>` - Antd Table column configuration object

```tsx
import { getColumnSearchProps } from '@qisexin/utils-tool/antd-utils';
import { useRef } from 'react';
import type { InputRef } from 'antd';

const MyTable = () => {
  const searchInput = useRef<InputRef>(null);
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name', searchInput),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      ...getColumnSearchProps('age'),
    }
  ];
  
  return <Table columns={columns} dataSource={data} />;
};
```

</details>

## 🪝 Custom Hooks

<details>
<summary>Expand to view custom hooks</summary>

### useLocalStorageState
Hook that stores state in localStorage, supports cross-tab communication and SSR

**Function Signature:**
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

**Parameters:**
- `key` (string): localStorage key name
- `defaultValue` (T | (() => T), optional): Default value or default value factory function
- `options` (object, optional): Configuration options
  - `defaultValue` (T | (() => T), optional): Default value (higher priority than second parameter)
  - `serializer` (Serializer<T>, optional): Custom serializer
  - `onError` ((error: Error) => void, optional): Error handler function

**Returns:** `[T, (value: T | ((prevState: T) => T)) => void]` - State value and setter function

```tsx
import { useLocalStorageState } from '@qisexin/utils-tool/hooks';

// Basic usage
const [count, setCount] = useLocalStorageState('count', 0);

// Using objects
const [user, setUser] = useLocalStorageState('user', {
  name: '',
  age: 0
});

// Custom configuration
const [theme, setTheme] = useLocalStorageState('theme', 'light', {
  onError: (error) => {
    console.error('localStorage error:', error);
  }
});

// Functional updates
setCount(prev => prev + 1);
```

</details>

## 🤝 Contributing

Issues and Pull Requests are welcome!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source under the [MIT](LICENSE.txt) license.

## 🔗 Related Links

- [NPM Package](https://www.npmjs.com/package/@qisexin/utils-tool)
- [GitHub Repository](https://github.com/2218675712/qisexin-utils)
- [Issue Tracker](https://github.com/2218675712/qisexin-utils/issues)

---

<div align="center">

If this utility library helps you, please give it a ⭐️ for support!

</div>