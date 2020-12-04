import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api//employee';
	
	
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.usersUrl);
  }

  public save(user: Employee) {
    return this.http.post<Employee>(`${this.usersUrl}` + `/create`, user);
  }
}