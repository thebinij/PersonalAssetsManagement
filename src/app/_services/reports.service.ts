import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../shared/schemas/interface';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  getReports(){
    return this.http.get<Report[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
