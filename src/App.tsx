import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/global';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ToastProvider>
          <Router>
            <Routes />
            <GlobalStyles />
          </Router>
        </ToastProvider>
      </Provider>
    </>
  );
};

export default App;
