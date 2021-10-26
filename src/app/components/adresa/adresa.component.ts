import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngs-adresa',
  template: `
    <div class="control">
      <label>
        ulice
      </label>
      <input formControlName="ulice" name="ulice">
    </div>

    <div class="control">
      <label>
        mesto
      </label>
      <input formControlName="mesto" name="mesto">
    </div>

    <div class="control">
      <label>
        psc
      </label>
      <input formControlName="psc" name="psc">
    </div>
  `,
  styleUrls: ['./adresa.component.sass']
})
export class AdresaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
