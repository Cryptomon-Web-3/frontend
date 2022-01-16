import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Chat from "../components/Chat/Chat";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Layout from "../components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout> <Dashboard /> </Layout>} /> 
          <Route path="/chat" element={<Layout> <Chat/> </Layout>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
