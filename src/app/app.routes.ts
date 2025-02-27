import { Routes } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
    {path:"reactive-forms",component:ReactiveformsComponent},
    {path:"directives",component:DirectivesComponent}
];
