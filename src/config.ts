export type Config = {
	apiBaseUrl: string;
	apiKey: string;
};

let config: Config | null = null;

export function setConfig(newConfig: Config) {
	config = newConfig;
}

export function getConfig(): Config {
	if (!config) {
		throw new Error("Config has not been set. Pass it via ReduxProvider.");
	}
	return config;
}
