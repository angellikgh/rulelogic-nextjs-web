import Router from 'next/router';
import FuseUtils from '@fuse/utils';
import AppContext from 'src/app/AppContext';
import { Component } from 'react';
import { matchRoutes } from 'react-router-dom';
import withRouter from '@fuse/core/withRouter';
import FuseSplashScreen from '../FuseSplashScreen';

let loginRedirectUrl = null;

class FuseAuthorization extends Component {
  constructor(props, context) {
    super(props);
    const { routes } = context;
    this.state = {
      accessGranted: true,
      routes,
    };
    this.defaultLoginRedirectUrl = props.loginRedirectUrl || '/';
  }

  componentDidMount() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { location, user } = props;
    const { pathname } = location;

    const matchedRoutes = matchRoutes(state.routes, pathname);

    const matched = matchedRoutes ? matchedRoutes[0] : false;

    return {
      accessGranted: matched
        ? FuseUtils.hasPermission(matched.route.auth, user.role)
        : true,
    };
  }

  redirectRoute() {
    const { location, user } = this.props;

    const pathname = location.pathname;
    const redirectUrl = loginRedirectUrl || this.defaultLoginRedirectUrl;

    if (!user || !user.recordpk) {
      loginRedirectUrl = pathname;
      Router.push('/account/sign-in');
    } else {
      loginRedirectUrl = this.defaultLoginRedirectUrl;
      Router.push(redirectUrl);
    }
  }

  render() {
    return this.state.accessGranted ? (
      <>{this.props.children}</>
    ) : (
      <FuseSplashScreen />
    );
  }
}

FuseAuthorization.contextType = AppContext;

export default withRouter(FuseAuthorization);
