import { useRoutes } from "react-router";
import routes from "./assets/routes";

function App() {
  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
