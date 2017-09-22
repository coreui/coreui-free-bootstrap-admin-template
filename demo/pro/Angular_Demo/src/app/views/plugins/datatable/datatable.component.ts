import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'datatable.component.html'
})
export class DataTableComponent {

  public data;
  public filterQuery = '';

  constructor(private http:Http) {
    http.get('data.json')
      .subscribe((data)=> {
        setTimeout(()=> {
          this.data = data.json();
        }, 2000);
      });
  }

  public toInt(num:string) {
    return +num;
  }

  public sortByWordLength = (a:any) => {
    return a.name.length;
  }
}
