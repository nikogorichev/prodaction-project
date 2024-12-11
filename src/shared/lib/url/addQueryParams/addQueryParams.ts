export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
};

export const addQueryParams = (params: OptionalRecord<string, string>) => {
    const newQuery = getQueryParams(params);

    const currentQuery = window.location.search;
    if (currentQuery !== newQuery) {
      window.history.pushState(null, "", newQuery);
    }
};
