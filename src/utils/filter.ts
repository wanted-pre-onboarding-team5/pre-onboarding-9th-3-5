export const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const name = e.target.value;
  if (name === 'ALL') {
    window.history.pushState(null, '', window.location.origin);
    return;
  }
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set('id', name);
  const newUrl = `${window.location.origin}?${queryParams.toString()}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
};

export const getCurrentFilter = () => {
  return new URLSearchParams(location.search).get('id') || 'ALL';
};
