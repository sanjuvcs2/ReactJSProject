import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import _get from 'lodash/get';
import classNames from 'classnames/bind';
import logo from "../../../assets/images/favi.png";
import * as styles from './LoginPage.css';

const cx = classNames.bind(styles);
export class LoginPage extends Component {
    static propTypes = {
        actions: PropTypes.objectOf(PropTypes.func),
        breadcrumbs: PropTypes.oneOfType([PropTypes.array]),
        localization: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        message: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    };

    static defaultProps = {
        actions: {},
        breadcrumbs: [],
        localization: {},
        message: {}
    };

    /*constructor(props) {
        super(props);
        //props.actions.getPageContent({ pageId: PAGE_ID.UPDATE_PASSWORD });
    }*/

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.user.value);

        if (!e.target.user.value) {
            alert("User is required");
        } else if (!e.target.user.value) {
            alert("Valid User is required");
        } else if (!e.target.password.value) {
            alert("Password is required");
        } else if (
            e.target.user.value === "test" &&
            e.target.password.value === "password"
        ) {
            alert("Successfully logged in");
            e.target.user.value = "";
            e.target.password.value = "";
        } else {
            alert("Wrong User or password combination");
        }
    };

    handleClick = e => {
        e.preventDefault();
        alert("Goes to registration page");
    };

    render() {
        return (
            <div className={cx("App")} id="Login">
                <img src={logo} className={cx("logo")} alt="POC Login" />
                <h1>Let's get started</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="user">User</label>
                        <input type="user" name="user" placeholder="test" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className="primary">Submit</button>
                </form>
                <button className="secondary" onClick={this.handleClick}>
                    Register
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        /*breadcrumbs: _get(state, 'pageContent.breadcrumbs'),
        localization: _get(state, 'pageContent.localization'),
        message: _get(state, 'loginPage.message')*/
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            //clearLoginMessage,
            //getPageContent
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
