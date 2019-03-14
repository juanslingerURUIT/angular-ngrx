import { IUser } from '../../shared';

export interface IUserState {
	selectedUser: IUser;
	users: IUser[];
}

export const initialUserState: IUserState = {
	selectedUser: null,
	users: null
};
