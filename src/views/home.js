import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layout/HomeLayout';

import Side from './Home/components/Side';
import Article from './HomeArticle';
import Archive from './HomeArchive';

class Home extends React.Component {
  handleLoding = (value) => {
    this.props.loading(value);
  }

  render() {
    return (
      <Layout>
        <Side />
        <div style={{ flexBasis: '75%', position: 'relative' }}>
          <Switch>
            <Route 
              exact path="/"
              render={() => (
                <Redirect to="/page/1" />
              )}
            />
            <Route
              path="/page/:page"
              render={() => (
                <Article loading={this.handleLoding} />
              )}
            />
            <Route exact path="/tags" component={Archive} />
            <Route path="/tags/:name" component={Archive} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

export default Home;

