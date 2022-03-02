import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
)

// Prilikom pozivanja selectCollection funkcije prosledjujemo parametre u dve zagrade, jer prosledjujemo collectionUrlParam
// samoj funkciji, zatim prosledjujemo state createSelector funkciji, tj. selectCollection selektoru