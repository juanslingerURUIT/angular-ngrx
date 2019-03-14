import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ConfigService, UserService } from './services';

@NgModule({
	imports: [CommonModule],
	exports: [CommonModule]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				ConfigService,
				UserService
			]
		}
	}
}
