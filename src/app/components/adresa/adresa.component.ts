import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ngs-adresa [formControlName][novy]',
  template: `
    <div [title]="novy ? 'nový' : 'editace'">
      <div class="control">
        <label>
          ulice
        </label>
        <input [value]="model?.ulice ?? ''" (change)="onChange({ulice: $any($event.target).value })"
               name="ulice" [disabled]="disabled">
      </div>

      <div class="control">
        <label>
          mesto
        </label>
        <input [value]="model?.mesto ?? ''" (change)="onChange({mesto: $any($event.target).value})"
               name="mesto" [disabled]="disabled">
      </div>

      <div class="control">
        <label>
          psc
        </label>
        <input [value]="model?.psc ?? ''" (change)="onChange({psc: $any($event.target).value})"
               name="psc" [disabled]="disabled">
      </div>

      <p>
        {{model |json}}
      </p>
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
export class AdresaComponent implements ControlValueAccessor, OnInit {

  @Input()
  formControlName!: string;

  @Input()
  novy!: boolean;


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

  writeValue(value: any): void {
    this.model = value;
  }

  ngOnInit(): void {
    if (this.novy) {
      this.onChange({
        ulice: 'Na Pankráci',
        mesto: 'Praha'
      })
    }
  }


}
