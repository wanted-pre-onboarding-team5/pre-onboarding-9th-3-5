const getQueryData = (searchUrl: string) => {
  if (searchUrl === '') return;

  const decoded = decodeURIComponent(searchUrl);
  const queryArray = decoded.split('?')[1].split('&');

  return queryArray.reduce((acc: { [key: string]: string }, cur) => {
    const [key, value] = cur.split('=');
    acc[key] = value;

    return acc;
  }, {});
};

export default getQueryData;
