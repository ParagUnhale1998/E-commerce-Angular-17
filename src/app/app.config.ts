import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HashLocationStrategy, IMAGE_CONFIG, LocationStrategy } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { PreloadService } from './core/services/preload.service';
import { appInitializer } from './core/app-init';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(),
  provideAnimations(),  
  provideToastr({timeOut: 1000, // Set the time to 1 second
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  }),
  { provide: LocationStrategy, useClass: HashLocationStrategy,  },
  {
     provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    }, PreloadService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [PreloadService],
      multi: true
    }
  ]
};
