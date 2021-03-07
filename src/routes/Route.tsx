import React from 'react';

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  // eslint-disable-next-line react/prop-types
  component: Component,
  ...rest
}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactDOMRoute {...rest} render={() => <Component />} />;
};

export default Route;
