import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _find from 'lodash/find';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import { getPageContent } from '../../../actions/PageAction';
import Layout from '../../../components/Layout/Layout';
import { AboutUsData } from '../../../common/Constants';

export class AboutUs extends Component {
    static propTypes = {
        actions: PropTypes.objectOf(PropTypes.func),
        pageContent: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    };

    static defaultProps = {
        actions: {},
        pageContent: {}
    };

    componentDidMount() {
        this.props.actions.getPageContent();
    }

    render() {
        const { pageContent } = this.props;
        return (
            <div className={('container-fluid')} id="aboutus">
                <Layout />
                {pageContent.data && <div className={'container'}>
                    <h1>{pageContent.data.aboutUs}</h1>
                    <p>{AboutUsData.subTitle}</p>
                    <p>{AboutUsData.change}</p>
                    <ul><li>
                        {AboutUsData.wht}</li>
                        <li>{AboutUsData.matters}</li>
                        <li>{AboutUsData.abtDo}</li>
                        <li>{AboutUsData.it}</li></ul>
                    <p>{AboutUsData.blog}</p>
                    <p>{AboutUsData.factor}</p>
                    <ul>
                        <li>{AboutUsData.purchase}</li>
                        <li>{AboutUsData.download}</li>
                        <li>{AboutUsData.sing}</li>
                        <li>{AboutUsData.info}</li></ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);


