import { Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { SearchComponent } from './search/search.component';
import { TestCompComponent } from '../../projects/test-app/test-comp/test-comp.component';


export const routes: Routes = [
    {path:'rxjs-learning',component: RxjsLearningComponent},
    {path:'search',component:SearchComponent},
    {path:'test-comp',component:TestCompComponent}
];
