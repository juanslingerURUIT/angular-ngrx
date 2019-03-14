import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IComment, IPost } from '../models';

@Injectable()
export class PostService {
	private url = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private http: HttpClient) {}

	public getPosts(): Observable<IPost[]> {
		return this.http.get<IPost[]>(this.url);
	}

	public getCommentsByPost(postId: number): Observable<IComment[]> {
		return this.http.get<IComment[]>(`${this.url}/${postId}/comments`);
	}

	public getPostsByUser(userId: number): Observable<IPost[]> {
		return this.http.get<IPost[]>(`${this.url}?userId=${userId}`);
	}
}
