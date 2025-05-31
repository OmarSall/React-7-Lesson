import { usePostsContext } from './usePostsContext';

export const Post = ({ post }) => {
    const { deletePost, highlightPost, highlightedPostId } = usePostsContext();

    const handleDelete = () => {
        deletePost(post.id);
    };

    const handleHighlight = () => {
        highlightPost(post.id);
    };

    const isHighlighted = post.id === highlightedPostId;

    return (
        <div
            onClick={handleHighlight}
            style={{
                cursor: 'pointer',
                fontWeight: isHighlighted ? 'bold' : 'normal',
                backgroundColor: isHighlighted ? 'rgba(98,208,17,0.89)' : 'transparent',
                padding: '8px',
                border: '1px solid #ddd',
                marginBottom: '8px',
            }}
        >
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};
