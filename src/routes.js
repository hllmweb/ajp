import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
import Home from './pages/Home';
import Acomodacoes from './pages/Acomodacoes';

  const Routes = () => {
      return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/acomodacoes" component={Acomodacoes} />
            </Switch>
        </BrowserRouter>
      );
  }

  export default Routes;