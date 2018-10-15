import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import PropsRoute from './components/PropsRoute';
import Home from './views/home.js';
import Article from './views/Article';
import NotFound from './views/NotFound';
import RainBow from './components/RainBow';
import Cover from './components/LoadingCover.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  handleLoading = (value) => {
    this.setState({ loading: value });
  }

  render() {
    const { loading } = this.state;
    return (
      <Router>
        <ScrollToTop>
          <div style={{position: 'relative'}}>
            <RainBow />
            <Switch>
              <PropsRoute exact path="/" component={Home} loading={this.handleLoading} />
              <PropsRoute path="/page" component={Home} loading={this.handleLoading} />
              <PropsRoute path="/tags" component={Home} loading={this.handleLoading} />
              <PropsRoute path="/article/:id" component={Article} loading={this.handleLoading}/>
              <Route component={NotFound} />
            </Switch>
            <Cover show={loading}/>
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App;