import { usePostsContext } from './usePostsContext';

export const PostsCounter = () => {
    const { posts, isLoading } = usePostsContext();

    if (isLoading) {
        return <p>Counting posts...</p>;
    }

    return (
        <div>
            <h4>Total Posts: {posts.length}</h4>
        </div>
    );
}

