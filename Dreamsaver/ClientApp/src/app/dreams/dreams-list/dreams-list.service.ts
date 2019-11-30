import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DreamsListService {
  private readonly baseUrl = 'api/dreams';

  constructor(readonly http: HttpClient) {}

  getDreamLists(): Observable<DreamLists[]> {
    return this.http.get<DreamLists[]>(this.baseUrl);
  }

  // Template for post

  // saveTransmitterFields(transmitterModelFrields: TransmitterTemplateForm): Observable<number> {
  //   return this.http.post<number>(
  //     `${this.baseUrl}/save-transmitter-template-fields`,
  //     transmitterModelFrields
  //   );
  // }
}
