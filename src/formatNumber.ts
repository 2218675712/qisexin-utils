// 数字转换为千位分隔符形式
import { isNil } from "lodash-es";

/**
 * 数字转换为千位分隔符形式
 * @param x 传入的数字
 * @param digits 小数点位数
 * @return 千位分隔符形式的字符串
 */
export const toThousands = (x?: number, digits = 2): string => {
    if (isNil(x)) return ''
    const rounded = digits === 0 ? Number(Math.floor(x)) : Number(x);
    const [integerPart, decimalPart] = rounded.toFixed(digits).split(".");
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
};
