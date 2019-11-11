import {Injectable} from "@angular/core";
import {User} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null;
  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post('/api/auth/login', user)
      .pipe(
        tap(
          (d) => {
            const token = d['token'];
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }

  registration(user: User){
    return this.http.post('/api/auth/register', user)
      .pipe(
        tap(
          (d) => {
            //
          }
        )
      );
  }
}
