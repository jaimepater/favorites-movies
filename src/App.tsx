import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';
import useStores from './commons/hooks/useStores';
import { User } from './commons/stores/UsersStore';
import { listMainRoutes } from './commons/utils/listRoutes';

const App: React.FC = () => {
  const {
    managerStore: {
      userStore: { setUsers }
    }
  } = useStores();
  const users: Array<User> = [
    { name: 'user1', password: 'MTIz' },
    { name: 'user2', password: 'MTIz' }
  ];

  useEffect(() => {
    setUsers(users);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {listMainRoutes.map(route => (
            <Route
              exact={route.exact}
              key={route.name}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
