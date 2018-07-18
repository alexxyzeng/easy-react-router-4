
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ParamsExample = () => (
    <Router>
        <div>
            <h2>Accounts</h2>
            <ul>
                <li>
                    <Link to='/netflix'>Netflix</Link>
                </li>
                <li>
                    <Link to='/zillow-group'>Zilow Group</Link>
                </li>
                <li>
                    <Link to='/yahoo'>Yahoo</Link>
                </li>
                <li>
                    <Link to='/modus-create'>Modus Create</Link>
                </li>
                <hr />
                <li>
                    <Link to='/order/desc'>Order desc</Link>
                </li>
                <li>
                    <Link to='/order/asc'>Order asc</Link>
                </li>
                <li>
                    <Link to='/order/none'>Order none</Link>
                </li>
            </ul>
            <Route path='/:id' component={Child} />
            <Route
                path='/order/:direction(asc|desc)'
                component={ComponentWithRegex} 
            />
        </div>
    </Router>
)

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)

const ComponentWithRegex = ({ match }) => (
    <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
)

export default ParamsExample;