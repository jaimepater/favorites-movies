/**
 *
 * Login
 *
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import {
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import useStores from '../../commons/hooks/useStores';
import { User } from '../../commons/stores/UsersStore';

interface State {
  user: string;
  password: string;
  showPassword: boolean;
}

const Login = observer(() => {
  const {
    managerStore: {
      userStore: { validateUser, getUsers, isAuthenticate }
    }
  } = useStores();
  const [values, setValues] = React.useState<State>({
    password: '',
    user: '',
    showPassword: false
  });
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticate) history.push('/home');
  }, [isAuthenticate]);

  const handleSubmit = () => {
    const user: User = { name: values.user, password: btoa(values.password) };
    validateUser(user);
  };

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const disabled = () => !values.password && !values.user;

  return (
    <Container fixed>
      <form>
        <FormControl fullWidth>
          <TextField
            required
            id="user"
            value={values.user}
            onChange={handleChange('user')}
            label="User"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          size="large"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </Container>
  );
});

export default Login;
