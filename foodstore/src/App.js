import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllScreen from "./Screens/AllScreen";
import AddScreen from "./Screens/AddScreen";
import Foods from "./Screens/Foods";

function App() {
  return (
    <div className="App">
      <Header />

<main>
      <Routes>
        <Route index  element={<AllScreen />} />
        <Route path="addFoods" element={<AddScreen />} />
        <Route path="allFoods" element={<Foods />} />
      </Routes>
      </main>

    </div>
  );
}

export default App;
