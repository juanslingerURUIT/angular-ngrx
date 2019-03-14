import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EConfigActions, GetConfig, GetConfigSuccess } from '../actions';
import { ConfigService, IConfig } from '../../shared';

@Injectable()
export class ConfigEffects {
	@Effect()
	getConfig$ = this.actions.pipe(
		ofType<GetConfig>(EConfigActions.GetConfig),
		switchMap(() => this.configService.getConfig()),
		switchMap((config: IConfig) => of(new GetConfigSuccess(config)))
	);

	constructor(private configService: ConfigService, private actions: Actions) {}
}
