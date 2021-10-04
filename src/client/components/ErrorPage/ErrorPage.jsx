import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';
import Layout from '../Layout/Layout';

export class ErrorPage extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <Layout />
                <div className={('apiErrorWrapper')}>
                    <div className={('errorSection')}>
                        <p className={('errorMessageTitle')}>Page Error...</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    //errorMessage: _get(state, 'pageContent')
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            //getPageContent
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
