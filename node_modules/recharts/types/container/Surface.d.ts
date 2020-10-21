import { ReactNode, CSSProperties } from 'react';
import { PresentationAttributes } from '../util/types';
interface SurfaceProps {
    width: number;
    height: number;
    viewBox?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
declare type Props = Omit<PresentationAttributes<SVGSVGElement>, 'viewBox'> & SurfaceProps;
declare function Surface(props: Props): JSX.Element;
export default Surface;
