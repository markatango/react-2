//import { render } from '@testing-library/react';
import { React } from 'react';
import { Route, Switch } from 'react-router-dom';

const Page1 = (props) => {
    console.log(props);
    return(
    <div>
        <h1>Page One</h1>
    </div>

);}

const Page2 = (props) => {
    console.log(props);
    return (
    <div>
        <h1>Page Two</h1>
    </div>
);}

const Page3 = (props) => {
    
    console.log(props);
    return (
    <div>
        <h1>Page Three</h1>
    </div>
);
}
const RouteDemo =  (props) => {
    console.log(props);
    return (
        <div>
            <Switch>
            <Route exact  path='/' component={Page1} />
            <Route  path='/p2' component={Page2} />
            <Route path='/p2:p2ID' component={Page2} />
            <Route  path='/p3' component={Page3} />
            </Switch>
            
        </div>
    )
}

export default RouteDemo;
   