import classNames from 'classnames/bind';
import React, { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: outFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErrorImage = () => {
        setFallback(outFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleErrorImage}
        />
    );
});
export default Image;
