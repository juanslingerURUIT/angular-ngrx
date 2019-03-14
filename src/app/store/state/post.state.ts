import { IComment, IPost } from '../../shared';

export interface IPostState {
	postComments: IComment[];
	posts: IPost[];
}

export const initialPostState : IPostState = {
	postComments: null,
	posts: null
}
