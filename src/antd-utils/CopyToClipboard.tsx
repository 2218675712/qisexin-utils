import { message } from "antd";
import React from "react";
import type { ReactNode } from "react";

const copyToClipboard = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.textContent = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
};
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
