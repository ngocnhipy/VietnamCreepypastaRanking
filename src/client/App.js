import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import BangXepHangMember from './BangXepHangMember';
import BangXepHangPost from './BangXepHangPost';
import CachTinhDiem from './CachTinhDiem';
import Page404 from './err404';
import Layout from './layout';
import './style/bootstrap.min.css';
import './style/typography.css';
import './style/style.css';
import './style/responsive.css';
import './style/ionicons.min.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Layout>
          <BangXepHangMember />
        </Layout>
      </Route>

      <Route path="/top-bai-viet" exact>
        <Layout>
          <BangXepHangPost />
        </Layout>
      </Route>

      <Route path="/cach-tinh-diem" exact>
        <Layout>
          <CachTinhDiem />
        </Layout>
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>
  </Router>
);

export default App;
