export interface GlobalConfig {
    isSsr?: boolean;
}
export declare type GlobalConfigKeys = 'isSsr';
declare const Global: {
    isSsr: boolean;
    get: (key: "isSsr") => boolean;
    set: (key: GlobalConfig | "isSsr", value?: any) => void;
};
export default Global;
