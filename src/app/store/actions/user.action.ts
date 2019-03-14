import { Action } from '@ngrx/store';

import { IPost, IUser } from '../../shared';

export enum EUserActions {
	GetUsers = '[User] Get Users',
	GetUsersSuccess = '[User] Get Users Success',
	GetUserPosts = '[User] Get User Posts',
	GetUserPostsSuccess = '[User] Get User Posts Success'
}

export class GetUserPosts implements Action {
	public readonly type = EUserActions.GetUserPosts;
	constructor(public payload: number) {}
}

export class GetUserPostsSuccess implements Action {
	public readonly type = EUserActions.GetUserPostsSuccess;
	constructor(public payload: IPost[]) {}
}

export class GetUsers implements Action {
	public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
	public readonly type = EUserActions.GetUsersSuccess;
	constructor(public payload: IUser[]) {}
}

export type UserActions = GetUserPosts | GetUserPostsSuccess | GetUsers | GetUsersSuccess;
