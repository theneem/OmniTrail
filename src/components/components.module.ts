import { NgModule } from '@angular/core';

import { SearchHeaderComponent } from './search-header/search-header';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [SearchHeaderComponent],
	imports: [IonicPageModule.forChild(SearchHeaderComponent)],
	exports: [SearchHeaderComponent]
})
export class ComponentsModule {}
