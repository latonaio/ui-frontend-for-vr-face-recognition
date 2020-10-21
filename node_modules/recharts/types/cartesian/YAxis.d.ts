/// <reference types="react" />
import { BaseAxisProps, AxisInterval } from '../util/types';
export interface Props extends BaseAxisProps {
    yAxisId?: string | number;
    ticks?: (string | number)[];
    width?: number;
    height?: number;
    mirror?: boolean;
    orientation?: 'left' | 'right';
    padding?: {
        top?: number;
        bottom?: number;
    };
    minTickGap?: number;
    interval?: AxisInterval;
    reversed?: boolean;
}
declare function YAxis(props: Props): any;
declare namespace YAxis {
    var displayName: string;
    var defaultProps: {
        allowDuplicatedCategory: boolean;
        allowDecimals: boolean;
        hide: boolean;
        orientation: string;
        width: number;
        height: number;
        mirror: boolean;
        yAxisId: number;
        tickCount: number;
        type: string;
        domain: import("react").ReactText[];
        padding: {
            top: number;
            bottom: number;
        };
        allowDataOverflow: boolean;
        scale: string;
        reversed: boolean;
    };
}
export default YAxis;
