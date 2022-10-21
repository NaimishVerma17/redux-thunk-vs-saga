import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux';
import store from './store';
import AppWithThunk from './AppWithThunk';
import AppWithSaga from './AppWithSaga';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          {/*<App/>*/}
          {/*<AppWithThunk />*/}
          <AppWithSaga />
      </Provider>

  </React.StrictMode>
)
