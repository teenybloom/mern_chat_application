import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import 'bulma';


import RegistrationPage from './pages/RegistrationPage';
import ChatRoomPage from './pages/ChatRoom';
import Chat from './pages/Chat'


class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={RegistrationPage} />
          <Route path='/chatrooms' component={ChatRoomPage} />
          <Route path='/chatrooms/:roomName' component={Chat} />
        </Switch>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}

export default App;
