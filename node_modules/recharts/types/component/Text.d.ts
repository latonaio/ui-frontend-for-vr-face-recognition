import { Component, CSSProperties } from 'react';
import { PresentationAttributes } from '../util/types';
interface WordWithComputedWidth {
    word: string;
    width: number;
}
interface TextProps {
    scaleToFit?: boolean;
    angle?: number;
    textAnchor?: 'start' | 'middle' | 'end' | 'inherit';
    verticalAnchor?: 'start' | 'middle' | 'end';
    style?: CSSProperties;
    lineHeight?: number | string;
}
export declare type Props = PresentationAttributes<SVGTextElement> & TextProps;
interface Words {
    words: Array<string>;
    width?: number;
}
interface State {
    wordsByLines: Array<Words>;
}
declare class Text extends Component<Props, State> {
    static defaultProps: {
        x: number;
        y: number;
        lineHeight: string;
        capHeight: string;
        scaleToFit: boolean;
        textAnchor: string;
        verticalAnchor: string;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    updateWordsByLines(props: Props, needCalculate: boolean): void;
    getWordsByLines(props: Props, needCalculate: boolean): Words[];
    getWordsWithoutCalculate: (props: Props) => Words[];
    calculateWordsByLines(wordsWithComputedWidth: Array<WordWithComputedWidth>, spaceWidth: number, lineWidth: number | string): Array<Words>;
    render(): JSX.Element;
}
export default Text;
