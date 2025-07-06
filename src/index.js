import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router';
import store from './store/index';
import { Toaster } from 'react-hot-toast';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store} >
  <App />
  <Toaster
      toastOptions={{
        position : 'top-right',
        style : {
          background : '#283046',
          color : 'white'
        }
      }} 
    />

  </Provider>
  </BrowserRouter>
  
 
);

