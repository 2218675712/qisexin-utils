# @qisexin/utils-tool

[![npm version](https://img.shields.io/npm/v/@qisexin/utils-tool.svg)](https://www.npmjs.com/package/@qisexin/utils-tool)
[![npm downloads](https://img.shields.io/npm/dm/@qisexin/utils-tool.svg)](https://www.npmjs.com/package/@qisexin/utils-tool)
[![license](https://img.shields.io/npm/l/@qisexin/utils-tool.svg)](https://github.com/2218675712/qisexin-utils/blob/main/LICENSE.txt)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> Personal frontend utility library that encapsulates commonly used methods from work into small functions, continuously enriching

## 📖 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Features](#features)
- [API Documentation](#api-documentation)
  - [String Processing](#string-processing)
  - [Number Processing](#number-processing)
  - [Object Processing](#object-processing)
  - [Date & Time](#date--time)
  - [DOM Operations](#dom-operations)
  - [URL Processing](#url-processing)
  - [Utility Functions](#utility-functions)
  - [Echarts Tools](#echarts-tools)
- [Antd Related Tools](#antd-related-tools)
- [Custom Hooks](#custom-hooks)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Installation

```bash
npm install @qisexin/utils-tool
```

## 📦 Quick Start

```javascript
// ES6 module import
import { toThousands, getQueryString } from '@qisexin/utils-tool';

// Usage examples
const formattedNumber = toThousands(1234567.89); // "1,234,567.89"
const urlParam = getQueryString('id'); // Get URL parameter
```

## ✨ Features

- ✅ **TypeScript Support** - Written in TypeScript with complete type definition files
- ✅ **Multiple Format Support** - Bundled with Rollup, providing ESM and CJS formats
- ✅ **Tree Shaking** - Supports multi-entry bundling to reduce bundle size
- ✅ **Zero Dependencies** - Core utility functions have no external dependencies
- ✅ **Comprehensive Testing** - Complete unit test coverage

## 📚 API Documentation

### String Processing

#### `encodeValue(val: string): string`
Encode special characters in strings

```javascript
encodeValue('test?') // => 'test%3F'
```

#### `decodeValue(val: string): string`
Decode special characters in strings

```javascript
decodeValue('test%3F') // => 'test?'
```

#### `getActualWidthOfChars(text: string, options?: object): number`
Get the actual pixel width of a string through Canvas

```javascript
getActualWidthOfChars('Performance Data') // => 48
```

#### `generateRandomColor(): string[]`
Generate random color array

```javascript
generateRandomColor() // => ['rgb(48, 62, 6)', ...]
```

#### `getRandomKey(): string`
Generate random unique identifier

```javascript
getRandomKey() // => 'abc123def456'
```

### Number Processing

#### `toThousands(x: number, digits?: number): string`
Convert numbers to thousands separator format

```javascript
toThousands(1234567.89) // => "1,234,567.89"
toThousands(1234567.89, 2) // => "1,234,567.89"
```

#### `convertSpecialNumbers(num: number): number`
Special number conversion (NaN/Infinity => 0)

```javascript
convertSpecialNumbers(NaN) // => 0
convertSpecialNumbers(Infinity) // => 0
```

#### `convertEmptyNumber(num: any): string | number`
Empty number conversion, 0 displays 0, null/undefined displays '--'

```javascript
convertEmptyNumber(null) // => '--'
convertEmptyNumber(0) // => 0
```

#### `bytesConverter(bytes: number, unit: string): number`
Byte unit conversion

```javascript
bytesConverter(4*1024*1024, 'MB') // => 4
```

### Object Processing

#### `encodeObject(obj: object): object`
Escape special characters in objects

```javascript
encodeObject({cpu: 'intel i7', gpu: 'rtx 4090'}) 
// => {cpu: 'intel%20i7', gpu: 'rtx%204090'}
```

#### `decodeObject(obj: object): object`
Decode special characters in objects

```javascript
decodeObject({cpu: 'intel%20i7', gpu: 'rtx%204090'}) 
// => {cpu: 'intel i7', gpu: 'rtx 4090'}
```

#### `escapeRegExpObject(obj: object): object`
Escape values containing regex special characters in objects

```javascript
escapeRegExpObject({a: '[lodash]'}) // => {a: '\\[lodash\\]'}
```

#### `replaceKeys(obj: object | array, keysMap: object): object | array`
Modify keys and values of objects/arrays

```javascript
replaceKeys({'a': 123}, {a: 'b'}) // => {b: 123}
```

### Date & Time

#### `checkAndCompleteDate(dateString: string): string`
Check date format, add 23:59:59 if no time is present

```javascript
checkAndCompleteDate('2020-01-01') // => '2020-01-01 23:59:59'
```

#### `showDuration(options: object): string`
Calculate and format time range

```javascript
showDuration({
  startTime: '2022-06-14 12:00:00', 
  endTime: '2022-06-14 15:30:47'
}) // => '3h30m47s'
```

#### `formatUUID(uuidStr: string): string`
Convert to hyphenated UUID string

```javascript
formatUUID('e4b9e0e0e0e0e0e0e0e0e0e0e0e0e0e0') 
// => 'e4b9e0e0-e0e0-e0e0-e0e0-e0e0e0e0e0e0'
```

### DOM Operations

#### `copyToClipboard(text: string): void`
Copy text to clipboard, supports HTTP requests

```javascript
copyToClipboard('http://www.baidu.com')
```

#### `scrollToAnchor(anchorName: string): void`
Jump to specified anchor

```javascript
scrollToAnchor('section1')
```

### URL Processing

#### `getQueryString(name: string): string | null`
Get URL parameter value

```javascript
getQueryString('id') // => 'xxx'
```

#### `urlParamsToObject(url: string): object`
Convert URL parameters to object

```javascript
urlParamsToObject('https://www.baidu.com?a=1&b=2') 
// => {a: '1', b: '2'}
```

#### `objectToUrlParams(params: object): string`
Convert object to URL parameter string

```javascript
objectToUrlParams({a: '1', b: '2'}) // => 'a=1&b=2'
```

### Utility Functions

#### `mixedSort(a: any, b: any): number`
Mixed sorting for Chinese, English, and numbers (Sort order: numbers > letters > Chinese pinyin)

```javascript
['1', 'a', '中文'].sort(mixedSort) // => ['1', 'a', '中文']
```

### Echarts Tools

#### `largeDataTooltipOptimization(params: any, labelField: string, rowsPerColumn: number, defaultColumnWidth: number): string`
Echarts Tooltip formatter optimization for large data

```javascript
// Use in Echarts configuration
tooltip: {
  formatter: (params) => largeDataTooltipOptimization(params, 'device', 10, 200)
}
```

## 🎨 Antd Related Tools

> ⚠️ **Note**: When using antd-utils, you need to install `react`, `react-dom`, `antd` in your project and import methods from `@qisexin/utils-tool/antd-utils`

### CopyToClipboard Component
React component for copying to clipboard

```tsx
import { CopyToClipboard } from '@qisexin/utils-tool/antd-utils';

<CopyToClipboard copyText={'Copy content'}>
  Click to copy
</CopyToClipboard>
```

### downloadXlsx
Frontend Excel file download

For detailed usage, please refer to: [downloadXlsx Documentation](src/antd-utils/downloadXlsx.md)

### downloadXlsxPro
Frontend Excel file download (supports custom styling)

For detailed usage, please refer to: [downloadXlsxPro Documentation](src/antd-utils/downloadXlsxPro.md)

### getColumnSearchProps
Add local search functionality to Antd Table

```tsx
import { getColumnSearchProps } from '@qisexin/utils-tool/antd-utils';

// Use in Antd Table columns configuration
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
    ...getColumnSearchProps('name'),
  }
];
```

## 🪝 Custom Hooks

### useLocalStorageState
Hook that stores state in localStorage, supports cross-tab communication

```tsx
import { useLocalStorageState } from '@qisexin/utils-tool/hooks';

const [value, setValue] = useLocalStorageState('key', 'defaultValue');
```

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

If this utility library helps you, please give it a ⭐️ for support!