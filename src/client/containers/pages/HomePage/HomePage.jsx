import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _find from 'lodash/find';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import { getPageContent } from '../../../actions/PageAction';
import Layout from '../../../components/Layout/Layout';

export class HomePage extends Component {
    static propTypes = {
        pageContent: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    };

    static defaultProps = {
        pageContent: {}
    };

    componentDidMount() {
        this.props.actions.getPageContent();
    }

    render() {
        const { pageContent } = this.props;
        return (
            <div className={('container-fluid')} id="homepage">
                <Layout />
                {!_isEmpty(pageContent.data) && <div className={'container'}>
                    <div className="row col-lg-12 banner">
                        <img src={pageContent.data.imgurl} alt="banner" className="img-responsive" />
                    </div>
                    <div className="row col-lg-12">
                        <h2>{pageContent.data.hometitle}</h2>
                        <p>{pageContent.data.innerTitle}</p>
                        <p>{pageContent.data.homeContentPage}</p>
                        <p>{pageContent.data.trans}</p>
                        <p>{pageContent.data.homeContentPage}</p>
                    </div>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pageContent: _get(state, 'pageContent')
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            getPageContent
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


