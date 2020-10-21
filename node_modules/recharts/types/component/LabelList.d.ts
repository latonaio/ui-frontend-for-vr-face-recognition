import React from 'react';
import { ContentType } from './Label';
import { DataKey } from '../util/types';
interface Data {
    value?: number | string | Array<number | string>;
    payload?: any;
}
interface Props<T extends Data> {
    id?: string;
    data: Array<T>;
    valueAccessor?: Function;
    clockWise?: boolean;
    dataKey?: DataKey<T>;
    content?: ContentType;
}
declare function LabelList<T extends Data>(props: Props<T>): JSX.Element;
declare namespace LabelList {
    var displayName: string;
    var renderCallByParent: <T extends Data>(parentProps: any, data: T[], ckeckPropsLabel?: boolean) => JSX.Element[];
    var defaultProps: {
        valueAccessor: (entry: Data) => React.ReactText;
    };
}
export default LabelList;
