// Dependencies
import React from "react";
// Components
import SearchPost from "./components/searchpost/SearchPost";
import PostsList from "./components/postlist/PostList";
function App() {
  return (
    <div className="App">
      <SearchPost />
      <PostsList />
    </div>
  );
};

export default App;
