import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Component } from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ContactMe.css';
import Layout from '../../../components/Layout/Layout';
import { constactData } from '../../../common/Constants';
import * as ContactMeActionCreators from '../../../actions/ContactMeAction';

export class ContactMe extends Component {
    static propTypes = {
        concern: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        concern: '',
        options: [],
        showContactMe: true
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            formSuccess: false
        }
    }

    componentDidMount() {
        if (_isEmpty(this.props.options)) {
            this.props.contactActions.getContactMeFormData();
        }
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onMsgChange(event) {
        this.setState({ message: event.target.value })
    }

    submitEmail(e) {
        e.preventDefault();
        /* istanbul ignore next */
        axios({
            method: "get",
            url: "/api/send"
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({ name: '', email: '', subject: '', message: '', formSuccess: true })
    }

    render() {
        const { showContactMe } = this.props;
        if (!showContactMe) {
            return null;
        }
        const { formSuccess } = this.state;
        return (
            <div className={('container-fluid')} id="contactMe">
                <Layout />
                <div automation-id='at-request-support-popup' className={('requestmain')}>
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-title">
                                        <h2 className="title">{constactData.title}</h2>
                                        <p>{constactData.subTitle}</p><hr />
                                        {!formSuccess && <form id="contact-form" onSubmit={this.submitEmail.bind(this)}
                                            method="POST">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input placeholder="Name" id="name" type="text"
                                                            className="form-control" required value={this.state.name}
                                                            onChange={this.onNameChange.bind(this)} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input placeholder="Email" id="email" type="email"
                                                            className="form-control" aria-describedby="emailHelp"
                                                            required value={this.state.email} onChange=
                                                            {this.onEmailChange.bind(this)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Subject" id="subject" type="text"
                                                    className="form-control" required value={this.state.subject}
                                                    onChange={this.onSubjectChange.bind(this)} />
                                            </div>
                                            <div className="form-group">
                                                <textarea placeholder="Message" id="message"
                                                    className="form-control" rows="1"
                                                    required value={this.state.message}
                                                    onChange={this.onMsgChange.bind(this)} />
                                            </div>
                                            <button type="submit" className="primary-btn submit">{constactData.submit}</button>
                                        </form>}
                                        {formSuccess && <p>{constactData.successful}</p>}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    options: _get(state, 'contactInfo.options') || [],
});

const mapDispatchToProps = dispatch => {
    return {
        contactActions: bindActionCreators(ContactMeActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
