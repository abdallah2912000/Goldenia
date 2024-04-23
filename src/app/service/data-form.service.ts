import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataForm } from '../models/data-form';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  private urlApi = "https://mohammed-abdelhay-s-workspace-vhgo9u.us-east-1.xata.sh/db/goldenia-waitlist:main/tables/waitlist/data?columns=id"

  constructor(private httpClient: HttpClient) { }

  saveData(form: DataForm): Observable<DataForm>{
    return this.httpClient.post<DataForm>(this.urlApi, JSON.stringify(form));
  }
}
