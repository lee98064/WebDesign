// 獲取靜態資源
export const getAssetsFile = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};
