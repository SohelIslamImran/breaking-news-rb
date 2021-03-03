import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=810c3dce266a492c8337ae5ea8e21168')
            .then(response => response.json())
            .then(data => setArticles(data.articles))
    }, []);

    return (
        <div className="container mt-3">
            <h2>Top Headlines: {articles.length}</h2>
            {
                articles.map(article => <News key={article.id} article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;