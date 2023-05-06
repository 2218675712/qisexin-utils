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



## ⚠️注意: 使用antd-utils时，需要在项目中安装 'react', 'react-dom', 'antd'并从@qisexin/utils-tool/antd-utils内引入方法

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
