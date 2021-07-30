import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SimpleBottomNavigation from './Components/MainNav';
import Trending from './Components/Pages/Trending/Trending';
import Movies from './Components/Pages/Movies/Movies';
import Series from './Components/Pages/Series/Series';
import Search from './Components/Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
    <Container>
      <Switch>
        <Route path='/' component={Trending} exact/>
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />
        <Route path='/search' component={Search} />

      </Switch>
    
    </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
