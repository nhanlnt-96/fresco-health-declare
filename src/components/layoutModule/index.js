import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../configs/route.config';

const LayoutModule = () => {
  return (
    <Switch>
      {
        routes.map((val, index) => {
          const {path, isExact, module} = val;
          return (
            <Route key={index} path={path} exact={isExact} component={module} />
          )
        })
      }
    </Switch>
  )
}

export default LayoutModule;