import React from 'react';
import Header from '../components/Header';
import Slidebar from './Slidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Slidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
