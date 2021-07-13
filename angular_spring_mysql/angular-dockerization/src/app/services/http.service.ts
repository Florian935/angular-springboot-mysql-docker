import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';


@Injectable()
export class HttpService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.baseUrl}/users`);
  }
}
