import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
        <mat-icon>delete</mat-icon>
    </button>
    <mat-checkbox [(ngModel)]="checked">Checked</mat-checkbox>

  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {
  checked = false;

  constructor() { }

  ngOnInit(): void {
  }

}
