import { ScaleType, DataKey } from '../util/types';
export interface Props {
    type?: 'number' | 'category';
    name?: string | number;
    unit?: string | number;
    zAxisId?: string | number;
    dataKey?: DataKey<any>;
    range?: number[];
    scale?: ScaleType | Function;
}
declare function ZAxis(props: Props): any;
declare namespace ZAxis {
    var displayName: string;
    var defaultProps: {
        zAxisId: number;
        range: number[];
        scale: string;
        type: string;
    };
}
export default ZAxis;
