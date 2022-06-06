import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import FlashLight from "./components/FlashLight";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FlashLight on={true} />
      </div>
    </Provider>
  );
}

export default App;
