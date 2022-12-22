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
        <div >
            <h1>Posts</h1>
            {
                isLoading && <h3>Loading.....</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            <section>
                {
                    posts && posts.map(post => <article key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </article>)
                }
            </section>
        </div>
    );
};

export default PostsView;