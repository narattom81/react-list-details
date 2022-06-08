import React, { Component } from "react";
import {BrowserRouter, HashRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import CampaignComponent from "./Campaign/Campaign";
import CampaignListComponent from "./Campaign/Components/CampaignList";
import "./styles.css";

/**
 * https://stackoverflow.com/questions/65623708/how-to-create-list-and-detail-view-using-react-router-dom
 */

const Admin = () => (
  <div className="campaign-container">
    <div className="campaign-list">
      <Route path="/admin/campaigns">
        <CampaignListComponent />
      </Route>
    </div>
    <div className="campaign-detail">
      <Switch>
        <Route path="/admin/campaigns" component={CampaignComponent} />
        <Redirect from="*" to="/admin/campaigns" />
      </Switch>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Sample app to demonstrate React Router issue</h3>
        {/*<HashRouter>*/}
          <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route>Home page</Route>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
