import type { ReactNode } from "react";
import { store } from "./store";
import { type Config, setConfig } from "./config";
import { Provider } from "react-redux";
import React from "react";

type ReduxProviderProps = {
	children: ReactNode;
	config: Config;
};

export function AppProvider({ children, config }: ReduxProviderProps) {
	setConfig(config);
	return <Provider store={store}>{children}</Provider>;
}
