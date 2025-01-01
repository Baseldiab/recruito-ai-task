import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';

export const auth = {
  setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, { expires: 7 });
  },
  
  getToken() {
    return Cookies.get(TOKEN_KEY);
  },
  
  removeToken() {
    Cookies.remove(TOKEN_KEY);
  },
  
  isAuthenticated() {
    return !!this.getToken();
  },
};