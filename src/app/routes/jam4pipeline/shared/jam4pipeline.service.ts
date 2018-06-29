import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Models, TaskType } from "./jam4pipeline.models";

const apiRoot = "https://mlo-public-dev.loandepotdev.works/api/v1";

@Injectable()
export class Jam4pipelineService {
  public tasks$ = new BehaviorSubject<Models.ApiState<Models.Tasks>>({ loading: null, data: null, error: null });
  public users$ = new BehaviorSubject<Models.ApiState<any>>({ loading: null, data: null, error: null });

  constructor(private http: HttpClient) {}

  /**
   * Loans Api interaction
   */
  public tasks = {
    getUnassigned: () => {
      this.tasks$.next({ loading: true, data: null, error: null }); // Loading
      this.http.get<Models.Tasks[]>(apiRoot + "/taskpipeline/tasks/unassigned").subscribe(
        loans => this.tasks$.next({ loading: false, data: loans, error: null }), // Success
        error => this.tasks$.next({ loading: false, data: null, error: error }), // Error
      );
    },
    getAssignedToUser: (userId: string = 'f3d2d332-8a68-4ed4-8ffa-2e54a49f5483') => {
      this.tasks$.next({ loading: true, data: null, error: null }); // Loading
      this.http.get<Models.Tasks[]>(apiRoot + "/taskpipeline/tasks/user/" + userId).subscribe(
        loans => this.tasks$.next({ loading: false, data: loans, error: null }), // Success
        error => this.tasks$.next({ loading: false, data: null, error: error }), // Error
      );
    },
    getCompleted: () => {
      this.tasks$.next({ loading: true, data: null, error: null }); // Loading
      this.http.get<Models.Tasks[]>(apiRoot + "/taskpipeline/tasks/unassigned").subscribe(
        loans => this.tasks$.next({ loading: false, data: loans, error: null }), // Success
        error => this.tasks$.next({ loading: false, data: null, error: error }), // Error
      );
    },
    start: (taskGuid: string) => {
      this.http.post(apiRoot + `/taskpipeline/tasks/${taskGuid}/start`, taskGuid).subscribe(() => {
        this.tasks.getUnassigned();
      });
    },
    followup: (taskGuid: string) => {
      this.http.post(apiRoot + `/taskpipeline/tasks/${taskGuid}/followup`, taskGuid).subscribe(() => {
        this.tasks.getUnassigned();
      });
    },
    finish: (taskGuid: string) => {
      this.http.post(apiRoot + `/taskpipeline/tasks/${taskGuid}/complete`, taskGuid).subscribe(() => {
        this.tasks.getUnassigned();
      });
    },
  };

  /**
   * Users Api interaction
   */
  public users = {
    getAllUsers: () => {
      this.users$.next({ loading: true, data: null, error: null }); // Loading
      this.http.get<any[]>(apiRoot + "/taskpipeline/permissions/user").subscribe(
        users => this.users$.next({ loading: false, data: users, error: null }), // Success
        error => this.users$.next({ loading: false, data: null, error: error }), // Error
      );
    },
    annoy: (data: any) => {
      this.http.post(apiRoot + "/users/annoy", data).subscribe(() => {});
    },
    assign: (data: any) => {
      this.http.post(apiRoot + "/users/assign", data).subscribe(() => {
        this.users.getAllUsers();
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
        this.tasks.start(action.data);
        break;
      case TaskType.followup:
        this.tasks.followup(action.data);
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
