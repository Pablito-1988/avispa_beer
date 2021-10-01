import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Nosotros from './components/main/Nosotros/Nosotros';
import Contacto from './components/main/Contacto/Contacto';
import Estilos from './components/main/Estilos/Estilos';

import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/'>
        {<Main/>}
        </Route>
        <Route exact path='/nosotros'>
        {<Nosotros/>}
        </Route>
        <Route exact path='/contacto'>
        {<Contacto/>}
        </Route>
        <Route exact path='/estilos'>
        {<Estilos/>}
        </Route>
      </Switch>    
      <Footer/>
    </>
  );
}

export default App;
