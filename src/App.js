import {BrowserRouter} from "react-router-dom";
import AppRouts from "./AppRouts/AppRouts";
import Header from "./Components/Header/Header";


function App() {
  return (
    <BrowserRouter>
        <Header />
      <AppRouts />
    </BrowserRouter>
  );
}

export default App;
