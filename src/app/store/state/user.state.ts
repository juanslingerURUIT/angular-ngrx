import { IPost, IUser } from '../../shared';

export interface IUserState {
	userPosts: IPost[];
	users: IUser[];
}

export const initialUserState: IUserState = {
	userPosts: null,
	users: null
};
