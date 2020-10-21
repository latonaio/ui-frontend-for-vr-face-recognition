import { PureComponent, ReactNode, MouseEvent, ReactText, ReactElement } from 'react';
import { LegendType, LayoutType } from '../util/types';
export declare type ContentType<TValue, TID> = ReactElement | ((props: Props<TValue, TID>) => ReactNode);
export declare type IconType = Omit<LegendType, 'none'>;
export declare type HorizontalAlignmentType = 'center' | 'left' | 'right';
export declare type VerticalAlignmentType = 'top' | 'bottom' | 'middle';
export declare type Formatter<TValue, TID> = (value: any, entry: Payload<TValue, TID>, index: number) => ReactNode;
export interface Payload<TValue, TID> {
    value: TValue;
    id: TID;
    type: LegendType;
    color: string;
    payload: {
        strokeDasharray: ReactText;
    };
    formatter?: Formatter<TValue, TID>;
    inactive?: boolean;
}
export interface Props<TValue, TID> {
    content?: ContentType<TValue, TID>;
    iconSize?: number;
    iconType?: IconType;
    layout?: LayoutType;
    align?: HorizontalAlignmentType;
    verticalAlign?: VerticalAlignmentType;
    payload?: Array<Payload<TValue, TID>>;
    inactiveColor?: string;
    formatter?: Formatter<TValue, TID>;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
    onClick?: (event: MouseEvent) => void;
}
declare class DefaultLegendContent<TValue, TID> extends PureComponent<Props<TValue, TID>> {
    static displayName: string;
    static defaultProps: {
        iconSize: number;
        layout: string;
        align: string;
        verticalAlign: string;
        inactiveColor: string;
    };
    renderIcon(data: Payload<TValue, TID>): JSX.Element;
    renderItems(): JSX.Element[];
    render(): JSX.Element;
}
export default DefaultLegendContent;
