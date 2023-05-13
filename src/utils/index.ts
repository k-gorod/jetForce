/* eslint-disable import/prefer-default-export */
// searchQuery ? `?search=${searchQuery}` : ''

export const getQueryParams = (searchQuery: string, currentPage: number) => {
  if ([searchQuery, currentPage].some((el) => el)) {
    return `?${searchQuery ? `search=${searchQuery}&` : ''}${currentPage ? `page=${currentPage}&` : ''}`;
  }

  return '';
};
