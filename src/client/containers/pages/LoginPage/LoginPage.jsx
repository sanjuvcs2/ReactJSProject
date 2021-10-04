import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import logo from "../../../assets/images/favi.png";
import { getUserDetails } from '../../../actions/LoginAction';
import { loginData } from '../../../common/Constants'
import './LoginPage.css';

export class LoginPage extends Component {
    static propTypes = {
        actions: PropTypes.objectOf(PropTypes.func),
        loginDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    };

    static defaultProps = {
        actions: {},
        loginDetails: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            userError: false,
            pwdError: false,
            isSuccess: false,
            isBothWrong: false,
            text: ''
        }
    }

    componentDidMount() {
        this.props.actions.getUserDetails();
    }

    handleSubmit = e => {
        const { loginDetails } = this.props;
        e.preventDefault();

        if (!e.target.user.value && !_isEmpty(loginDetails)) {
            this.setState({
                text: loginData.validUser,
                userError: true,
                isBothWrong: false
            });
        } else if (!e.target.user.value) {
            this.setState({
                text: loginData.validUserdata,
                userError: true,
                isBothWrong: false
            })
        } else if (!e.target.password.value) {
            this.setState({
                text: loginData.pwdUser,
                pwdError: true,
                userError: false,
                isBothWrong: false
            })
        } else if (e.target.user.value === loginDetails.data.user && e.target.password.value === loginDetails.data.password) {
            this.setState({
                isSuccess: true,
                pwdError: false,
                userError: false,
                isBothWrong: false
            });
            e.target.user.value = "";
            e.target.password.value = "";
            /* istanbul ignore next */
            setTimeout(() => {
                window.location.href = '/home';
            }, 500);
        } else {
            this.setState({
                text: loginData.wrongValid,
                isBothWrong: true,
                pwdError: false,
                userError: false
            });
        }
    };

    render() {
        const { userError, pwdError, isSuccess, text, isBothWrong } = this.state;
        return (
            <div id="Login">
                <div className={"App"}>
                    <img src={logo} className={"logo"} alt="POC Login" />
                    <h1>{loginData.title}</h1>
                    <form className="form" onSubmit={this.handleSubmit} id="form">
                        <div className="input-group">
                            <label htmlFor="user">{loginData.user}</label>
                            <input type="user" name="user" placeholder="test" />
                            {userError && (
                                <label className={('errorMsg')} automation-id='at-error-incorrect-login'>
                                    {text}
                                </label>
                            )}
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">{loginData.pwd}</label>
                            <input type="password" name="password" placeholder="password" />
                            {pwdError && (
                                <label className={('errorMsg')} automation-id='at-error-incorrect-login'>
                                    {text}
                                </label>
                            )}
                        </div>
                        <div className='passDetails'><label>{loginData.userd} <strong>{loginData.test}</strong></label><br />
                            <label>{loginData.pwdss}<strong>{loginData.pwdssData}</strong></label></div>
                        {isBothWrong && <label className={('errorMsgBtm')}>{text}</label>}
                        <button className="primary">{loginData.submit}</button>
                        {isSuccess && <p className={('success')}>{loginData.successful}</p>}
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginDetails: _get(state, 'loginDetails')
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            getUserDetails,
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
