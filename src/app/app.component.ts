import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { GetConfig } from './store/actions';
import { selectConfig } from './store/selectors';
import { IAppState } from './store/state';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	config$ = this.store.pipe(select(selectConfig));
	title = 'angular-ngrx';

	constructor(private store: Store<IAppState>) {}

	ngOnInit(): void {
		this.store.dispatch(new GetConfig());
	}
}
