import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DreamSaverErrorHandler implements ErrorHandler {
  constructor(private toastr: ToastrService) {}

  handleError(thrownError: any): void {
    const config: Partial<IndividualConfig> = {
      positionClass: 'toast-top-center',
      timeOut: 10000,
      progressBar: true,
      progressAnimation: 'decreasing',
    };

    if (thrownError instanceof HttpErrorResponse) {
      if (thrownError.error.UserMessage) {
        this.toastr.error(
          thrownError.error.UserMessage,
          'Någonting gick fel på servern',
          config,
        );
      } else {
        this.toastr.error(
          'Se terminalen för mer information',
          'Någonting gick fel på servern',
          config,
        );
      }
    } else {
      this.toastr.error(
        'Se terminalen för mer information',
        'Någonting gick fel',
        config,
      );
    }
    console.error(thrownError);
  }
}
