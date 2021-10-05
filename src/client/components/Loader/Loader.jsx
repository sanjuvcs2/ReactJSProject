import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import * as styles from './Loader.css';

const cx = classNames.bind(styles);

export class Loader extends Component {
    static propTypes = {
        automationId: PropTypes.string,
        isLoading: PropTypes.bool,
        spinner: PropTypes.bool,
        isSkipOverlay: PropTypes.bool,
        loaderClass: PropTypes.string,
        themeConfig: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    };

    static defaultProps = {
        automationId: 'at-loader',
        isLoading: false,
        spinner: false,
        isSkipOverlay: false,
        loaderClass: '',
        themeConfig: {}
    };

    shouldComponentUpdate(nextProps) {
        return this.props.isLoading !== nextProps.isLoading;
    }

    render() {
        const { automationId, isSkipOverlay, loaderClass, themeConfig } = this.props;

        return (
            <div>
                {this.props.isLoading && !this.props.spinner && (
                    <div className={cx('loader', loaderClass, !isSkipOverlay && 'loader-overlay')}>
                        <div className={cx('loaderImage', themeConfig.wrapper)}>
                            <div automation-id={automationId} className={cx('loadingCircle', themeConfig.loader)} />
                        </div>
                    </div>
                )}

                <div className={cx(loaderClass, 'spinnerLoader')}>
                    <div className={cx('loaderImage', themeConfig.spinnerWrapper)}>
                        <div automation-id={automationId} className={cx('loadingCircle', themeConfig.loader)} />
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
});

export default connect(mapStateToProps)(Loader);
