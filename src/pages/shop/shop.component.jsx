import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import SHOP_DATA from '../../redux/shop/shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import CollectionPage from '../category/collection.component.jsx';

import { selectShopCollections } from '../../redux/shop/shop.selectors.js';

const ShopPage = ({match}) => {
  return (
    <div className='shop-page'>
     <Route path={`${match.path}`} exact component={CollectionsOverview}/>
     <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
}


export default ShopPage;
