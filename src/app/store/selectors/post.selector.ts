import { createSelector } from '@ngrx/store';

import { IAppState, IPostState } from '../state';

const selectPosts = (state: IAppState) => state.posts;

export const selectPostCommentsList = createSelector(
	selectPosts,
	(state: IPostState) => state.postComments
);

export const selectPostsList = createSelector(
	selectPosts,
	(state: IPostState) => state.posts
);
