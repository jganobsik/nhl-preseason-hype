import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


import Menu from '../src/Containers/menu'
// Import Team Containers
import Canes from '../src/Containers/Metro/Canes'
import Jackets from '../src/Containers/Metro/Jackets'
import Devils from '../src/Containers/Metro/Devils'
import Islanders from '../src/Containers/Metro/Islanders'
import Rangers from '../src/Containers/Metro/Rangers'
import Flyers from '../src/Containers/Metro/Flyers'
import Pens from '../src/Containers/Metro/Pens'
import Caps from '../src/Containers/Metro/Caps'
import Bruins from '../src/Containers/Atlantic/Bruins'
import Sabres from '../src/Containers/Atlantic/Sabres'
import Wings from '../src/Containers/Atlantic/Wings'
import Panthers from '../src/Containers/Atlantic/Panthers'
import Habs from '../src/Containers/Atlantic/Habs'
import Leafs from '../src/Containers/Atlantic/Leafs'
import Lightning from '../src/Containers/Atlantic/Lightning'
import Sens from '../src/Containers/Atlantic/Sens'
import Hawks from '../src/Containers/Central/Hawks'
import Avs from '../src/Containers/Central/Avs'
import Blues from '../src/Containers/Central/Blues'
import Stars from '../src/Containers/Central/Stars'
import Wild from '../src/Containers/Central/Wild'
import Preds from '../src/Containers/Central/Preds'
import Jets from '../src/Containers/Central/Jets'
import Yotes from '../src/Containers/Pacific/Yotes'
import Flames from '../src/Containers/Pacific/Flames'
import Oilers from '../src/Containers/Pacific/Oilers'
import Kings from '../src/Containers/Pacific/Kings'
import Sharks from '../src/Containers/Pacific/Sharks'
import Canucks from '../src/Containers/Pacific/Canucks'
import Knights from '../src/Containers/Pacific/Knights'
import Ducks from '../src/Containers/Pacific/Ducks'

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
