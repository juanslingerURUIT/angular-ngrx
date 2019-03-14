import { Component, Input } from '@angular/core';

import { IComment } from '../../shared';

@Component({
	selector: 'comment-table',
	templateUrl: './comment-table.component.html'
})
export class CommentTableComponent {
	@Input() comments: IComment[];

	trackBy(index: number, item: IComment): number {
		return item.id;
	}
}
