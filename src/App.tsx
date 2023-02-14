import React from "react";
import "./App.css";
import { UserBox } from "./components/UserBox/UserBox";
import { PostBox } from "./components/PostBox/PostBox";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <UserBox />
        <PostBox />
      </header>
    </div>
  );
}

export default App;
