import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <section>
      <div class="example-label">components</div>
      <div class="example-row">
        <button mat-fab color="primary" aria-label="Home button">
          <mat-icon>api</mat-icon>
        </button>
        <button mat-raised-button color="warn">This is my button</button>
        <mat-checkbox>Simple Checkbox</mat-checkbox>
      </div>
    </section>
    <mat-divider></mat-divider>
  `,
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
