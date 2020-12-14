import React, {  useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// CSS
import './App.scss';

// COMPONENTS
import Header from './components/header/Header';
import CartDropdown from './components/cart-dropdown/CartDropdown';
import MobileNav from './components/mobile-nav/MobileNav';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

// PROTECTED ROUTE
import ProtectedRoute from './components/protected/ProtectedRoute';

// REDUX
import { checkUserSession, logOut } from './redux/actions/auth';
import { selectCurrentUser } from './redux/selectors/userSelector';
import { selectCollections } from './redux/selectors/shopSelector';

// REACT LAZY -- PAGES
const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const AuthPage = lazy(() => import('./pages/auth/AuthPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));
const AdminPage = lazy(() => import('./pages/admin/AdminPage'));




const App = ({ checkUserSession, currentUser, hidden, navMenuOn }) => {


    useEffect(() => {
        checkUserSession();

    }, [checkUserSession]);


    return (
        <div>
            <header>      
                <div className='container'>
                    {hidden ? null : <CartDropdown  />}
                    
                    {navMenuOn ? <MobileNav /> : null}
                    <Header />
                </div>
            </header>
            <section>
                <div className='container'>
                    
                    <Switch>
                        <ErrorBoundary>
                            <Suspense fallback={<Spinner />}>
                                <Route exact path='/' component={HomePage} />
                                <Route path='/shop' component={ShopPage} />
                                {/* <Route exact path='/shop/:category' component={CollectionPage} /> */}
                                <Route exact path='/checkout' component={CheckoutPage} />
                                {
                                    !currentUser ? null : <ProtectedRoute path='/admin' component={AdminPage} currentUser={currentUser} />
                                }
                                
                                <Route 
                                    exact 
                                    path='/auth' 
                                    render={() => currentUser ? (
                                        <Redirect to='/'/>
                                    ) : (
                                        <AuthPage />
                                    )} />
                            </Suspense>
                        </ErrorBoundary>

                    </Switch>
                </div>
            </section>  
        </div>
    )
};


const mapStateToProps = state => {
    return {
        currentUser: selectCurrentUser(state),
        hidden: state.cart.hidden,
        navMenuOn: state.nav.navMenuOn,
        collectionsArray: Object.values(selectCollections(state))
    }

}

export default connect(mapStateToProps, { checkUserSession, logOut })(App);