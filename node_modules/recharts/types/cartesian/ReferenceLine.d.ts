import { ReactElement } from 'react';
import { ViewBox, D3Scale, PresentationAttributes } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
interface InternalReferenceLineProps {
    viewBox?: ViewBox;
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    clipPathId?: number | string;
}
interface ReferenceLineProps extends InternalReferenceLineProps {
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: 'hidden' | 'visible' | 'discard' | 'extendDomain';
    x?: number | string;
    y?: number | string;
    segment?: Array<{
        x?: number | string;
        y?: number | string;
    }>;
    position?: 'middle' | 'start' | 'end';
    className?: number | string;
    yAxisId?: number | string;
    xAxisId?: number | string;
    shape?: ReactElement<SVGElement> | ((props: any) => SVGElement);
}
declare type Props = PresentationAttributes<SVGLineElement> & ReferenceLineProps;
declare function ReferenceLine(props: Props): JSX.Element;
declare namespace ReferenceLine {
    var displayName: string;
    var defaultProps: {
        isFront: boolean;
        ifOverflow: string;
        xAxisId: number;
        yAxisId: number;
        fill: string;
        stroke: string;
        fillOpacity: number;
        strokeWidth: number;
        position: string;
    };
}
export default ReferenceLine;
