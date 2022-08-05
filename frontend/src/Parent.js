import "./App.css";
import Posts from "./features/posts/Posts";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Parent() {
  return (
    <div className="Parent">
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
}

export default Parent;
