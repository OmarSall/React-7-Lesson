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
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete the post');
            }

            const updatedResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            const updatedData = await updatedResponse.json();
            setPosts(updatedData);

            if (highlightedPostId === postId) {
                setHighlightedPostId(null);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
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
