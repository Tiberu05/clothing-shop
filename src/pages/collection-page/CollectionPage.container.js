import { connect } from 'react-redux';

import CollectionPage from './CollectionPage';
import WithSpinner from '../../components/spinner/Spinner';

const mapStateToProps = state => {
    return {
        isLoading: state.shop.isLoading
    }
};

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;