/**
 * 通过canvas获取字符的实际宽度
 * @param text 传入的字符串
 * @param options 可以传入字体大小，字体
 * @return 字符串实际像素
 * @example getActualWidthOfChars('性能数据')=>48
 */
export declare const getActualWidthOfChars: (text: string, options?: {
    size?: number | undefined;
    family?: string | undefined;
}) => number;
/**
 * @description 生成随机颜色
 * @returns array<string> 随机color数组
 * @example generateRandomColor() => ['rgb(48, 62, 6)',...]
 */
export declare const generateRandomColor: () => string[];
/**
 * 获取url参数
 * @param name 参数名
 * @example getQueryString('p_from') => 'xxx'
 */
export declare const getQueryString: (name: string) => string | null;
/**
 * 复制到剪贴板 支持http请求
 * @param text
 * @example copyToClipboard('http://www.baidu.com')
 */
export declare const copyToClipboard: (text: string) => void;
/**
 * 编码字符串
 * @param val 编码字符串
 * @example encodeValue('test?') => 'test%3F'
 */
export declare const encodeValue: (val: string) => string;
/**
 * 解码字符串
 * @param val 解码字符串
 * @example decodeValue('test%3F') => 'test?'
 */
export declare const decodeValue: (val: string) => string;
/**
 * 转义对象中的特殊字符 例: / => %2F
 * @param obj
 * @example encodeObject({cpu: 'intel i7',gpu:'rtx 4090'}) => {cpu: 'intel%20i7',gpu:'rtx%204090'}
 */
export declare const encodeObject: (obj: {}) => {};
/**
 * 解码对象中的特殊字符
 * @param obj
 * @example decodeObject({cpu: 'intel%20i7',gpu:'rtx%204090'}) => {cpu: 'intel i7',gpu:'rtx 4090'}
 */
export declare const decodeObject: (obj: {}) => {};
/**
 * 转义对象中含有正则中的特殊字符
 * @param obj
 * @example escapeRegExpObject({a:'[lodash]'}) => {a:'\[lodash\]'}
 */
export declare const escapeRegExpObject: (obj: {}) => {};
/**
 * 检查日期格式，没有时分秒补充 23:59:59
 * @param dateString
 * @example checkAndCompleteDate('2020-01-01') => '2020-01-01 23:59:59'
 */
export declare const checkAndCompleteDate: (dateString: string) => string;
/**
 * 转换为带连字符的uuid字符串
 * @param uuidStr uuid字符串
 * @returns {*|string}
 * @example formatUUID('e4b9e0e0e0e0e0e0e0e0e0e0e0e0e0e0') => 'e4b9e0e0-e0e0-e0e0-e0e0-e0e0e0e0e0e0'
 */
export declare const formatUUID: (uuidStr: string) => string;
/**
 * 跳转锚点
 * @param anchorName id名称
 * @example scrollToAnchor('anchorName')
 */
export declare const scrollToAnchor: (anchorName: string) => void;
/**
 * 中英文数字混合排序
 * @param _a
 * @param _b
 * 排序顺序 数字>字母>中文拼音
 * @example mixedSort('1','2') => -1
 */
export declare const mixedSort: (_a: string | number, _b: string | number) => number;
/**
 * 特殊数字转换(NaN/Infinity => 0)
 * @param num
 * @example convertSpecialNumbers(NaN) => 0
 */
export declare const convertSpecialNumbers: (num: number) => number;
/**
 * 空数字转换 0显示0 null undefined显示--
 * @param num
 * @example convertEmptyNumber(null) => '--'
 */
export declare const convertEmptyNumber: (num: number) => number | "--";
/**
 * 修改对象/数组的 键和值
 * @param obj 对象或数组
 * @param keysMap 格式{ gender: 'sex' }
 * @returns {{}|*}
 * @example replaceKeys({'a':123},{a:'b'}) => {b:123}
 */
export declare const replaceKeys: (obj: any, keysMap: Record<string, string>) => any;
/**
 * 字节转其他单位
 * @param bytes 字节数
 * @param unit 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'
 * @example bytesConverter(4*1024*1024,'MB') => 4
 */
export declare const bytesConverter: (bytes: number, unit?: string) => string | undefined;
/**
 * 生成一个随机的key
 * @example getRandomKey() => '91n6kikc3jw'
 */
export declare const getRandomKey: () => string;
