import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Models, TaskType } from './jam4pipeline.models';

const apiRoot = '/api/v2';

@Injectable()
export class Jam4pipelineService {
  public loans$ = new BehaviorSubject<Models.ApiState<any>>({ loading: null, data: null, error: null });
  public users$ = new BehaviorSubject<Models.ApiState<any>>({ loading: null, data: null, error: null });


  constructor(private http: HttpClient) { }

  

  /**
   * Loans Api interaction
   */
  public loans = {
    getAll: () => {
      this.loans$.next({ loading: true, data: null, error: null }); // Loading
      this.http.get<any[]>(apiRoot + '/loans').subscribe(
        loans => this.loans$.next({ loading: false, data: loans, error: null }), // Success
        error => this.loans$.next({ loading: false, data: null, error: error }), // Error
      );
    },
    start: (data: any) => {
      this.http.post(apiRoot + '/loans/start', data).subscribe(() => {
        this.loans.getAll();
      });
    },
    followup: (data: any) => {
      this.http.post(apiRoot + '/loans/followup', data).subscribe(() => {
        this.loans.getAll();
      });
    },
    finish: (data: any) => {
      this.http.post(apiRoot + '/loans/finish', data).subscribe(() => {
        this.loans.getAll();
      });
    },
  };

  /**
   * Users Api interaction
   */
  public users = {
    getAll: () => {
      this.users$.next({ loading: true, data: null, error: null }); // Loading
      this.http.get<any[]>(apiRoot + '/users').subscribe(
        users => this.users$.next({ loading: false, data: users, error: null }), // Success
        error => this.users$.next({ loading: false, data: null, error: error }), // Error
      );
    },
    annoy: (data: any) => {
      this.http.post(apiRoot + '/users/annoy', data).subscribe(() => {});
    },
    assign: (data: any) => {
      this.http.post(apiRoot + '/users/assign', data).subscribe(() => {
        this.users.getAll();
      });
    },
  };

  /**
   * When an action is taken from a task
   * @param action - Type of action taken based on TaskType enum
   */
  public actionTaken(action: Models.TaskEvent) {
    switch (action.type) {
      case TaskType.start:
        this.loans.start(action.data);
        break;
      case TaskType.followup:
        this.loans.followup(action.data);
        break;
      case TaskType.annoy:
        this.users.annoy(action.data);
        break;
      case TaskType.uploadFile:
        // Do something
        break;
    }
  }
}
