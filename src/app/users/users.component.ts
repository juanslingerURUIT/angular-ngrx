import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { GetUsers } from '../store/actions';
import { selectUsersList } from '../store/selectors';
import { IAppState } from '../store/state';

@Component({
	selector: 'users',
	templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
	usersList$ = this.store.pipe(select(selectUsersList));

	constructor(private store: Store<IAppState>){}

	ngOnInit(): void {
		this.store.dispatch(new GetUsers());
	}
}
