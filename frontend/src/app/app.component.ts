import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['P. Leo'],
    lastName: ['Nasmus'],
    gender: ['male'],
    genderInt: [0],
    state: [null],
    description: [''],
    information: [''],
  });

  constructor(private fb: FormBuilder) {}

  title = 'agile-times';

  toolbar = `
  <p-header>
  <span class="ql-formats">
    <button class="ql-bold" aria-label="Bold"></button>
    <button class="ql-italic" aria-label="Italic"></button>
    <button class="ql-underline" aria-label="Underline"></button>
    <button class="ql-strike" aria-label="Strike"></button>
  </span>
</p-header>`;

  selectedValue = 'val2';
  // selectedState: City = null;

  states: City[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' },
  ];

  cities1: City[] = [];

  cities2: City[] = [];

  city1: string | null = null;

  city2: string | null = null;

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
    ];
  }
}

interface City {
  name: string;
  code?: string | null;
  value?: string | null;
}
