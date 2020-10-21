import { ReactElement, ReactNode, Component } from 'react';
import { ViewBox, PresentationAttributes, TickItem } from '../util/types';
interface CartesianTickItem extends TickItem {
    tickCoord?: number;
    tickSize?: number;
    isShow?: boolean;
}
export interface CartesianAxisProps {
    className?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    unit?: string | number;
    orientation?: 'top' | 'bottom' | 'left' | 'right';
    viewBox?: ViewBox;
    tick?: PresentationAttributes<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => SVGElement) | boolean;
    axisLine?: boolean | PresentationAttributes<SVGLineElement>;
    tickLine?: boolean | PresentationAttributes<SVGLineElement>;
    mirror?: boolean;
    tickMargin: number;
    hide?: boolean;
    minTickGap?: number;
    ticks?: CartesianTickItem[];
    tickSize?: number;
    tickFormatter?: (value: any, index: number) => string;
    ticksGenerator?: (props?: CartesianAxisProps) => CartesianTickItem[];
    interval?: number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd';
}
declare type Props = PresentationAttributes<SVGElement> & CartesianAxisProps;
declare class CartesianAxis extends Component<Props> {
    static displayName: string;
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        viewBox: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        orientation: string;
        ticks: CartesianTickItem[];
        stroke: string;
        tickLine: boolean;
        axisLine: boolean;
        tick: boolean;
        mirror: boolean;
        minTickGap: number;
        tickSize: number;
        tickMargin: number;
        interval: string;
    };
    static getTicks(props: Props): any[];
    static getNumberIntervalTicks(ticks: CartesianTickItem[], interval: number): CartesianTickItem[];
    static getTicksStart({ ticks, tickFormatter, viewBox, orientation, minTickGap, unit }: Omit<Props, 'tickMargin'>, preserveEnd?: boolean): CartesianTickItem[];
    static getTicksEnd({ ticks, tickFormatter, viewBox, orientation, minTickGap, unit }: Omit<Props, 'tickMargin'>): CartesianTickItem[];
    shouldComponentUpdate({ viewBox, ...restProps }: Props): boolean;
    getTickLineCoord(data: CartesianTickItem): {
        line: {
            x1: number;
            y1: number;
            x2: number;
            y2: number;
        };
        tick: {
            x: number;
            y: number;
        };
    };
    getTickTextAnchor(): string;
    getTickVerticalAnchor(): string;
    renderAxisLine(): JSX.Element;
    static renderTickItem(option: Props['tick'], props: any, value: ReactNode): SVGElement | JSX.Element;
    renderTicks(ticks: CartesianTickItem[]): JSX.Element;
    render(): JSX.Element;
}
export default CartesianAxis;
