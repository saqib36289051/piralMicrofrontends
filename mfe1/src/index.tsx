import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'container';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/grievence', Page);
  app.registerMenu(() => <Link to="/grievence">Grievence</Link>);
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
