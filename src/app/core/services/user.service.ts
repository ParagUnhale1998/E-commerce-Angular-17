import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
  
})

export class UserService {

  private baseUrl = environment.userApiUrl;

  constructor(private http: HttpClient) {

  }

  checkUserExists(email: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}`).pipe(
      map(users => users.length > 0 ? users[0] : false)
    );
  }

  createUser(postData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, postData);
  }
}
