import './App.css';
import {Switch} from 'react-router-dom'
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Logout from './components/Logout';
import Header from './components/Header';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  
  return (
    <AuthContextProvider>
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/friends">
      <FriendsList/>
      </ProtectedRoute>
      <ProtectedRoute path="/friends_add">
      <AddFriend/>
      </ProtectedRoute>
      <ProtectedRoute path="/logout">
      <Logout/>
      </ProtectedRoute>
      </Switch>
    </div>
    </AuthContextProvider>
  );
}

export default App;
