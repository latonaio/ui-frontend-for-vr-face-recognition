import { PureComponent } from 'react';
import { PresentationAttributes, AnimationTiming } from '../util/types';
declare type RectRadius = [number, number, number, number];
interface RectangleProps {
    className?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    radius?: number | RectRadius;
    isAnimationActive?: boolean;
    isUpdateAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
}
export declare type Props = PresentationAttributes<SVGPathElement> & RectangleProps;
declare class Rectangle extends PureComponent<Props> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        isAnimationActive: boolean;
        isUpdateAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    state: {
        totalLength: number;
    };
    private node;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Rectangle;
