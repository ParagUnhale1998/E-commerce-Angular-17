import { PreloadService } from './services/preload.service';
import { of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export function appInitializer(preloadService: PreloadService) {
  return () => preloadService.preloadData().pipe(
    retry(3),  // Retry the operation up to 3 times
    catchError(error => {
      console.error('Preloading failed after 3 retries', error);
      // Return an empty observable to allow the app to proceed
      return of(null);
    })
  ).subscribe({
    next: (response) => {
      // console.log('Preloaded data:', response);
    },
    error: (error) => {
      console.error('Preloading failed', error);
    }
  });
}
