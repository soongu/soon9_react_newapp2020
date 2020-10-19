import React from 'react';
import cn from 'classnames/bind';
import style from '../css/Category.module.scss'
import { NavLink } from "react-router-dom";

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

const Category = () => {
    const cx = cn.bind(style);
    return (
        <div className={cx('container')}>
            {categories.map(c =>
                (
                <NavLink
                    key={c.name}
                    className={cx('item')}
                    activeClassName={cx('active')}
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </NavLink>
                )
            )}
        </div>
    );
};

export default Category;