import React from 'react';
import TimeAgo from 'timeago-react';

import './SinglePost.scss';

import ReactButton from './ReactButton.jsx';
import WriteComment from './WriteComment.jsx';
import Slider from './Slider.jsx';

function SinglePost({
    avatar,
    author,
    date,
    postDescription,
    status,
    images,
    titlePost,
    description,
    link,
}) {
    const iconName = status === 'public' ? 'globe-americas' : 'user-friends';

    return (
        <div className="single-post">
            <div className="single-post__content">
                <div className="single-post__header">
                    <div className="single-post__avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="single-post__author">
                        <h4>{author}</h4>
                        <div className="single-post__date">
                            <span className="date" title={new Date(date).toLocaleString()}>
                                <TimeAgo datetime={date} />
                            </span>
                            <span className="horizontal-spacing">•</span>
                            <i className={`fas fa-${iconName}`} />
                        </div>
                    </div>
                </div>
                <div className="single-post__description">{postDescription}</div>
                <div className="single-post__media">
                    <Slider images={images} />
                    <div className="single-post__media-description">
                        <h2>{titlePost}</h2>
                        <p>{description}</p>
                        <div className="single-post__link">
                            <a href={link}>{link}</a>
                        </div>
                    </div>
                </div>
                <div className="single-post__buttons">
                    <ReactButton icon="thumbs-up">Like</ReactButton>
                    <ReactButton icon="comment">Comment</ReactButton>
                    <ReactButton icon="share">Share</ReactButton>
                </div>
            </div>

            <WriteComment />
        </div>
    );
}

export default SinglePost;
