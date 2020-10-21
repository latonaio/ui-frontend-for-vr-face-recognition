import React, { PureComponent } from 'react';
import { Margin, DataKey, PresentationAttributes, SankeyLink, SankeyNode } from '../util/types';
interface SankeyProps {
    nameKey?: DataKey<any>;
    dataKey?: DataKey<any>;
    width?: number;
    height?: number;
    data: {
        node: SankeyNode[];
        links: SankeyLink[];
    };
    nodePadding?: number;
    nodeWidth?: number;
    linkCurvature?: number;
    iterations?: number;
    node?: React.ReactElement;
    link?: React.ReactElement;
    style?: any;
    className?: string;
    children?: any;
    margin?: Margin;
    onClick?: any;
    onMouseEnter?: any;
    onMouseLeave?: any;
}
declare type Props = PresentationAttributes<SVGElement> & SankeyProps;
interface State {
    activeElement?: any;
    activeElementType?: any;
    isTooltipActive: boolean;
    nodes: SankeyNode[];
    links: SankeyLink[];
}
declare class Sankey extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        nameKey: string;
        dataKey: string;
        nodePadding: number;
        nodeWidth: number;
        linkCurvature: number;
        iterations: number;
        margin: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    state: {
        activeElement: any;
        activeElementType: any;
        isTooltipActive: boolean;
        nodes: SankeyNode[];
        links: SankeyLink[];
    };
    constructor(props: Props);
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    static createDefaultState(props: Props): State;
    handleMouseEnter(el: React.ReactElement, type: string, e: any): void;
    handleMouseLeave(el: React.ReactElement, type: string, e: any): void;
    handleClick(el: React.ReactElement, type: string, e: any): void;
    static renderLinkItem(option: any, props: any): any;
    renderLinks(links: SankeyLink[], nodes: SankeyNode[]): JSX.Element;
    static renderNodeItem(option: any, props: Props): any;
    renderNodes(nodes: SankeyNode[]): JSX.Element;
    renderTooltip(): React.DetailedReactHTMLElement<any, HTMLElement>;
    render(): JSX.Element;
}
export default Sankey;
