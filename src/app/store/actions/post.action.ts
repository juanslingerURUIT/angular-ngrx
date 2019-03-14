import { Action } from '@ngrx/store';

import { IComment, IPost } from '../../shared';

export enum EPostActions {
	GetPostComments = '[Post] Get Post Comments',
	GetPostCommentsSuccess = '[Post] Get Post Comments Success',
	GetPosts = '[Post] Get Posts',
	GetPostsSuccess = '[Post] Get Posts Success'
}

export class GetPostComments implements Action {
	public readonly type = EPostActions.GetPostComments;
	constructor(public payload: number) {}
}

export class GetPostCommentsSucess implements Action {
	public readonly type = EPostActions.GetPostCommentsSuccess;
	constructor(public payload: IComment[]) {}
}

export class GetPosts implements Action {
	public readonly type = EPostActions.GetPosts;
}

export class GetPostsSuccess implements Action {
	public readonly type = EPostActions.GetPostsSuccess;
	constructor(public payload: IPost[]) {}
}

export type PostActions = GetPostComments | GetPostCommentsSucess | GetPosts | GetPostsSuccess;
