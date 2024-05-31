import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomToastrService } from '../../core/services/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { retry, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
})
export class LoginComponent implements OnInit {
  private readonly GOOGLE_CLIENT_ID = environment.GOOGLE_CLIENT_ID;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private toastrService: CustomToastrService,
    private spinner: NgxSpinnerService,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.initializeGoogleLogin();
  }

  private initializeGoogleLogin(): void {
    google.accounts.id.initialize({
      client_id: this.GOOGLE_CLIENT_ID,
      callback: (response: any) => this.handleLogin(response),
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }

  private decodeToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  private handleLogin(response: any): void {
    if (response && response.credential) {
      this.spinner.show();
      const payload = this.decodeToken(response.credential);

      const userData = {
        name: payload.name,
        email: payload.email,
        profilePic: payload.picture,
        cart: [],
        wishlist: [],
        myOrders: [],
      };

      this.userService
        .checkUserExists(payload.email)
        .pipe(
          retry(3),
          catchError((error) => {
            this.toastrService.showError(
              'Error checking user existence',
              'Error'
            );
            console.error('Error checking user existence:', error);
            this.spinner.hide();
            return of(null);
          })
        )
        .subscribe((user) => {
          if (user) {
            this.handleExistingUser(user);
          } else {
            this.createNewUser(userData);
          }
        });
    }
  }

  private async handleExistingUser(user: any): Promise<void> {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    this.toastrService.showSuccess('Login successful', 'Success');
    this.authService.login();
    this.spinner.hide();
  
    await this.ngZone.run(async () => {
      await this.router.navigate(['/profile']);
    });
  }

  private createNewUser(userData: any): void {
    this.userService
      .createUser(userData)
      .pipe(
        retry(3),
        catchError((error) => {
          this.toastrService.showError('Error creating user', 'Error');
          console.error('Error creating user:', error);
          this.spinner.hide();
          return of(null);
        })
      )
      .subscribe((createdUser) => {
        if (createdUser) {
          this.toastrService.showSuccess(
            'User created successfully',
            'Success'
          );
          sessionStorage.setItem('loggedInUser', JSON.stringify(createdUser));
          this.authService.login();
          this.spinner.hide();
          this.router.navigate(['/profile']);
        }
      });
  }
}

/*
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private toastrService: CustomToastrService,
    private spinner: NgxSpinnerService,


  ) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '413054301258',

      callback: (res: any) => {
        // Handle the callback if needed
        this.handleLogin(res);
      },
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }

  private decodeToker(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(res: any) {
    if (res) {
      this.spinner.show();
      const payload = this.decodeToker(res.credential);
      console.log(payload);

      // sessionStorage.setItem('loggedInUser', JSON.stringify(payload));

      const userData = {
        name: payload.name,
        email: payload.email,
        profilePic: payload.picture,
        cart: [],
        wishlist: [],
        myOrders: [],
      };

      this.userService.checkUserExists(payload.email).subscribe(
        (user) => {
          if (user) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            // console.log('already seccesfull');
            this.toastrService.showSuccess('Login successful', 'Success');

            this.authService.login()
            this.spinner.hide();
            this.router.navigate(['/profile']);
          } else {
            this.userService.createUser(userData).subscribe(
              (createdUser) => {
                this.toastrService.showSuccess('User created successfully', 'Success');
                sessionStorage.setItem(
                  'loggedInUser',
                  JSON.stringify(createdUser)
                );
                this.authService.login();
                this.spinner.hide();
                this.router.navigate(['/profile']);
              },
              (error) => {
                this.toastrService.showError('Error creating user', 'Error');
                this.spinner.hide();
                console.log('error creating user', error);
              }
            );
          }
        },
        (error) => {
          this.toastrService.showError('Error checking user existence', 'Error');
          this.spinner.hide();
          console.error('Error checking user existence:', error);
        }
      );
    }
  }

  // navigateToHome(){
  //   const paylod = {
  //     email_verified: true,
  //     name: "U. PARAG",
  //     picture: "https://lh3.googleusercontent.com/a/ACg8ocKZnw9nJa3c4gsPkg7-EWJVCqFDRBLN_Smm3n44v5RkD2jUta7S=s96-c",
  //     family_name: "PARAG",
  //     exp: 1715786545,
  //   }
  //   sessionStorage.setItem("loggedInUser",JSON.stringify(paylod))
  //   this.router.navigate(['/home'])
  // }
}
*/
