import React from "react";

import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import './category.styles.scss'

const CollectionPage = ({collection}) => 
{
    const {title, items} = collection
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item}/> 
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)

// Prilikom pozivanja selectCollection funkcije prosledjujemo parametre u dve zagrade, jer prosledjujemo collectionUrlParam
// samoj funkciji, zatim prosledjujemo state createSelector funkciji, tj. selectCollection selektoru