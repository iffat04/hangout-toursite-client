import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import AddPackages from '../AddPackages/AddPackages';
import ManageAllPack from '../ManageAllPack/ManageAllPack';
import MyPackages from '../MyPackages/MyPackages';

const DashBoard= () => {
    let { path, url } = useRouteMatch();
    //console.log(path,url);
    return (
        <div>
            <h1>DashBoard</h1>
            <div>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                       <Container>
                        <Navbar.Brand href="#">DashBoard</Navbar.Brand>
                        <Nav>
                        <Nav.Link as={Link} to={`${url}/addPackages`}>Add Packages</Nav.Link>
                      
                        <Nav.Link as={Link} to={`${url}/managePackages`}>Manage Packages</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/myPackages`}>My Packages</Nav.Link>
                    </Nav>  
                    </Container>
                    </Navbar>
                </Container> 
            </div>
            <div>
            <Switch>
                <Route exact path={path}>
                <AddPackages></AddPackages>
                </Route>
                <Route path={`${path}/addPackages`}>
                <AddPackages></AddPackages>
                </Route>
                <Route path={`${path}/managePackages`}>
                <ManageAllPack></ManageAllPack>
                </Route>
                <Route path={`${path}/myPackages`}>
               <MyPackages></MyPackages>
                </Route>
            </Switch>
            </div>
        </div>
    );
};

export default DashBoard;