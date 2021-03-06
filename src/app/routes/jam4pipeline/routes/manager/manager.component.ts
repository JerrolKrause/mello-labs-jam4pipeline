import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Jam4pipelineService } from '../../shared/jam4pipeline.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [Jam4pipelineService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerComponent implements OnInit {
  public tasksUnassigned$ = this.jamSvc.tasksUnassigned$;
  public users$ = this.jamSvc.users$;

  public dateStart: any;
  public dateEnd: any;

  constructor(private jamSvc: Jam4pipelineService) {}

  ngOnInit() {
    this.jamSvc.tasks.getUnassigned();
    this.jamSvc.users.getAllUsers();
  }
}
