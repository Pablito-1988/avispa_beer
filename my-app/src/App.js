import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Nosotros from './components/main/Nosotros/Nosotros';
import Contacto from './components/main/Contacto/Contacto';
import Estilos from './components/main/Estilos/Estilos';
import Access from './components/login/login';

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
        <Route  path='/nosotros'>
        {<Nosotros/>}
        </Route>
        <Route  path='/contacto'>
        {<Contacto/>}
        </Route>
        <Route  path='/estilos'>
        {<Estilos/>}
        </Route>
        <Route path='/login'>
        {<Access/>}
        </Route>
      </Switch>    
      <Footer/>
    </>
  );
}

export default App;
