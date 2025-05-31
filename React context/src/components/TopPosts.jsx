import { PostsList } from './PostsList';
import { usePostsContext } from './usePostsContext';

export const TopPosts = () => {
    const { posts, isLoading } = usePostsContext();

    if (isLoading) {
        return <p>Loading top posts...</p>;
    }

    return (
        <div>
            <h3>Top 2 posts:</h3>
            <PostsList posts={posts?.slice(0, 2)} />
        </div>
    );
};
