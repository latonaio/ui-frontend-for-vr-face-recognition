/// <reference types="react" />
import { BaseAxisProps, AxisInterval } from '../util/types';
export interface Props extends BaseAxisProps {
    xAxisId?: string | number;
    width?: number;
    height?: number;
    mirror?: boolean;
    orientation?: 'top' | 'bottom';
    ticks?: (string | number)[];
    padding?: {
        left?: number;
        right?: number;
    };
    minTickGap?: number;
    interval?: AxisInterval;
    reversed?: boolean;
}
declare function XAxis(props: Props): any;
declare namespace XAxis {
    var displayName: string;
    var defaultProps: {
        allowDecimals: boolean;
        hide: boolean;
        orientation: string;
        width: number;
        height: number;
        mirror: boolean;
        xAxisId: number;
        tickCount: number;
        type: string;
        domain: import("react").ReactText[];
        padding: {
            left: number;
            right: number;
        };
        allowDataOverflow: boolean;
        scale: string;
        reversed: boolean;
        allowDuplicatedCategory: boolean;
    };
}
export default XAxis;
