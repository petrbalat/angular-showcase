import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ngs-adresa [formControlName]',
  template: `
    <div>
      <div class="control">
        <label>
          ulice
        </label>
        <input [value]="model?.ulice ?? ''" (change)="onChange({ulice: $any($event.target).value })" name="ulice" [disabled]="disabled">
      </div>

      <div class="control">
        <label>
          mesto
        </label>
        <input [value]="model?.mesto ?? ''" (change)="onChange({mesto: $any($event.target).value})" name="mesto" [disabled]="disabled">
      </div>

      <div class="control">
        <label>
          psc
        </label>
        <input [value]="model?.psc ?? ''" (change)="onChange({psc: $any($event.target).value})" name="psc" [disabled]="disabled">
      </div>
    </div>
  `,
  styleUrls: ['./adresa.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdresaComponent),
      multi: true
    }
  ]
})
export class AdresaComponent implements OnInit, ControlValueAccessor {

  @Input()
  formControlName!: string;


  constructor() {
  }

  disabled = false;

  model?: any;

  onChange(pathModel: any) {
    this.model = {...(this.model ?? {}), ...pathModel};
    this.onModelChange(this.model);
  }

  onModelChange = (event: any) => {
  }

  onModelTouched = () => {
  }

  registerOnChange(fn: () => void): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onModelTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(val: any): void {
    this.model = val;
  }

  ngOnInit(): void {

  }

}
