import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _find from 'lodash/find';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import { getPageContent } from '../../../actions/PageAction';
import Layout from '../../../components/Layout/Layout';

export class ChoosePage extends Component {
    static propTypes = {
        pageContent: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    };

    static defaultProps = {
        pageContent: {}
    };

    componentDidMount() {
        this.props.actions.getPageContent();
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { pageContent } = this.props;
        return (
            <div className={('container-fluid')} id="choosePage">
                <Layout />
                {!_isEmpty(pageContent.data) && <div className={'container'}>
                    <h1>Why Choose Us</h1>
                    <p>
                        undreds of Clients & Years of Experience</p>
                    <p>Since 2002, Aspire Internet Design has helped hundreds of businesses be successful with their online marketing efforts.  We use this knowledge and expertise  to help our clients take their business to the next level with results-driven e-marketing solutions.</p>
                    <h4>Goal Oriented, ROI-Driven Focus</h4>
                    <p>
                        The web makes it easy to monitor and measure all marketing efforts.  For each project, we work with our clients to identify business objectives and goals, and implement measurement tools that allow for the tracking and analysis of website traffic, the number of leads generated, conversion rates, keyword popularity,  blog subscription growth, email marketing campaign effectiveness, social media reach, and much more.  This high degree of measurement allows us to track ROI, determine what’s working, and identify areas in need of improvement on an ongoing basis.</p>
                    <h4>A Streamlined / Quality-Driven Process</h4>
                    <p>
                        Our 4-phase process ensures your web design project flows smoothly and efficiently.  We employ quality-control checklists throughout the process and will communicate with you on a regular basis about the on-going status of your project.
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePage);


