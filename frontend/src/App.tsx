import './App.css';
import Posts from './features/posts/Posts';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Posts />
      <Footer/>
    </div>
  );
}

export default App;
