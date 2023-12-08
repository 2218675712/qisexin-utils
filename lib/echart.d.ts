interface Format {
    componentType?: "series" | undefined;
    seriesType?: string | undefined;
    seriesIndex?: number | undefined;
    seriesName?: string | undefined;
    marker?: string | undefined;
    name?: string | undefined;
    dataIndex?: number | undefined;
    data?: any;
    value?: number | any[] | undefined;
    axisValue?: number | string | undefined;
    axisValueLabel?: string | undefined;
    encode?: object | undefined;
    dimensionNames?: string[] | undefined;
    dimensionIndex?: number | undefined;
    color?: string | undefined;
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
export declare const largeDataTooltipOptimization: (params: Format[], labelField: string, rowsPerColumn?: number, defaultColumnWidth?: number) => string;
export {};
