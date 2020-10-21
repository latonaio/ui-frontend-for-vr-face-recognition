import React, { PureComponent, ReactText, MouseEvent, ReactElement, TouchEvent } from 'react';
import { ScalePoint } from 'd3-scale';
import { Padding, PresentationAttributes, DataKey } from '../util/types';
declare type BrushTravellerType = ReactElement<SVGElement> | ((props: any) => SVGElement);
interface BrushStartEndIndex {
    startIndex?: number;
    endIndex?: number;
}
interface InternalBrushProps {
    x?: number;
    y?: number;
    width?: number;
    data?: any[];
    updateId?: string | number;
}
interface BrushProps extends InternalBrushProps {
    className?: string;
    height: number;
    travellerWidth?: number;
    traveller?: BrushTravellerType;
    gap?: number;
    padding?: Padding;
    dataKey?: DataKey<any>;
    startIndex?: number;
    endIndex?: number;
    tickFormatter?: (value: any, index: number) => ReactText;
    children?: ReactElement;
    onChange?: (newIndex: BrushStartEndIndex) => void;
    leaveTimeOut?: number;
    alwaysShowText?: boolean;
}
declare type Props = PresentationAttributes<SVGElement> & BrushProps;
declare type BrushTravellerId = 'startX' | 'endX';
interface State {
    isTravellerMoving?: boolean;
    isSlideMoving?: boolean;
    startX?: number;
    endX?: number;
    slideMoveStartX?: number;
    movingTravellerId?: BrushTravellerId;
    isTextActive?: boolean;
    brushMoveStartX?: number;
}
declare class Brush extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        height: number;
        travellerWidth: number;
        gap: number;
        fill: string;
        stroke: string;
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        leaveTimeOut: number;
        alwaysShowText: boolean;
    };
    constructor(props: Props);
    leaveTimer?: number;
    scale?: ScalePoint<number>;
    scaleValues?: number[];
    travellerDragStartHandlers?: Record<BrushTravellerId, (event: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) => void>;
    static renderDefaultTraveller(props: any): JSX.Element;
    static renderTraveller(option: BrushTravellerType, props: any): SVGElement | JSX.Element;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    static getIndexInRange(range: number[], x: number): number;
    getIndex({ startX, endX }: {
        startX: number;
        endX: number;
    }): {
        startIndex: number;
        endIndex: number;
    };
    getTextOfTick(index: number): any;
    handleDrag: (e: React.MouseEvent<SVGGElement, globalThis.MouseEvent> | React.Touch) => void;
    handleTouchMove: (e: React.TouchEvent<SVGGElement>) => void;
    attachDragEndListener(): void;
    detachDragEndListener(): void;
    handleDragEnd: () => void;
    handleLeaveWrapper: () => void;
    handleEnterSlideOrTraveller: () => void;
    handleLeaveSlideOrTraveller: () => void;
    handleSlideDragStart: (e: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement, globalThis.MouseEvent>) => void;
    handleSlideDrag(e: React.Touch | MouseEvent<SVGGElement>): void;
    handleTravellerDragStart(id: BrushTravellerId, e: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>): void;
    handleTravellerMove(e: React.Touch | MouseEvent<SVGGElement>): void;
    createScale(props: Props): {
        isTextActive: boolean;
        isSlideMoving: boolean;
        isTravellerMoving: boolean;
        startX: number;
        endX: number;
    };
    removeScale(): void;
    renderBackground(): JSX.Element;
    renderPanorama(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    renderTravellerLayer(travellerX: number, id: BrushTravellerId): JSX.Element;
    renderSlide(startX: number, endX: number): JSX.Element;
    renderText(): JSX.Element;
    render(): JSX.Element;
}
export default Brush;
