import FuseUtils from '@fuse/utils/FuseUtils';
import { promiseClient } from 'utils/api';
import {
  Party,
  PartyDmlCreateRequest,
  AuthenticateRequest,
} from 'utils/party_pb';
import { AuthDetail } from 'utils/rule_pb';

class AuthService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {};

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const {
          email,
          firstName,
          lastName,
          phoneNumber,
          password,
          companyName,
        } = data;

        const party = new Party();
        party.setLogin(email);
        party.setEmail(email);
        party.setFirstname(firstName);
        party.setLastname(lastName);
        party.setMobile(phoneNumber);
        party.setPassword(password);
        party.setCompany(companyName);

        const createRequest = new PartyDmlCreateRequest();
        createRequest.setParty(party);
        createRequest.setRequestmessage('Creating New Intial User');

        let result = await promiseClient.createRecord(createRequest);
        result = result.toObject();

        if (result.status) {
          this.emit('onSuccess', 'Signed up Successfully');
          resolve(result);
        } else {
          this.emit('onFailed', result.responsetext ?? 'Failed Sign up');
          reject(false);
        }
      } catch (e) {
        this.emit('onFailed', 'Failed Sign up');
        reject(e);
      }
    });
  };

  async signInWithEmailAndPassword(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const authRequest = new AuthenticateRequest();
        authRequest.setLogin(email);
        authRequest.setPassword(password);

        let result = await promiseClient.authenticateUser(authRequest);
        result = result.toObject();

        if (result.userauthenticated) {
          const user = result.party;
          user.role = ['admin'];
          this.setSession(result.logintoken);
          this.setUserInfo(user);
          this.emit('onLogin', user);
          resolve(result);
        } else {
          const message = result.code ?? 'Invalid Login or password';
          this.emit('onFailed', message);
          reject(message);
        }
      } catch (e) {
        this.emit('onFailed', 'Connection Failed');
        reject(e);
      }
    });
  }

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  };

  updateUserData = (user) => {
    // TODO: Make the api call
    return null;
  };

  setSession = (access_token) => {
    if (access_token) {
      sessionStorage.setItem('rc_access_token', access_token);
    } else {
      sessionStorage.removeItem('rc_access_token');
    }
  };

  setUserInfo = (user) => {
    if (user) {
      sessionStorage.setItem('rc_me', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('rc_me');
    }
  };

  logout = () => {
    this.setSession(null);
    this.setUserInfo(null);
    this.emit('onLogout', 'Logged out');
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.sessionStorage.getItem('rc_access_token');
  };

  getUserInfo = () => {
    const me = window.sessionStorage.getItem('rc_me');

    if (!me) return {};

    return JSON.parse(me);
  };

  getAuthDetail() {
    const me = this.getUserInfo();
    const token = this.getAccessToken();

    if (!me) return;

    const authDetail = new AuthDetail();
    authDetail.setLogin(me.login);
    authDetail.setPartypk(me.recordpk);
    authDetail.setToken(token);
    return authDetail;
  }
}

const instance = new AuthService();

export default instance;
