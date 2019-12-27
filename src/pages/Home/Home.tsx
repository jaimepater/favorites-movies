/**
 *
 * Home
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import useStores from '../../commons/hooks/useStores';
import Menu from './Menu/Menu';
import { listHomeRoutes } from '../../commons/utils/listRoutes';

interface HomeProps {}
const Home = observer(() => {
  const {
    managerStore: {
      userStore: { logout, isAuthenticate }
    }
  } = useStores();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  const renderHome = (
    <>
      <Menu logout={handleLogout} />
      <Router>
        {listHomeRoutes.map(route => (
          <Route
            exact={route.exact}
            key={route.name}
            path={route.path}
            component={route.component}
          />
        ))}
      </Router>
    </>
  );
  return isAuthenticate ? renderHome : null;
});

export default Home;
