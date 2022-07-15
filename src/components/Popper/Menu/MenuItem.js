import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
export default function MenuItem({ data, onClick }) {
    return (
        <Button
            text
            leftIcon={data.icon}
            to={data.to}
            className={cx('menu-item', { separate: data.separate })}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}
