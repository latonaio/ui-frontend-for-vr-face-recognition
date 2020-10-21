import { ReactNode, SVGProps } from 'react';
interface LayerProps {
    className?: string;
    children?: ReactNode;
}
declare type Props = SVGProps<SVGGElement> & LayerProps;
declare function Layer(props: Props): JSX.Element;
export default Layer;
