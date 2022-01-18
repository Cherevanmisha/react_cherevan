import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./component/Layout/Layout";
import UsersPage from "./pages/Users/UsersPage";
import PostsPage from "./pages/Posts/PostsPage";
import './component/Layout/Layout.css'

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                </Route>

            </Routes>

        </>
    );
}

export default App;
