import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AdresaComponent} from "../adresa/adresa.component";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.sass']
})
export class EditFormComponent implements OnInit {

  readonly fg: FormGroup;

  constructor(builder: FormBuilder, private readonly route: ActivatedRoute) {
    this.fg = builder.group({
      id: [],
      jmeno: [],
      prijmeni: [],
      adresa: [],
    });


    //ignore unsubscribe :-)
    route.data
      .pipe(
        map(it => it.osoba)
      )
      .subscribe(model => this.fg.reset(model))
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (!id) {
      //norý režim
      this.fg.reset({
        jmeno: `Petr`,
        adresa: AdresaComponent.newModel()
      })
    }

  }

}
