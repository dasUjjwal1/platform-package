import type { ReactNode } from "react";
import { type Config } from "./config";
import React from "react";
type ReduxProviderProps = {
    children: ReactNode;
    config: Config;
};
export declare function AppProvider({ children, config }: ReduxProviderProps): React.JSX.Element;
export {};
