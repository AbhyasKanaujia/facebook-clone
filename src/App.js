import "./App.sass";
import Header from "./components/header/Header";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import Feed from "./components/feed/Feed";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import Login from "./components/login/Login";

function App() {
  const user = null;
  return (
    <div className="mainwrp app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <LeftSidebar />
            <Feed />
            <RightSidebar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
