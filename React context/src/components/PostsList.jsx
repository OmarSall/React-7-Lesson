import { Post } from './Post';

export const PostsList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};
