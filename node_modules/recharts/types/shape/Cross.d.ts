import { PureComponent } from 'react';
import { PresentationAttributes } from '../util/types';
interface CrossProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    className?: number;
}
declare type Props = PresentationAttributes<SVGPathElement> & CrossProps;
declare class Cross extends PureComponent<Props> {
    static defaultProps: {
        x: number;
        y: number;
        top: number;
        left: number;
        width: number;
        height: number;
    };
    static getPath(x: number, y: number, width: number, height: number, top: number, left: number): string;
    render(): JSX.Element;
}
export default Cross;
