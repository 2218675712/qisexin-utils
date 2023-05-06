import { message } from "antd";
import React from "react";
import type { ReactNode } from "react";
import {copyToClipboard} from '../other'

/**
 * 复制到剪切板
 * @param props
 * @constructor
 */
const CopyToClipboard = (props: { copyText: string; children: ReactNode, cssStyle?: object }) => {
    const {copyText, cssStyle = {}} = props;
    const handleClick = () => {
        copyToClipboard(copyText);
        message.success('复制成功!')
    };


    return (<div onClick={handleClick} style={{cursor: "pointer", ...cssStyle}}>
        {props.children}
    </div>);
};

export default CopyToClipboard;
