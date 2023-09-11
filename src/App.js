import { Provider } from "react-redux";
import Body from "./componets/Body";
import appStore from "./utils/appStore";
// body is the root component

function App() {
  return (
    <Provider store={appStore}>
      <Body />;
    </Provider>
  );
}

export default App;
