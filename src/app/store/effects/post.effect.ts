import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { EPostActions, GetPostComments, GetPostCommentsSucess, GetPosts, GetPostsSuccess } from '../actions';
import { IComment, IPost, PostService } from '../../shared';

@Injectable()
export class PostEffects {
	@Effect()
	getPostComments$ = this.actions.pipe(
		ofType<GetPostComments>(EPostActions.GetPostComments),
		map(action => action.payload),
		switchMap(postId => this.postService.getCommentsByPost(postId)),
		switchMap((comments: IComment[]) => of(new GetPostCommentsSucess(comments)))
	);

	@Effect()
	getPosts$ = this.actions.pipe(
		ofType<GetPosts>(EPostActions.GetPosts),
		switchMap(() => this.postService.getPosts()),
		switchMap((posts: IPost[]) => of(new GetPostsSuccess(posts)))
	);

	constructor(
		private actions: Actions,
		private postService: PostService
	) {}
}
