export const cacheData = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getCachedData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
