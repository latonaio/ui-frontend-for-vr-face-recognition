import { ReactNode, ReactElement } from 'react';
import { PresentationAttributes } from '../util/types';
interface CartesianViewBox {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
interface PolarViewBox {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
    clockWise?: boolean;
}
declare type ViewBox = CartesianViewBox | PolarViewBox;
export declare type ContentType = ReactElement | ((props: Props) => ReactNode);
interface LabelProps {
    viewBox?: ViewBox;
    formatter?: Function;
    value?: number | string;
    offset?: number;
    position?: 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside' | 'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom' | 'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' | 'insideStart' | 'insideEnd' | 'end' | 'center' | 'centerTop' | 'centerBottom' | {
        x?: number;
        y?: number;
    };
    children?: ReactNode;
    className?: string;
    content?: ContentType;
}
declare type Props = Omit<PresentationAttributes<SVGTextElement>, 'viewBox'> & LabelProps;
declare function Label(props: Props): JSX.Element;
declare namespace Label {
    var displayName: string;
    var defaultProps: {
        offset: number;
    };
    var parseViewBox: (props: any) => any;
    var renderCallByParent: (parentProps: any, viewBox?: ViewBox, ckeckPropsLabel?: boolean) => JSX.Element[];
}
export default Label;
