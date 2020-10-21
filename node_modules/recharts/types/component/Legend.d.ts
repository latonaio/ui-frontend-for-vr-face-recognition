import { PureComponent, CSSProperties } from 'react';
import { Payload, Props as DefaultProps } from './DefaultLegendContent';
declare type UniqueFunc<TValue, TID> = (entry: Payload<TValue, TID>) => unknown;
declare type UniqueOption<TValue, TID> = boolean | UniqueFunc<TValue, TID>;
declare type Props<TValue, TID> = DefaultProps<TValue, TID> & {
    wrapperStyle?: CSSProperties;
    chartWidth?: number;
    chartHeight?: number;
    width?: number;
    height?: number;
    margin?: {
        top?: number;
        left?: number;
        bottom?: number;
        right?: number;
    };
    payloadUniqBy?: UniqueOption<TValue, TID>;
    onBBoxUpdate?: (box: ClientRect | DOMRect | null) => void;
};
interface State {
    boxWidth: number;
    boxHeight: number;
}
declare class Legend<TValue, TID> extends PureComponent<Props<TValue, TID>, State> {
    static displayName: string;
    static defaultProps: {
        iconSize: number;
        layout: string;
        align: string;
        verticalAlign: string;
    };
    private wrapperNode;
    static getWithHeight(item: any, chartWidth: number): {
        height: any;
        width?: undefined;
    } | {
        width: any;
        height?: undefined;
    };
    state: {
        boxWidth: number;
        boxHeight: number;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    getBBox(): DOMRect;
    private getBBoxSnapshot;
    private getDefaultPosition;
    private updateBBox;
    render(): JSX.Element;
}
export default Legend;
