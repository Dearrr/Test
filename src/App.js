
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Pokemon } from "./pages/Pokemon/Pokemon";
import { Function1 } from "./pages/Function1";
import { Function2 } from "./pages/Function2/Function2";
import { Function3 } from "./pages/Function3/Function3";
import { Menu } from "./pages/Menu";
import { Header, HeaderText } from "./AppComponent";

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderText>Test Frontend</HeaderText>
      </Header>

      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="pokemon" element={<Pokemon />}></Route>
        <Route path="function1" element={<Function1 />}></Route>
        <Route path="function2" element={<Function2 />}></Route>
        <Route path="function3" element={<Function3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
