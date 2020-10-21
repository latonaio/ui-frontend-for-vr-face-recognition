import { PureComponent } from 'react';
import { PresentationAttributes } from '../util/types';
interface PolarGridProps {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    polarAngles?: number[];
    polarRadius?: number[];
    gridType?: 'polygon' | 'circle';
}
declare type Props = PresentationAttributes<SVGPathElement> & PolarGridProps;
declare class PolarGrid extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: {
        cx: number;
        cy: number;
        innerRadius: number;
        outerRadius: number;
        gridType: string;
    };
    getPolygonPath(radius: number): string;
    renderPolarAngles(): JSX.Element;
    renderConcentricCircle(radius: number, index: number, extraProps?: PresentationAttributes<SVGCircleElement>): JSX.Element;
    renderConcentricPolygon(radius: number, index: number, extraProps?: PresentationAttributes<SVGPathElement>): JSX.Element;
    renderConcentricPath(): JSX.Element;
    render(): JSX.Element;
}
export default PolarGrid;
