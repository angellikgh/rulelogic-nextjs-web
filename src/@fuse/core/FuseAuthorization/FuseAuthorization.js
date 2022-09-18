import FuseUtils from '@fuse/utils';
import AppContext from 'src/app/AppContext';
import { Component } from 'react';
import { matchRoutes } from 'react-router-dom';
import withRouter from '@fuse/core/withRouter';

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
    const { location, userRole } = props;
    const { pathname } = location;

    const matchedRoutes = matchRoutes(state.routes, pathname);

    const matched = matchedRoutes ? matchedRoutes[0] : false;

    return {
      accessGranted: matched
        ? FuseUtils.hasPermission(matched.route.auth, userRole)
        : true,
    };
  }

  redirectRoute() {
    const { location, userRole } = this.props;

    const pathname = location.pathname;
    const redirectUrl = loginRedirectUrl || this.defaultLoginRedirectUrl;

    if (!userRole || userRole.length === 0) {
      setTimeout(() => location.push('/auth/login'), 0);
      loginRedirectUrl = pathname;
    } else {
      setTimeout(() => location.push(redirectUrl), 0);
      loginRedirectUrl = this.defaultLoginRedirectUrl;
    }
  }

  render() {
    // console.info('Fuse Authorization rendered', this.state.accessGranted);
    return this.state.accessGranted ? <>{this.props.children}</> : null;
  }
}

FuseAuthorization.contextType = AppContext;

export default withRouter(FuseAuthorization);
