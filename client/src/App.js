import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ArtistList from './components/ArtistList';
import artModal from './components/artModal';
import ArtCarousel from './components/ArtCarousel';

import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App"> 
          <AppNavbar/>
          <Container>
            <ArtCarousel/>
            </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
