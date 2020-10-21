import React, { PureComponent, ReactElement } from 'react';
import { Props as TrapezoidProps } from '../shape/Trapezoid';
import { LegendType, TooltipType, AnimationTiming, ChartOffset, DataKey } from '../util/types';
interface FunnelTrapezoidItem extends TrapezoidProps {
    value?: number | string;
    payload?: any;
}
interface InternalFunnelProps {
    trapezoids?: FunnelTrapezoidItem[];
    animationId?: number;
}
interface FunnelProps extends InternalFunnelProps {
    className?: string;
    dataKey: DataKey<any>;
    nameKey?: DataKey<any>;
    data?: any[];
    hide?: boolean;
    activeShape: ReactElement<SVGElement> | ((props: any) => SVGElement) | TrapezoidProps;
    legendType?: LegendType;
    tooltipType?: TooltipType;
    activeIndex?: number | number[];
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animateNewValues?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
    id?: string;
}
declare type Props = TrapezoidProps & FunnelProps;
interface State {
    readonly prevTrapezoids?: FunnelTrapezoidItem[];
    readonly isAnimationFinished?: boolean;
}
declare class Funnel extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        stroke: string;
        fill: string;
        legendType: string;
        labelLine: boolean;
        hide: boolean;
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
        nameKey: string;
    };
    static getRealFunnelData: (item: Funnel) => any[];
    static getRealWidthHeight: (item: Funnel, offset: ChartOffset) => {
        realWidth: number;
        realHeight: number;
        offsetX: number;
        offsetY: number;
    };
    static getComposedData: ({ item, offset, onItemMouseLeave, onItemMouseEnter, onItemClick, }: {
        item: Funnel;
        offset: ChartOffset;
        onItemMouseLeave?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
        onItemMouseEnter?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
        onItemClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
    }) => {
        trapezoids: {
            payload: any;
            x: number;
            y: number;
            width: number;
            upperWidth: number;
            lowerWidth: number;
            height: number;
            name: any;
            val: any;
            tooltipPayload: {
                name: any;
                value: any;
                payload: any;
                dataKey: DataKey<any>;
                type: "none";
            }[];
            tooltipPosition: {
                x: number;
                y: number;
            };
        }[];
        data: any[];
        onMouseLeave: (...args: any[]) => any;
        onMouseEnter: (...args: any[]) => any;
        onClick: (...args: any[]) => any;
    };
    state: State;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    cachePrevData: (trapezoids: FunnelTrapezoidItem[]) => void;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    isActiveIndex(i: number): boolean;
    static renderTrapezoidItem(option: Props['activeShape'], props: any): SVGElement | JSX.Element;
    renderTrapezoidsStatically(trapezoids: FunnelTrapezoidItem[]): JSX.Element[];
    renderTrapezoidsWithAnimation(): JSX.Element;
    renderTrapezoids(): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export default Funnel;
