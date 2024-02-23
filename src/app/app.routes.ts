import { Routes } from '@angular/router';
import {TranslationResolver} from "./translationResolver";
import {AppComponent} from "./app.component";
import {TestingComponent} from "./testing/testing.component";

export const routes: Routes = [
  {
    path: "",
    component: TestingComponent,
    resolve: [TranslationResolver],
    runGuardsAndResolvers: 'always',
    canActivate: []
  }
];
