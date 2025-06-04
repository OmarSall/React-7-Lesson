import {Sidebar} from './components/Sidebar';
import {MainContent} from './components/MainContent';
import './App.css'
import { PostsContextProvider } from './components/PostsContextProvider';

function App() {
    return (
        <PostsContextProvider>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <MainContent />
            </div>
        </PostsContextProvider>
    );
}

export default App;