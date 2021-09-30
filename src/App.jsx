import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Home from "./views/Home";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
