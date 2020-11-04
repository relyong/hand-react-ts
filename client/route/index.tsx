import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { withRouter } from 'react-router';
import Loading from '../component/Loading'
// import { createBrowserHistory } from 'history';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  // HashRouter,
  // BrowserRouter,
} from 'react-router-dom';
import App from '../container/application';
import Movie from './movie';
import Order from './order';
import MemberCenter from './memberCenter';
import Cart from './cart';
import User from './user';
// import AnimatedSwitch from '../component/AnimatedSwitch';

const WrapApp = withRouter(App);
// const browserHistory = createBrowserHistory()

const MyRoute = () => (
  <Router>
    <WrapApp>
      {/* <BrowserRouter> */}
      {/* <HashRouter> */}
      <Switch>
        {/* <AnimatedSwitch> */}
        <Route path='/movie' component={Movie} />
        <Route path='/order' component={Order} />
        <Route path='/memberCenter' component={MemberCenter} />
        <Route path='/cart' component={Cart} />
        <Route path='/user' component={User} />
        <Redirect from='*' to='/movie' />
        {/* </AnimatedSwitch> */}
      </Switch>
      <Loading/>
      {/* </HashRouter> */}
      {/* </BrowserRouter> */}
    </WrapApp>
  </Router>
);

export default hot(MyRoute);
// export default MyRoute;
