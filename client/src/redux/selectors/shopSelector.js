import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize(urlParam => createSelector(
    [selectCollections],
    collections => collections[urlParam]
));

export const selectCollectionItems = createSelector(
    [selectCollections],
    collection => collection.items
);
