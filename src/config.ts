import { loadConfig } from './utils/localStorage';

export interface Config {
  emotes: {
    blocked: string[];
    maxSimilarEmotes: number;
    active: boolean;
  };
  keyword: {
    list: string[];
    active: boolean;
  }
}

export const defaultConfig: Config = {
  emotes: {
    blocked: [],
    maxSimilarEmotes: 2,
    active: false,
  },
  keyword: {
    list: [],
    active: false,
  },
};

export default () => {
  try {
    const config = loadConfig();
    if (!config) {
      return defaultConfig;
    }

    return <Config>JSON.parse(config);
  } catch {
    return defaultConfig;
  }
};
