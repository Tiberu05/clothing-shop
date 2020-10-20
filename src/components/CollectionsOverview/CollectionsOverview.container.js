import { connect } from 'react-redux';

import WithSpinner from '../spinner/Spinner';
import CollectionsOverview from './CollectionsOverview';



const mapStateToProps = state => {
    return {
        isLoading: state.shop.isLoading
    }
};

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;

