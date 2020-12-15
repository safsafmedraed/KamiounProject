import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dic from './Component/Dictionary'
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
      <Route path="/" component={dic} />
        </Switch>
        </BrowserRouter>
        </Provider>
  );
}

export default App;
