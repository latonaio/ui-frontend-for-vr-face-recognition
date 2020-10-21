import React, { ReactElement } from 'react';
import { Props as RectangleProps } from '../shape/Rectangle';
import { ViewBox, D3Scale } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
interface InternalReferenceAreaProps {
    viewBox?: ViewBox;
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    clipPathId?: number | string;
}
interface ReferenceAreaProps extends InternalReferenceAreaProps {
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: 'hidden' | 'visible' | 'discard' | 'extendDomain';
    x1?: number | string;
    x2?: number | string;
    y1?: number | string;
    y2?: number | string;
    className?: number | string;
    yAxisId?: number | string;
    xAxisId?: number | string;
    shape?: ReactElement<SVGElement> | ((props: any) => SVGElement);
}
declare type Props = RectangleProps & ReferenceAreaProps;
declare function ReferenceArea(props: Props): JSX.Element;
declare namespace ReferenceArea {
    var displayName: string;
    var defaultProps: {
        isFront: boolean;
        ifOverflow: string;
        xAxisId: number;
        yAxisId: number;
        r: number;
        fill: string;
        fillOpacity: number;
        stroke: string;
        strokeWidth: number;
    };
    var renderRect: (option: React.ReactElement<SVGElement, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)> | ((props: any) => SVGElement), props: any) => SVGElement | JSX.Element;
}
export default ReferenceArea;
