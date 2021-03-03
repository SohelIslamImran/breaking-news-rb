import React from 'react';
import Media from 'react-bootstrap/Media'

const News = (props) => {
    const { urlToImage, title, description, content, url } = props.article
    return (
        <a href={url} className="text-decoration-none text-dark">
            <Media className="my-4 border border-2 p-2">
                <img width={100} height={100} className="align-self-start mr-3" src={urlToImage} alt="Generic placeholder" />
                <Media.Body>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <p>{content}</p>
                </Media.Body>
            </Media>
        </a>

    );
};

export default News;