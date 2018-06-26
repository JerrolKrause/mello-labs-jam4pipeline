export enum TaskType {
  start = 'start',
  followup = 'followup',
  annoy = 'annoy',
  uploadFile = 'uploadFile',
}

export declare namespace Models {
  export interface TaskEvent {
    type: TaskType;
    data: any;
  }

  export interface ApiState<T> {
    loading: boolean;
    data: T[];
    error: any;
  }
}
