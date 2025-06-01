import { TopPosts } from './TopPosts';

export const Sidebar = () => {
    return (
        <aside style={{ width: '250px', padding: '1rem', backgroundColor: 'rgba(161,255,96,0.89)' }}>
            <h3>Follow Us</h3>
            <ul>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>

            <hr style={{ margin: '1rem 0' }} />

            <TopPosts />
        </aside>
    );
};