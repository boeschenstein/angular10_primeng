import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agile-times';

  selectedState: City = null;

  states: City[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  cities1: City[] = [];

  cities2: City[] = [];

  city1: string|null = null;

  city2: string|null = null;

}

interface City {
  name: string;
  code?: string|null;
  value?: string|null;
}
