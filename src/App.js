import React from 'react';
import MasterPage from './components/landing-page/panel-student/masterPage.jsx';
import MasterPageAdmin from './components/admin/masterPage.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={MasterPageAdmin} />
        <Route path="/" component={MasterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
