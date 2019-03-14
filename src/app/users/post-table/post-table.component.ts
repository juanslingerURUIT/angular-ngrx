import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IPost } from '../../shared';

@Component({
	selector: 'post-table',
	templateUrl: './post-table.component.html'
})
export class PostTableComponent {
	@Input() posts: IPost[];
	@Output() selectedPost = new EventEmitter<number>();

	rowClicked(postId: number): void {
		this.selectedPost.emit(postId);
	}

	trackBy(index: number, item: IPost): number {
		return item.id;
	}
}
