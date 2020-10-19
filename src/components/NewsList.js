import React, {useEffect, useState} from 'react';
import NewsItem from "./NewsItem";
import style from "../css/NewsList.module.scss";
import cn from "classnames/bind";
import axios from 'axios';
import usePromise from "../lib/usePromise";

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: "https://soongu.github.io",
//     urlToImage : "https://via.placeholder.com/160"
// }

const NewsList = ({category}) => {
    // console.log('category', category);
    const cx = cn.bind(style);

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b694cf787f9148ff9c4ade5aaa1b24c0`);
    }, [category]);


    //대기 중일 때
    if (loading) {
        return <div className={cx('container')}>대기 중...</div>
    }
    //아직 articles 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }
    //에러 발생시
    if (error) {
        return <div className={cx('container')}>에러 발생!!</div>
    }

    //response값이 유효할 때
    const { articles } = response.data;
    return (
        <div className={cx('container')}>
            {articles.map(atc => (
                <NewsItem key={atc.url} article={atc} />
            ))}
        </div>
    );
};

export default NewsList;