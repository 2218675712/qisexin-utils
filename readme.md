# 个人自用前端工具库

将工作中常用的一些方法封装成一个个小函数，持续丰富中

npm地址：https://www.npmjs.com/package/@qisexin/utils-tool

github 地址：https://github.com/2218675712/qisexin-utils
## 安装
```bash
// 安装
npm install '@qisexin/utils-tool
```
```bash
// 引入
import { toThousands } from '@qisexin/utils-tool';
```

## 项目特点
- [x] 使用typescript编写，提供完整的类型定义文件
- [x] 使用rollup打包，提供esm、cjs两种格式的文件
- [x] 支持多入口打包，减轻体积




## 方法说明
- toThousands 数字转换为千位分隔符形式
- getActualWidthOfChars 通过canvas获取字符的实际宽度
- generateRandomColor 生成随机颜色
- getQueryString 获取url参数
- copyToClipboard 复制文字到剪贴板
- encodeValue 编码字符串
- decodeValue 编码字符串
- encodeObject 转义对象中的特殊字符
- decodeObject 解码对象中的特殊字符
- escapeRegExpObject 转义对象中含有正则中的特殊字符
- checkAndCompleteDate 检查日期格式，没有时分秒补充 23:59:59
- formatUUID 转换为带连字符的uuid字符串
- scrollToAnchor 跳转锚点
- mixedSort 中英文数字混合排序
- convertSpecialNumbers 特殊数字转换(NaN/Infinity => 0)
- convertEmptyNumber 空数字转换 0显示0 null undefined显示--
- replaceKeys 修改对象/数组的 键和值
- bytesConverter 字节转其他单位
- getRandomKey 生成一个随机的key

###  toThousands 数字转换为千位分隔符形式
```js
/**
 * 数字转换为千位分隔符形式
 * @param x 传入的数字
 * @param digits 小数点位数
 * @return 千位分隔符形式的字符串
 * @example toThousands(1234567.89) => "1,234,567.89"
 */
```
###  getActualWidthOfChars 通过canvas获取字符的实际宽度
```js
/**
 * 通过canvas获取字符的实际宽度
 * @param text 传入的字符串
 * @param options 可以传入字体大小，字体
 * @return 字符串实际像素
 * @example getActualWidthOfChars('性能数据') => 48
 */
```
### generateRandomColor 生成随机颜色
```js
/**
 * @description 生成随机颜色
 * @returns array<string> 随机color数组
 * @example generateRandomColor() => ['rgb(48, 62, 6)',...]
 */
```
### getQueryString 获取url参数
```js
/**
 * 获取url参数
 * @param name 参数名
 * @example getQueryString('p_from') => 'xxx'
 */
```
### copyToClipboard 复制文字到剪贴板
```js
/**
 * 复制到剪贴板 支持http请求
 * @param text
 * @example copyToClipboard('http://www.baidu.com')
 */
```
### encodeValue 编码字符串
```js
/**
 * 编码字符串
 * @param val 编码字符串
 * @example encodeValue('test?') => 'test%3F'
 */
```
### decodeValue 解码字符串
```js
/**
 * 解码字符串
 * @param val 解码字符串
 * @example decodeValue('test%3F') => 'test?'
 */
```
### encodeObject 转义对象中的特殊字符
```js
/**
 * 转义对象中的特殊字符 例: / => %2F
 * @param obj
 * @example encodeObject({cpu: 'intel i7',gpu:'rtx 4090'}) => {cpu: 'intel%20i7',gpu:'rtx%204090'}
 */
```
### decodeObject 解码对象中的特殊字符
```js
/**
 * 解码对象中的特殊字符
 * @param obj
 * @example decodeObject({cpu: 'intel%20i7',gpu:'rtx%204090'}) => {cpu: 'intel i7',gpu:'rtx 4090'}
 */
```
### escapeRegExpObject 转义对象中含有正则中的特殊字符
```js
/**
 * 转义对象中含有正则中的特殊字符
 * @param obj
 * @example escapeRegExpObject({a:'[lodash]'}) => {a:'\[lodash\]'}
 */
```
### checkAndCompleteDate 检查日期格式，没有时分秒补充 23:59:59
```js
/**
 * 检查日期格式，没有时分秒补充 23:59:59
 * @param dateString
 * @example checkAndCompleteDate('2020-01-01') => '2020-01-01 23:59:59'
 */
```
### formatUUID 转换为带连字符的uuid字符串
```js
/**
 * 转换为带连字符的uuid字符串
 * @param uuidStr uuid字符串
 * @returns {*|string}
 * @example formatUUID('e4b9e0e0e0e0e0e0e0e0e0e0e0e0e0e0') => 'e4b9e0e0-e0e0-e0e0-e0e0-e0e0e0e0e0e0'
 */
```
### scrollToAnchor 跳转锚点
```js
/**
 * 跳转锚点
 * @param anchorName id名称
 * @example scrollToAnchor('anchorName')
 */
```
### mixedSort 中英文数字混合排序
```js
/**
 * 中英文数字混合排序
 * @param _a
 * @param _b
 * 排序顺序 数字>字母>中文拼音
 * @example mixedSort('1','2') => -1
 */
```

### convertSpecialNumbers 特殊数字转换(NaN/Infinity => 0)
```js
/**
 * 特殊数字转换(NaN/Infinity => 0)
 * @param num
 * @example convertSpecialNumbers(NaN) => 0
 */
```

### convertEmptyNumber 空数字转换 0显示0 null undefined显示--
```js
/**
 * 空数字转换 0显示0 null undefined显示--
 * @param num
 * @example convertEmptyNumber(null) => '--'
 */
```

### replaceKeys 修改对象/数组的 键和值
```js
/**
 * 修改对象/数组的 键和值
 * @param obj 对象或数组
 * @param keysMap 格式{ gender: 'sex' }
 * @returns {{}|*}
 * @example replaceKeys({'a':123},{a:'b'}) => {b:123}
 */
```

### bytesConverter 字节转其他单位
```js
/**
 * 字节转其他单位
 * @param bytes 字节数
 * @param unit 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'
 * @example bytesConverter(4*1024*1024,'MB') => 4
 */
```

### getRandomKey 生成一个随机的key
```js
/**
 * 生成一个随机的key
 * @example getRandomKey() => '91n6kikc3jw'
 */
```


## antd相关工具使用方法

> ⚠️注意: 使用antd-utils时，需要在项目中安装 'react', 'react-dom', 'antd'并从@qisexin/utils-tool/antd-utils内引入方法

- CopyToClipboard 复制到剪贴板
- downloadXlsxPro 前端下载xlsx
- getColumnSearchProps antd table 加入本地搜索
### CopyToClipboard 复制到剪贴板

```tsx
import { CopyToClipboard } from "'@qisexin/utils-tool/antd-utils";
<CopyToClipboard copyText={'复制内容'}>点我复制</CopyToClipboard>
```
### downloadXlsxPro 前端下载xlsx  [参考地址](src/antd-utils/downloadXlsxPro.md)
### getColumnSearchProps antd table 加入本地搜索
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
