import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataForm } from '../models/data-form';



@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(private httpClient: HttpClient) { }

  saveData(form: DataForm): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer xau_3Mx5H39ha8caIPDqYWXwxnUMlV4Qih2M"
    });
    const url = 'https://mohammed-abdelhay-s-workspace-vhgo9u.us-east-1.xata.sh/db/goldenia-waitlist:main/tables/waitlist/data?columns=id';
    const body = JSON.stringify({ data: JSON.stringify(form) });

    return this.httpClient.post(url, body, { headers });
  }
}
