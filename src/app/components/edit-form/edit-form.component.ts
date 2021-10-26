import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {filter, map} from "rxjs/operators";

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
    this.route.params.pipe(
      map(it => it.id),
      filter(it => !!it),
      map(id => ({
        id,
        jmeno: `Uživatel ${id}`
      }))
    ).subscribe(person => {
      this.fg.reset(person)
    })

  }

}
