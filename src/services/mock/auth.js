import * as api from 'utils/api';
import { validateEmail } from 'utils/Utils';

const AuthService = {
  _url: process.env.NEXT_PUBLIC_BASE_API_URL,

  _validateStringField(field, value) {
    if (typeof value !== 'string' || !value.trim().length)
      throw Error(`${field} is not valid`);
  },

  _validateEmail(email) {
    if (!validateEmail(email)) throw Error(`${email} is not a valid email`);
  },

  _userId(userId) {
    if (typeof userId !== 'undefined') {
      sessionStorage.setItem('userId', userId);

      return;
    }

    return sessionStorage.getItem('userId');
  },

  _token(token) {
    if (typeof token !== 'undefined') {
      sessionStorage.setItem('token', token);

      return;
    }

    return sessionStorage.getItem('token');
  },

  isLoggedIn() {
    const res = !!(this._userId() && this._token());

    return res;
  },

  login(credential) {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          logintoken: 'fake_token',
          party: {
            partypk: '16aa167f-b89d-41fa-8e60-193cf988db6d',
            code: '',
            title: '',
            firstname: 'a',
            lastname: 'a',
            nickname: '',
            company: '',
            login: 'a@a.io',
            password: 'a',
            recordpk: '16aa167f-b89d-41fa-8e60-193cf988db6d',
            email: 'a@a.io',
            mobile: '',
            recordtype: 0,
            recordstatus: '',
            visibility: 0,
            omd: {
              createtimestamp: '1662368443255732',
              updatetimestamp: '1662368443255732',
              effectivefromtimestamp: '1662368443255732',
              effectivetotimestamp: '253402128000000000',
              tags: 'None',
              version: 1,
            },
            issuperuser: false,
            isrecordowner: false,
          },
          loginstatus: 0,
          lastlogindate: 'NotSet',
          loginstatusmessage: 'User user@test.io and password is valid',
          hashedcredentials: '',
          userauthenticated: true,
          issuperuser: false,
        });
      }, 1000);
    });
  },

  register(userInfo) {
    return new Promise((res) => {
      setTimeout(() => {
        res(userInfo);
      }, 1000);
    });
  },

  logout() {
    return Promise.resolve().then(() => {
      sessionStorage.clear();

      return true;
    });
  },

  getProfile() {
    return api.get(`/user/${this._userId()}`).then(({ user }) => user);
  },
};

export default AuthService;
