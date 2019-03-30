import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import {ChangeDetectionComponent} from './demos/change-detection/change-detection.component';
import{FormComponent} from './demos/form/form.component';
import { DirectiveComponent } from './demos/directive/directive.component';
import { ComponentCommuniationComponent } from './demos/component-communiation/component-communiation.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { ObservableComponent } from './demos/observable/observable.component';

const routes: Routes = [
    // {
    //     path:''
    // },
    {
        path:'lc',
        component:LifeCycleComponent
    },
    {
        path:'cd',
        component:ChangeDetectionComponent
    },
    {
        path:'f',
        component:FormComponent
    },
    {
        path:'d',
        component:DirectiveComponent
    },
    {
        path:'cc',
        component:ComponentCommuniationComponent
    },
    {
        path:'p',
        component:PipeComponent
    },
    {
        path:'o',
        component:ObservableComponent
    }

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{ }