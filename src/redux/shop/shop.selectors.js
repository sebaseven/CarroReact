import { createSelector } from "reselect";

const selectShop = state => state.shop;


export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
//armo lista para array con los valores de collecrion
export const selectCollectionForPreview =  createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionURLparam =>
  createSelector([selectCollections], 
    collections => collections[collectionURLparam]
    );
  
