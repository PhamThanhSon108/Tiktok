import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export default function Header() {
    console.log(images);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Please search" spellCheck={false} />

                    <button className={cx('search-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                    </button>
                </div>
                <div className={cx('action')}>A b c</div>
            </div>
        </header>
    );
}
