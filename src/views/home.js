import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/HomeLayout';

import Side from './Home/components/Side';
import HomeArticles from './HomeArticle';
import TagArchives from './TagArchive';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

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
                <HomeArticles loading={this.handleLoding}/>
              )}
            />
            <Route exact path="/tags" component={TagArchives} />
            <Route path="/tags/:name" component={TagArchives} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

export default Home;

