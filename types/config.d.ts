export type Config = {
    apiBaseUrl: string;
    apiKey: string;
};
export declare function setConfig(newConfig: Config): void;
export declare function getConfig(): Config;
