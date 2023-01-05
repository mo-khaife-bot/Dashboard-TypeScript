import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter></BrowserRouter>
    </div>
  );
};

export default App;
