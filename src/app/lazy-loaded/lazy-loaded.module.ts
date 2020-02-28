import { NgModule } from '@angular/core';
import { LazyLoadedComponent } from './lazy-loaded.component';
import { LazyLoadedRoutingModule } from './lazy-loaded.routing.module';

@NgModule({
	declarations: [ LazyLoadedComponent ],
	imports: [ LazyLoadedRoutingModule ]
})
export class LazyLoadedModule {}
