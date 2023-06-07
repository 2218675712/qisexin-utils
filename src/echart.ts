import { max } from "lodash-es";
import { getActualWidthOfChars } from "./other";
import { toThousands } from "./formatNumber";

interface Format {
    componentType?: "series" | undefined;

    // Series type
    seriesType?: string | undefined;

    // Series index in option.series
    seriesIndex?: number | undefined;

    // Series name
    seriesName?: string | undefined;

    // item marker, string of HTMLElement
    marker?: string | undefined;

    // Data name, or category name
    name?: string | undefined;

    // Data index in input data array
    dataIndex?: number | undefined;

    // Original data as input
    data?: any;

    // Value of data
    value?: number | any[] | undefined;

    // Value of axis
    axisValue?: number | string | undefined;

    // Label of axis value
    axisValueLabel?: string | undefined;

    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode?: object | undefined;

    // dimension names list
    dimensionNames?: string[] | undefined;

    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex?: number | undefined;

    // Color of data
    color?: string | undefined;

    // the percentage of pie chart
    percent?: number | undefined;
}

/**
 * Echarts Tooltip的大量数据下formatter格式化
 * @param params params
 * @param labelField label字段
 * @param rowsPerColumn 每列显示的行数
 * @param defaultColumnWidth 默认列宽
 * @return html标签字符串
 * @example formatter: (params) => largeDataTooltipOptimization(params, 'device', 10, 200)
 */
export const largeDataTooltipOptimization = (
    params: Format[],
    labelField: string,
    rowsPerColumn: number = 10,
    defaultColumnWidth: number = 200
) => {
    const dimensionName = <string>params?.[0]?.dimensionNames?.[1]
    const data = params.map(item => ({...item.data, marker: item.marker}))
    const fewColumns = Math.ceil(data.length / rowsPerColumn)
    const autoWidth = (max([defaultColumnWidth, ...data.map(i => getActualWidthOfChars(i?.[labelField]))]) || 220) + 50
    // 将内容包装在一个固定高度的div元素中
    const maxHeight = 500; // 假设最大高度为500px
    // Todo 最大宽度应该乘 fewColumns
    let str = `<div style="width: ${autoWidth * fewColumns}px;display: flex;flex-flow: column wrap; justify-content: flex-start;height:${Math.ceil((data.length / fewColumns)) * 22}px;max-height: ${maxHeight}px; overflow-y: auto;">`
    data.forEach((item) => {
        str += `<div style="width:${((1 / fewColumns) * 100)}%;height: 22px;display: flex;flex-flow: row nowrap; justify-content: flex-start;">
<span style="flex: 1; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">${item.marker}${item?.[labelField]}：</span>
<span style="float:right;margin-right: 10px;">${toThousands(item?.[dimensionName])}</span>
</div>`
    })
    str += `</div>`
    return str

}
