import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IUser } from '../../shared';

@Component({
	selector: 'user-table',
	templateUrl: './user-table.component.html'
})
export class UserTableComponent {
	@Input() users: IUser[];
	@Output() selectedUser = new EventEmitter<number>();

	rowClick(id: number): void {
		this.selectedUser.emit(id);
	}

	trackUser(index: number, item: IUser): number {
		return item.id;
	}
}
