import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {

  constructor(private http: HttpClient) {}

  preloadData(): Observable<any> {
    return this.http.get(environment.userApiUrl);
  }
}
