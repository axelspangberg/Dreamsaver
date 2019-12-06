import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DreamsService {
  private readonly baseUrl = 'api/dreams';

  constructor(readonly http: HttpClient) {}

  getDreamLists(): Observable<IDream[]> {
    return this.http.get<IDream[]>(this.baseUrl);
  }

  saveDreams(dreamListFields: IDreamRequest): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/save`, dreamListFields);
  }
}
