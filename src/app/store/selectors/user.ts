import { createSelector } from '@ngrx/store';

import { IAppState, IUserState } from '../state';

const selectUsers = (state: IAppState) => state.users;

export const selectUsersList = createSelector(
	selectUsers,
	(state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
	selectUsers,
	(state: IUserState) => state.selectedUser
);
