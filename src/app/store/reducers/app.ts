import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { configReducers } from './config';
import { userReducers } from './user';
import { IAppState } from '../state';

export const appReducers: ActionReducerMap<IAppState, any> = {
	config: configReducers,
	router: routerReducer,
	users: userReducers
};
