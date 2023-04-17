import Home from "./components/home/home.component";
import { Route, Routes } from "react-router-dom";





const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
        
        </Route>
        
      </Routes>
    </div>
  );
};

export default App;
