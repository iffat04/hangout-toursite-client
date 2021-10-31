import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from "../../../hooks/useAuth";

const PrivateRoute = ({children,...rest}) => {
    //console.log(children);
    //console.log(rest);
    const {user,isloading} = UseAuth();
    if(isloading){
        return  <Spinner animation="border" className="text-center" size="lg" variant="danger" />
    }

    return (
        <Route
        {...rest}
        render ={ ({location})=>user.email ? children:
        <Redirect to={{
            pathname:"/login",
            state:{from:location}
        }} ></Redirect>
        }>
            
        </Route>
    );
};

export default PrivateRoute;