import jwtDecode from 'jwt-decode';
import { CurrentUserI } from '@/interfaces/current-user.interface';

export class AuthService {
  private readonly URL = `${process.env.VUE_APP_BACK_URL}auth`;

  private readonly LS_KEY_TOKEN = 'token';

  static instance: AuthService | undefined;

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      this.instance = new AuthService();
    }

    return this.instance as AuthService;
  }

  get currentUser(): CurrentUserI | null {
    const token = localStorage.getItem(this.LS_KEY_TOKEN) || '';
    const decodedToken = jwtDecode<any>(token);
    if (!decodedToken) {
      return null;
    }
    const { id, email } = decodedToken;
    return { id, email };
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  auth(credentials: { email: string, password: string }): Promise<void> {
    return fetch(this.URL, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        const resJson = await res.json();
        if (res.status >= 400 && res.status <= 600) {
          throw resJson;
        }
        return resJson;
      })
      .then(({ token }) => {
        localStorage.setItem(this.LS_KEY_TOKEN, token);
      });
  }
}

export default AuthService.getInstance();
