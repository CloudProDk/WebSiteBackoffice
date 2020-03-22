import { Headline } from './../../models/headline.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {

  constructor(private http: HttpClient) { }

  getHeadline1() {
    return this.http
   .get<Headline>('http://cloudprobackofficeapi.azurewebsites.net/api/headline/2').toPromise();
  }

  getHeadline2() {
    return this.http
    .get<Headline>('http://cloudprobackofficeapi.azurewebsites.net/api/headline/3').toPromise();
  }

  updateHeadline(hdline: Headline) {
    this.http
    .put<number>(
      'http://cloudprobackofficeapi.azurewebsites.net/api/headline/' + hdline.id,
      {  title: hdline.title,
         descriptions: hdline.descriptions
       }
     ).subscribe(response => {
       console.log('update headline http response:');
       console.log(response);
     });
  }

}
