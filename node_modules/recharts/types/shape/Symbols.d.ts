import { PureComponent } from 'react';
import { SymbolType as D3SymbolType } from 'd3-shape';
import { PresentationAttributes, SymbolType } from '../util/types';
declare type SizeType = 'area' | 'diameter';
interface SymbolsProp {
    className?: string;
    type: SymbolType;
    cx?: number;
    cy?: number;
    size?: number;
    sizeType?: SizeType;
}
export declare type Props = PresentationAttributes<SVGPathElement> & SymbolsProp;
declare class Symbols extends PureComponent<Props> {
    static defaultProps: {
        type: string;
        size: number;
        sizeType: string;
    };
    static registerSymbol: (key: string, factory: D3SymbolType) => void;
    getPath(): string;
    render(): JSX.Element;
}
export default Symbols;
