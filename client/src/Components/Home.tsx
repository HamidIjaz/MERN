import "./Home.css";
import GetUsers from "./GetUsers";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <>
      <GetUsers />
      <Link to="/create">
        <button className="btn">Create User</button>
      </Link>
      <Link to="/posts">
        <button className="btn pbtn">All Posts</button>
      </Link>
    </>
  );
}

export default Home;
