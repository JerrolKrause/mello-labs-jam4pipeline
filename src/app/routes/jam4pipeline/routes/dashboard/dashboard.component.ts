import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Jam4pipelineService } from '../../shared/jam4pipeline.service';

import { Models } from '../../shared/jam4pipeline.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [Jam4pipelineService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public tasksUser$ = this.jamSvc.tasksUser$;

  constructor(private jamSvc: Jam4pipelineService) {}

  public ngOnInit() {
    this.jamSvc.tasks.getAssignedToUser();
  }

  /**
   * When an action is emitted up from the tasks component
   * @param action
   */
  public action(action: Models.TaskEvent) {
    this.jamSvc.actionTaken(action);
  }
}
