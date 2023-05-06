import type { ReactNode } from "react";
/**
 * 复制到剪切板
 * @param props
 * @constructor
 */
declare const CopyToClipboard: (props: {
    copyText: string;
    children: ReactNode;
    cssStyle?: object | undefined;
}) => JSX.Element;
export default CopyToClipboard;
