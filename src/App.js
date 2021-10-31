//import logo from './logo.svg';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Booking from './Pages/Booking/Booking';
import DashBoard from './Pages/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path="/">
     <Home></Home>
     </Route>
     <Route  path="/home">
     <Home></Home>
     </Route>
     <Route path="/login">
     <Login></Login>
     </Route>

     <Route path="/booking/:PackId">
       <Booking></Booking>
     </Route>

     <PrivateRoute path="/dashBoard">
       <DashBoard></DashBoard>
     </PrivateRoute>
     
     <Route path="*">             
     <NotFound></NotFound>       
     </Route>
     </Switch>

     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
