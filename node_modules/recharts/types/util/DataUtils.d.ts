/// <reference types="react" />
export declare const mathSign: (value: number) => 0 | 1 | -1;
export declare const isPercent: (value: import("react").ReactText) => boolean;
export declare const isNumber: (value: any) => boolean;
export declare const isNumOrStr: (value: import("react").ReactText) => boolean;
export declare const uniqueId: (prefix?: string) => string;
export declare const getPercentValue: (percent: import("react").ReactText, totalValue: number, defaultValue?: number, validate?: boolean) => number;
export declare const getAnyElementOfObject: (obj: any) => any;
export declare const hasDuplicate: (ary: any[]) => boolean;
export declare const interpolateNumber: (numberA: number, numberB: number) => (t: number) => number;
export declare function findEntryInArray<T>(ary: Array<T>, specifiedKey: number | string | ((entry: T) => unknown), specifiedValue: any): T;
export declare const getLinearRegression: (data: {
    cx?: number;
    cy?: number;
}[]) => {
    xmin: number;
    xmax: number;
    a: number;
    b: number;
};
