import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import makeStore from "././components/Redux/store";

function App() {
  return (
    <div>
      <Provider store={makeStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
