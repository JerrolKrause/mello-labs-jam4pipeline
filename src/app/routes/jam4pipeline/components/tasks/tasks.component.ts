import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { TaskType, Models } from '../../shared/jam4pipeline.models';
import { Jam4pipelineService } from '../../shared/jam4pipeline.service';
import { ModalsService } from '../../shared/modals.service';

interface Tasks {
  [key: string]: TaskModel;
}

interface TaskModel {
  dateStarted?: string;
  annoy?: boolean;
  dateFollowedUp?: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
  @Input() tasks: Models.Tasks[];
  @Input() manager = false;
  @Input() finished = false;

  @Output() action: EventEmitter<Models.TaskEvent> = new EventEmitter();

  public assignBulk: { [key: string]: boolean } = {};
  public bulkDisabled = true;

  public dateCurrent = Date.now();

  public model: Tasks = {
    '1': {
      dateStarted: '12/21/2018',
    },
    '2': {
      annoy: true,
      dateStarted: '12/21/2018',
      dateFollowedUp: '6/13/18, 12:39 PM',
    },
    '3': {
      dateStarted: '12/21/2018',
    },
    '4': {
      annoy: true,
      dateStarted: '12/21/2018',
      dateFollowedUp: '6/13/18, 12:39 PM',
    },
    '5': {},
    '6': {},
    '7': {},
    '8': {},
    '9': {},
  };

  constructor(public jamSvc: Jam4pipelineService, public modals: ModalsService) {}

  ngOnInit() {}

  public start(id: string) {
    this.model[id] = {
      dateStarted: String(new Date()),
    };
    this.action.emit({ type: TaskType.start, data: null });
  }

  public followup(id: string) {
    this.model[id] = {
      ...this.model[id],
      dateFollowedUp: String(new Date()),
    };
    this.action.emit({ type: TaskType.followup, data: null });
  }

  public annoy(id: string) {
    this.model[id] = {
      ...this.model[id],
      annoy: true,
    };
    this.action.emit({ type: TaskType.annoy, data: null });
  }

  public fileUploadComplete(lnkey: string) {
    console.log('fileUploadComplete', lnkey);
    this.action.emit({ type: TaskType.uploadFile, data: null });
  }

  public bulkAssignValid() {
    let isDisabled = true;
    Object.keys(this.assignBulk).forEach(key => {
      if (this.assignBulk[key]) {
        isDisabled = false;
      }
    });
    this.bulkDisabled = isDisabled;
  }
}
