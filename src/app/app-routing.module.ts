import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {EditFormComponent} from "./components/edit-form/edit-form.component";
import {EditResolverService} from "./edit-resolver.service";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'edit', component: EditFormComponent},
  {path: 'edit/:id', component: EditFormComponent, resolve: {osoba: EditResolverService}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
