import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Place from './Place';
import Signup from './Signup';
import Signin from './Signin';
import Booking from './Booking';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  console.log('ICI ACTION :', action.payload.data.user);
  switch (action.type) {
    case 'SIGNIN':
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('user', action.payload.data.user.id);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        user: action.payload.config.user,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default function Routes() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/signin">
          <div>{!state.isAuthenticated ? <Signin /> : <Home />}</div>
        </Route>

        <Route path="/places/:id">
          <Place />
        </Route>

        <Route path="/bookings/:id">
          <div>{!state.isAuthenticated ? <Signin /> : <Booking />}</div>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}
