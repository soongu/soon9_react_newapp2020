import React, {useEffect, useState} from 'react';
import NewsItem from "./NewsItem";
import style from "../css/NewsList.module.scss";
import cn from "classnames/bind";
import axios from 'axios';

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: "https://soongu.github.io",
//     urlToImage : "https://via.placeholder.com/160"
// }

const NewsList = ({my_app_key, category}) => {
    // console.log('category', category);
    const cx = cn.bind(style);

    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const reqUrl = `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${my_app_key}`;
                // console.log('reqUrl:', reqUrl);
                const response = await axios.get(reqUrl);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    //대기 중일 때
    if (loading) {
        return <div className={cx('container')}>대기 중...</div>
    }
    //아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    return (
        <div className={cx('container')}>
            {articles.map(atc => (
                <NewsItem key={atc.url} article={atc} />
            ))}
        </div>
    );
};

export default NewsList;