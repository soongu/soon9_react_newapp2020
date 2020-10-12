import React, {useCallback, useState} from 'react';
import NewsList from "./components/NewsList";
import Category from "./components/Category";

const App = () => {
    const my_app_key = 'b694cf787f9148ff9c4ade5aaa1b24c0';
    // const [data, setData] = useState(null);
    // const onClick = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    //         setData(response.data);
    //     });
    // };

    // const onClick = async () => {
    //     try {
    //         const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=${app_key}`);
    //         setData(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    const [category, setCategory] = useState('all');
    const onSelect = useCallback(c => setCategory(c), []);

    return (
        <>
            <Category category={category} onSelect={onSelect} />
            <NewsList category={category} my_app_key={my_app_key} />
        </>
    );
};

export default App;