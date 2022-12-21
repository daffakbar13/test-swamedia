import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Navbar } from "../components";
import { paths } from "../configs";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Navbar>
        <Switch>
          {paths.map((props, i) => (
            <Route key={i} {...props} />
          ))}
        </Switch>
      </Navbar>
    </BrowserRouter>
  );
}
