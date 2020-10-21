import { PureComponent, ReactElement, ReactNode } from 'react';
import { Props as SectorProps } from '../shape/Sector';
import { LegendType, TooltipType, AnimationTiming, PresentationAttributes, TickItem } from '../util/types';
declare type RadialBarDataItem = SectorProps & {
    value?: any;
    payload?: any;
    background?: SectorProps;
};
declare type RadialBarShape = ReactElement | ((props: Props) => ReactNode);
declare type RadialBarBackground = ReactElement | ((props: Props) => ReactNode) | SectorProps | boolean;
interface RadialBarProps {
    animationId?: string | number;
    className?: string;
    angleAxisId?: string | number;
    radiusAxisId?: string | number;
    startAngle?: number;
    endAngle?: number;
    shape?: RadialBarShape;
    activeShape?: RadialBarShape;
    activeIndex?: number;
    dataKey: string | number | ((obj: any) => any);
    cornerRadius?: string | number;
    forceCornerRadius?: boolean;
    cornerIsExternal?: boolean;
    minPointSize?: number;
    maxBarSize?: number;
    data?: RadialBarDataItem[];
    legendType?: LegendType;
    tooltipType?: TooltipType;
    hide?: boolean;
    label?: any;
    background?: RadialBarBackground;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    isAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationTiming;
}
declare type Props = PresentationAttributes<SVGElement> & RadialBarProps;
interface State {
    isAnimationFinished?: boolean;
    prevData?: RadialBarDataItem[];
}
declare class RadialBar extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        angleAxisId: number;
        radiusAxisId: number;
        minPointSize: number;
        hide: boolean;
        legendType: string;
        data: RadialBarDataItem[];
        isAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
        forceCornerRadius: boolean;
        cornerIsExternal: boolean;
    };
    static getComposedData: ({ item, props, radiusAxis, radiusAxisTicks, angleAxis, angleAxisTicks, displayedData, dataKey, stackedData, barPosition, bandSize, dataStartIndex, }: {
        item: RadialBar;
        props: any;
        radiusAxis: any;
        radiusAxisTicks: TickItem[];
        angleAxis: any;
        angleAxisTicks: TickItem[];
        displayedData: any[];
        dataKey: string | number | ((obj: any) => any);
        stackedData?: any[];
        barPosition?: any[];
        bandSize?: number;
        dataStartIndex: number;
    }) => {
        data: any[];
        layout: any;
    };
    state: State;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    getDeltaAngle(): number;
    cachePrevData: (data: RadialBarDataItem[]) => void;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    static renderSectorShape(shape: RadialBarBackground, props: any): {};
    renderSectorsStatically(sectors: SectorProps[]): {}[];
    renderSectorsWithAnimation(): JSX.Element;
    renderSectors(): JSX.Element | {}[];
    renderBackground(sectors?: RadialBarDataItem[]): {}[];
    render(): JSX.Element;
}
export default RadialBar;
