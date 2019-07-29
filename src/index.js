import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const routes = (
<Router>
    <Route path="/" component={Menu} />
    <Route path="/ANA" component={Ducks} />
    <Route path="/ARZ" component={Yotes} />
    <Route path="/CGY" component={Flames} />
    <Route path="/CAR" component={Canes} />
    <Route path="/CHI" component={Hawks} />
    <Route path="/COL" component={Avs} />
    <Route path="/CBJ" component={Jackets} />
    <Route path="/BOS" component={Bruins} />
    <Route path="/BUF" component={Sabres} />
    <Route path="/NJD" component={Devils} />
    <Route path="/DET" component={Wings} />
    <Route path="/DAL" component={Stars} />
    <Route path="/NYI" component={Islanders} />
    <Route path="/FLA" component={Panthers} />
    <Route path="/MIN" component={Wild} />
    <Route path="/EDM" component={Oilers} />
    <Route path="/NYR" component={Rangers} />
    <Route path="/MTL" component={Habs} />
    <Route path="/NSH" component={Preds} />
    <Route path="/LAK" component={Kings} />
    <Route path="/PHI" component={Flyers} />
    <Route path="/OTT" component={Sens} />
    <Route path="/STL" component={Blues} />
    <Route path="/SJS" component={Sharks} />
    <Route path="/PIT" component={Pens} />
    <Route path="/TBL" component={Lightning} />
    <Route path="/WPG" component={Jets} />
    <Route path="/VAN" component={Canucks} />
    <Route path="/WAS" component={Caps} />
    <Route path="/TOR" component={Leafs} />
    <Route path="/VGK" component={Knights} />


</Router>

)
ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
