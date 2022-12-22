import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div style={{ border: '5px solid black', paddingBottom: '3rem', margin: '2rem' }}>
            <h1>Posts</h1>
            {
                isLoading && <h3>Loading.....</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            {
                posts && posts.map(post => <article key={post.id}>
                    <h3>{post.title}</h3>
                    <h4>{post.body}</h4>
                </article>)
            }
        </div>
    );
};

export default PostsView;