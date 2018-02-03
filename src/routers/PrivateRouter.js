import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import JourneyHeader from '../components/JourneyHeader';

// login : show Components, logout: redirect to "/"
// ...rest: path, location etc., nedd to match with the path in AppRouter.js
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest,
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <JourneyHeader />
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to="/" />
            )
        )} />
    )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid   // true/false
});

export default connect(mapStateToProps)(PrivateRoute);