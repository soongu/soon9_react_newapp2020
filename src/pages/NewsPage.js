import React from 'react';
import Category from "../components/Category";
import NewsList from "../components/NewsList";

const NewsPage = ({ match }) => {
    console.log(match);
    //카테고리가 지정되지 않았으면 all로 사용
    const category = match.params.category || 'all';

    return (
        <>
            <Category />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;