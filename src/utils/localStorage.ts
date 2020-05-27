const PATH_TO_SETTINGS = 'twitch-utils/settings';

export const saveConfig = (settings: any) => {
  localStorage.setItem(PATH_TO_SETTINGS, settings);
};

export const loadConfig = () => localStorage.getItem(PATH_TO_SETTINGS);
