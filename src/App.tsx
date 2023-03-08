import "./App.css";

import { PostBox } from "./components/PostBox/PostBox";
import { UserBox } from "./components/UserBox/UserBox";

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
