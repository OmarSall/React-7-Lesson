import { PostsList } from './PostsList';
import { usePostsContext } from './usePostsContext';
import { PostsCounter } from './PostsCounter';

export const MainContent = () => {
    const { posts, isLoading } = usePostsContext();

    console.log(posts.length); // 4

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: '250px', padding: '1rem', backgroundColor: 'rgba(104,255,0,0.89)' }}>
            <h3>All posts</h3>
            <PostsCounter posts={posts} />
            <PostsList posts={posts} />
        </div>
    );
};
