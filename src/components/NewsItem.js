import React from 'react';
import classnames from 'classnames/bind';
import style from '../css/NewsItem.module.scss';

const NewsItem = ({ article }) => {

    const { title, description, url, urlToImage } = article;

    const cx = classnames.bind(style);

    return (
        <div className={cx('container')}>
            {urlToImage && (
                <div className={cx('thumbnail')}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className={cx("contents")}>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default NewsItem;