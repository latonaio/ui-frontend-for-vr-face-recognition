import { PureComponent } from 'react';
import { PresentationAttributes, Coordinate } from '../util/types';
interface PolygonProps {
    className?: string;
    points?: Array<Coordinate>;
}
declare type Props = Omit<PresentationAttributes<SVGPolygonElement>, 'points'> & PolygonProps;
declare class Polygon extends PureComponent<Props> {
    render(): JSX.Element;
}
export default Polygon;
