export const SEARCH = 'CAT_FILTER';

export function getFilterCategory(categories) {
  return {type: SEARCH, categories};
}

