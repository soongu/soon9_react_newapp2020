import React from 'react';
import cn from 'classnames/bind';
import style from '../css/Category.module.scss'

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
];

const Category = ({ onSelect, category }) => {
    const cx = cn.bind(style);
    return (
        <div className={cx('container')}>
            {categories.map(c =>
                (
                <div key={c.name} className={cx('item', category === c.name ? 'active': '')} onClick={() => onSelect(c.name)}>{c.text}</div>
                )
            )}
        </div>
    );
};

export default Category;