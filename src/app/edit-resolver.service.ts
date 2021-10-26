import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditResolverService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = route.params.id;
    return {
      id,
      jmeno: `Uživatel ${id}`,
      adresa: {
        ulice: `Test ${id}`,
        psc: `${id}${id}${id}${id}${id}`
      }
    };
  }
}
