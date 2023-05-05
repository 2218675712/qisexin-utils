/**
 * 通过canvas获取字符的实际宽度
 * @param text 传入的字符串
 * @param options 可以传入字体大小，字体
 * @return 字符串实际像素
 */
export declare function getActualWidthOfChars(text: string, options?: {
    size?: number;
    family?: string;
}): number;
/**
 * @description 生成随机颜色
 * @returns array<string> 随机color数组
 */
export declare const generateRandomColor: () => string[];
/**
 * 获取url参数
 * @param name 参数名
 */
export declare const getQueryString: (name: string) => string | null;
export declare const encodeValue: (val: string) => string;
export declare const encodeObject: (obj: {}) => {};
/**
 * 转换为带连字符的uuid字符串
 * @param uuidStr uuid字符串
 * @returns {*|string}
 */
export declare const formatUUID: (uuidStr: string) => string;
/**
 * 跳转锚点
 * @param anchorName id名称
 */
export declare const scrollToAnchor: (anchorName: string) => void;
export declare const mixedSort: (_a: string | number, _b: string | number) => number;
export declare const convertSpecialNumbers: (num: number) => number;
export declare const convertEmptyNumber: (num: number) => number | "--";
/**
 * 修改对象/数组的 键和值
 * @param obj 对象或数组
 * @param keysMap 格式{ gender: 'sex' }
 * @returns {{}|*}
 */
export declare const replaceKeys: (obj: any, keysMap: Record<string, string>) => any;
export declare const bytesConverter: (bytes: number, unit?: string) => string | undefined;
