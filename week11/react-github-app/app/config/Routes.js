import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Search from '../components/Search';
import Details from '../components/Details';

const Routes = () => {
  return (
    <HashRouter>
      <div className="myReactApp">

        <Switch>
        {
          // Rails:  get '/' => 'pages#home'
        }
          <Route exact path="/" component={Home}    />
          <Route path="/search" component={Search}  />
          <Route path="/details/:username" component={Details}  />

        </Switch>

      </div>
    </HashRouter>
  );
};

export default Routes;
