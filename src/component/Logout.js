import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LOGOUT_SUCCESS } from '../actions/types';
import store from './reduxStore';

export class Logout extends Component {

    componentDidMount() {
        store.dispatch({
            type: LOGOUT_SUCCESS
        })
    }
}

export default (Logout);
