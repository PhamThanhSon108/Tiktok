import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
export default function Button({
    to,
    href,
    primary,
    small,
    text,
    outline,
    children,
    onClick,
    disable,
    className,
    leftIcon,
    rightIcon,
    rounded,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', { primary, outline, small, text, disable, rounded, [className]: className });
    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on')) {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('content')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
