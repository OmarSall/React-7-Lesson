import { useContext } from 'react';
import { PostsContext } from './PostsContext.jsx';

export function usePostsContext() {
    const value = useContext(PostsContext);
    if (!value) {
        throw new Error(
            'The usePostsContext hook should be used inside of the PostsContext.Provider',
        );
    }
    return value;
}
