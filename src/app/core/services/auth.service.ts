import { Injectable, Signal, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState = signal(false); // Initialize with false

  constructor() { 
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.authState.set(true);
    }
  }

  login() {
    this.authState.set(true);
  }

  logout() {
    this.authState.set(false);
    sessionStorage.removeItem('loggedInUser');
  }

  isAuthenticated(): Signal<boolean> {
    return this.authState;
  }

  // private authState = new BehaviorSubject<boolean>(false);
  // authState$: Observable<boolean> = this.authState.asObservable();

  // constructor() { }

  // login() {
  //   this.authState.next(true);
  // }

  // logout() {
  //   this.authState.next(false);
  //   sessionStorage.removeItem('loggedInUser');
  // }

  // isAuthenticated(): Observable<boolean> {
  //   return this.authState$;
  // }

}
/*
  isAuthenticated: boolean;
ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(authState => {
      this.isAuthenticated = authState;
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }*/