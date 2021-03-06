import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import {
    faEarthAsia,
    faSearch,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon } from '~/components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes.js';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Việt Nam',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vn',
                    title: 'Việt Nam',
                    children: {
                        title: 'Ngôn ngữ',
                        data: [
                            {
                                code: 'vn',
                                title: 'Việt Nam111',
                            },
                            {
                                code: 'vn1',
                                title: 'Việt Nam1',
                            },
                            {
                                code: 'vn2',
                                title: 'Việt Nam2',
                            },
                        ],
                    },
                },
                {
                    code: 'vn1',
                    title: 'Việt Nam1',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
                {
                    code: 'vn2',
                    title: 'Việt Nam2',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and Help', to: '/fee' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

export default function Header() {
    const handleOnchange = (i) => {
        console.log(i);
    };
    const [currentUser, setCurrentUser] = useState(true);

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/profile' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/setting' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/setting', separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('logo')}>
                    <img src={images.logo} to={routesConfig.home} />
                </Link>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content={'Upload video'} placement={'bottom'}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />}>
                                Register
                            </Button>
                            <Button rounded primary className={cx('custom-login')}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnchange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ec5114cce9483d32f1c5d55a7b39f108~c5_100x100.jpeg?x-expires=1658026800&x-signature=n3SaTNrVeFZ4ozuCKGQtiWajhRk%3D"
                                className={cx('user-avatar')}
                                alt="Phạm Thanh Sơn"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
