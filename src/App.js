import logo from './logo.svg';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import './components/Comments/comments.css'
import './components/Posts/posts.css'
import './components/Users/use.css'
function App() {
  return (
    <div className="App">

        <Users/>
        <Posts/>
        <Comments/>

    </div>
  );
}

export default App;
