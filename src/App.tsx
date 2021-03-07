import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes />
          <GlobalStyles />
        </Router>
      </Provider>
    </>
  );
};

export default App;
