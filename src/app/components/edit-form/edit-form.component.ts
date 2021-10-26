import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AdresaComponent} from "../adresa/adresa.component";

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
    })
  }

  ngOnInit(): void {
    //ignore unsubscribe :-)

    const id = this.route.snapshot.params.id;
    if (id) {
      this.fg.reset({
        id,
        jmeno: `Uživatel ${id}`,
        adresa: {
          ulice: `Test ${id}`,
          psc: `${id}${id}${id}${id}${id}`
        }
      })
    } else {
      //norý režim
      this.fg.reset({
        jmeno: `Petr`,
        adresa: AdresaComponent.newModel()
      })
    }

  }

}
