import React from 'react';
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {

    //?는 옵셔널이라는 뜻 파라미터가 없으면 all로 간주
    return <Route path="/:category?" component={NewsPage} />;
};

export default App;