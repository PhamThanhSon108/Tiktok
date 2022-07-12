import React from 'react';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export default function AccountItem() {
    const urlAvt =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2sBmICHO_WDvHuFtfsFhlX9dnBT18ferKA&usqp=CAU';
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={urlAvt} alt="Son" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Pham Thanh Sơn</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>PhamThanhSon</span>
            </div>
        </div>
    );
}
