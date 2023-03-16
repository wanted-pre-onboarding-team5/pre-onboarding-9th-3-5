export const changeParams = (paramName: string, paramValue: string) => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set(paramName, paramValue);
  const newUrl = `${window.location.origin}?${queryParams.toString()}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
};
