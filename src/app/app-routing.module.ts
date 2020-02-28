import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EagerLoadedComponent } from './eager-loaded/eager-loaded.component';

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'eager', component: EagerLoadedComponent },
	{
		path: 'lazy',
		loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then((m) => m.LazyLoadedModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
