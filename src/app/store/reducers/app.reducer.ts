import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { configReducers } from './config.reducer';
import { userReducers } from './user.reducer';
import { IAppState } from '../state';

export const appReducers: ActionReducerMap<IAppState, any> = {
	config: configReducers,
	router: routerReducer,
	users: userReducers
};
