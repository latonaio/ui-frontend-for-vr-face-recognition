/// <reference types="react" />
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { PresentationAttributes, D3Scale, DataKey } from '../util/types';
interface ErrorBarDataItem {
    x: number;
    y: number;
    value: number;
    errorVal?: number[] | number;
}
interface InternalErrorBarProps {
    xAxis?: Omit<XAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    yAxis?: Omit<YAxisProps, 'scale'> & {
        scale: D3Scale<string | number>;
    };
    data?: any[];
    layout?: 'horizontal' | 'vertical';
    dataPointFormatter?: (entry: any, dataKey: DataKey<any>) => ErrorBarDataItem;
    offset?: number;
}
interface ErrorBarProps extends InternalErrorBarProps {
    dataKey: DataKey<any>;
    width?: number;
    direction?: 'x' | 'y';
}
export declare type Props = PresentationAttributes<SVGLineElement> & ErrorBarProps;
declare function ErrorBar(props: Props): JSX.Element;
declare namespace ErrorBar {
    var defaultProps: {
        stroke: string;
        strokeWidth: number;
        width: number;
        offset: number;
        layout: string;
    };
    var displayName: string;
}
export default ErrorBar;
