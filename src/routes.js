import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
import Home from "./pages/Home";
import Acomodacoes from "./pages/Acomodacoes";
import AcomodacoesDetalhe from "./pages/Acomodacoes/Detalhe";
import Passeios from "./pages/Passeios"; 
import Experiencias from "./pages/Experiencias";
import Eventos from "./pages/Eventos";
import Gastronomia from "./pages/Gastronomia";

  const Routes = () => {
      return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/acomodacoes" component={Acomodacoes} />
                <Route exact path="/acomodacoes/:detalhe" component={AcomodacoesDetalhe} />
                <Route exact path="/passeios" component={Passeios} />
                <Route exact path="/experiencias" component={Experiencias} />
                <Route exact path="/eventos" component={Eventos} />
                <Route exact path="/gastronomia" component={Gastronomia} />
            </Switch>
        </BrowserRouter>
      );
  }

  export default Routes;