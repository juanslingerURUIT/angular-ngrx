import { EPostActions, PostActions } from '../actions';
import { IPostState, initialPostState } from '../state';

export const postReducers = (
	state = initialPostState,
	action: PostActions
): IPostState => {
	switch(action.type) {
		case EPostActions.GetPostCommentsSuccess: {
			return {
				...state,
				postComments: action.payload
			}
		}

		case EPostActions.GetPostsSuccess: {
			return {
				...state,
				posts: action.payload
			}
		}

		default:
			return state;
	}
};
