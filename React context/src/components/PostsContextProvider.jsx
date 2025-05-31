import {useEffect, useState} from 'react';
import {PostsContext} from './PostsContext';

export const PostsContextProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [highlightedPostId, setHighlightedPostId] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            });
    }, []);

    const deletePost = async (postId) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        });

        const filteredPosts = posts.filter((post) => {
            return post.id !== postId;
        });
        setPosts(filteredPosts);

        if (highlightedPostId === postId) {
            setHighlightedPostId(null);
        }
    };

    const highlightPost = (postId) => {
        setHighlightedPostId(postId);
    };


    return (
        <PostsContext.Provider
            value={{
                posts,
                isLoading,
                deletePost,
                highlightedPostId,
                highlightPost,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};
