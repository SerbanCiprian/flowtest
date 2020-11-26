import React from 'react';

import Compose from './Compose.jsx';
import SinglePost from './SinglePost.jsx';

import avatarPost from './images/avatar-post.png';
import image00 from './images/image00-slider.jpg';
import image01 from './images/image01-slider.jpg';
import image02 from './images/image02-slider.jpg';
import image03 from './images/image03-slider.jpg';
import image04 from './images/image04-slider.jpg';
import image05 from './images/image05-slider.jpg';

const posts = [
    {
        id: 0,
        avatar: avatarPost,
        author: 'Flowmatters',
        date: '2020-07-12T17:00:00',
        postDescription:
            'Perspective FM : #15 How to create a winning proposal with Dylan Baskind from Qwilr',
        status: 'public',
        images: [image00, image01, image02],
        titlePost: '#15 How to create a winning proposal with Dylan Baskind from Qwilr',
        description:
            'This week Jon is joined by Dylan Baskind - designer/developer and founder of proposal writing tool Qwilr. We speak about Dylans journey from working in the…',
        link: 'PERSPECTIVE.FM',
    },
    {
        id: 1,
        avatar: avatarPost,
        author: 'Flowmatters',
        date: '2020-08-19T10:00:00',
        postDescription: 'Good culture in digital teams is all about people',
        status: 'friends',
        images: [image03, image04, image05],
        titlePost: 'Good culture evolves from the bottom up',
        description:
            'The Government Digital Service (GDS) is leading the digital transformation of the UK government',
        link: 'MEDIUM.STFI.RE  | BY ADAM SILVER',
    },
];

function Posts() {
    return (
        <div className="posts">
            <Compose />

            {posts.map((post) => (
                <SinglePost
                    key={post.id}
                    avatar={post.avatar}
                    author={post.author}
                    date={post.date}
                    postDescription={post.postDescription}
                    status={post.status}
                    images={post.images}
                    titlePost={post.titlePost}
                    description={post.description}
                    link={post.link}
                />
            ))}
        </div>
    );
}

export default Posts;
