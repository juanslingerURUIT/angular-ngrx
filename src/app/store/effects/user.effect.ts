import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { EUserActions, GetUser, GetUserSuccess, GetUsers, GetUsersSuccess } from '../actions';
import { selectUsersList } from '../selectors';
import { IAppState } from '../state';
import { IUser, UserService } from '../../shared';

@Injectable()
export class UserEffects {
	@Effect()
	getUsers$ = this.actions.pipe(
		ofType<GetUsers>(EUserActions.GetUsers),
		switchMap(() => this.userService.getUsers()),
		switchMap((users: IUser[]) => of(new GetUsersSuccess(users)))
	);

	@Effect()
	getUser$ = this.actions.pipe(
		ofType<GetUser>(EUserActions.GetUser),
		map(action => action.payload),
		withLatestFrom(this.store.pipe(select(selectUsersList))),
		switchMap(([id, users]) => {
			const selectedUser = users.filter(user => user.id === +id)[0];
			return of(new GetUserSuccess(selectedUser));
		})
	);

	constructor(
		private actions: Actions,
		private store: Store<IAppState>,
		private userService: UserService) {}
}
