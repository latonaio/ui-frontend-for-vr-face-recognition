import { ReactElement, ReactNode } from 'react';
import { LayoutType, AxisType, TickItem, BaseAxisProps, DataKey } from './types';
export declare function getValueByDataKey<T>(obj: T, dataKey: DataKey<any>, defaultValue?: any): any;
export declare function getDomainOfDataByKey<T>(data: Array<T>, key: string, type: string, filterNil?: boolean): any[];
export declare const calculateActiveTickIndex: (coordinate: number, ticks: TickItem[], unsortedTicks: TickItem[], axis: BaseAxisProps) => number;
export declare const getMainColorOfGraphicItem: (item: ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>) => any;
interface FormatedGraphicalItem {
    props: any;
    childIndex: number;
    item: any;
}
export declare const getLegendProps: ({ children, formatedGraphicalItems, legendWidth, legendContent, }: {
    children: any;
    formatedGraphicalItems?: FormatedGraphicalItem[];
    legendWidth: number;
    legendContent?: any;
}) => any;
export declare const getBarSizeList: ({ barSize: globalSize, stackGroups, }: {
    barSize: import("react").ReactText;
    stackGroups: any;
}) => Record<string, any>;
export declare const getBarPosition: ({ barGap, barCategoryGap, bandSize, sizeList, maxBarSize, }: {
    barGap: import("react").ReactText;
    barCategoryGap: import("react").ReactText;
    bandSize: number;
    sizeList: any[];
    maxBarSize: number;
}) => any;
export declare const appendOffsetOfLegend: (offset: any, items: FormatedGraphicalItem[], props: any, legendBox: any) => any;
export declare const getDomainOfErrorBars: (data: any[], item: any, dataKey: any, axisType?: AxisType) => any;
export declare const parseErrorBarsOfAxis: (data: any[], items: any[], dataKey: any, axisType: AxisType) => any;
export declare const getDomainOfItemsWithSameAxis: (data: any[], items: any[], type: string, filterNil?: boolean) => any;
export declare const isCategoricalAxis: (layout: LayoutType, axisType: AxisType) => boolean;
export declare const getCoordinatesOfGrid: (ticks: TickItem[], min: number, max: number) => number[];
export declare const getTicksOfAxis: (axis: any, isGrid?: boolean, isAll?: boolean) => TickItem[];
export declare const combineEventHandlers: (defaultHandler: Function, parentHandler: Function, childHandler: Function) => (arg1: any, arg2: any, arg3: any, arg4: any) => void;
export declare const parseScale: (axis: any, chartType: string) => {
    scale: any;
    realScaleType: string;
} | {
    scale: (...args: any[]) => any;
    realScaleType?: undefined;
};
export declare const checkDomainOfScale: (scale: any) => void;
export declare const findPositionOfBar: (barPosition: any[], child: ReactNode) => any;
export declare const truncateByDomain: (value: any[], domain: any[]) => any[];
export declare const offsetSign: (series: any) => void;
export declare const getStackedData: (data: any, stackItems: any, offsetType: string) => import("d3-shape").Series<{
    [key: string]: number;
}, string>[];
export declare const getStackGroupsByAxisId: (data: any, _items: any[], numericAxisId: string, cateAxisId: string, offsetType: any, reverseStackOrder: boolean) => {};
export declare const calculateDomainOfTicks: (ticks: TickItem[], type: string) => TickItem[];
export declare const getTicksOfScale: (scale: any, opts: any) => {
    niceTicks: any;
};
export declare const getCateCoordinateOfLine: ({ axis, ticks, bandSize, entry, index, dataKey, }: {
    axis: any;
    ticks: TickItem[];
    bandSize: number;
    entry: any;
    index: number;
    dataKey?: string | number | ((obj: any) => any);
}) => any;
export declare const getCateCoordinateOfBar: ({ axis, ticks, offset, bandSize, entry, index, }: {
    axis: any;
    ticks: TickItem[];
    offset: any;
    bandSize: number;
    entry: any;
    index: number;
}) => any;
export declare const getBaseValueOfBar: ({ numericAxis, }: {
    numericAxis: any;
}) => any;
export declare const getStackedDataOfItem: (item: any, stackGroups: any) => any;
export declare const getDomainOfStackGroups: (stackGroups: any, startIndex: number, endIndex: number) => number[];
export declare const MIN_VALUE_REG: RegExp;
export declare const MAX_VALUE_REG: RegExp;
export declare const parseSpecifiedDomain: (specifiedDomain: any, dataDomain: any, allowDataOverflow: boolean) => any;
export declare const getBandSizeOfAxis: (axis: any, ticks?: TickItem[], isBar?: boolean) => any;
export declare const parseDomainOfCategoryAxis: (specifiedDomain: any[], calculatedDomain: any[], axisChild: ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>) => any[];
export {};
