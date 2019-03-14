import { EUserActions, UserActions } from '../actions';
import { IUserState, initialUserState } from '../state';

export const userReducers = (
	state = initialUserState,
	action: UserActions
): IUserState => {
	switch(action.type) {
		case EUserActions.GetUsersSuccess: {
			return {
				...state,
				users: action.payload
			};
		}
		case EUserActions.GetUserSuccess: {
			return {
				...state,
				selectedUser: action.payload
			};
		}

		default:
			return state;
	}
};
