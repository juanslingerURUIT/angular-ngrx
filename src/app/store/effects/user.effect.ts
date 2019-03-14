import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { EUserActions, GetUserPosts, GetUserPostsSuccess, GetUsers, GetUsersSuccess } from '../actions';
import { IPost, IUser, PostService, UserService } from '../../shared';

@Injectable()
export class UserEffects {
	@Effect()
	getUsers$ = this.actions.pipe(
		ofType<GetUsers>(EUserActions.GetUsers),
		switchMap(() => this.userService.getUsers()),
		switchMap((users: IUser[]) => of(new GetUsersSuccess(users)))
	);

	@Effect()
	getUserPosts$ = this.actions.pipe(
		ofType<GetUserPosts>(EUserActions.GetUserPosts),
		map(action => action.payload),
		switchMap(id => this.postService.getPostsByUser(id)),
		switchMap((posts: IPost[]) => of(new GetUserPostsSuccess(posts)))
	);

	constructor(
		private actions: Actions,
		private postService: PostService,
		private userService: UserService
	) {}
}
