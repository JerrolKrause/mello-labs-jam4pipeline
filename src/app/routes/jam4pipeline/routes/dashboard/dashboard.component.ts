import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Jam4pipelineService } from "../../shared/jam4pipeline.service";

import { Models } from "../../shared/jam4pipeline.models";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [Jam4pipelineService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public tasks$ = this.jamSvc.tasks$;

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
// https://mlo-public-dev.loandepotdev.works/api/v1/taskpipeline/tasks/user/f3d2d332-8a68-4ed4-8ffa-2e54a49f5483
// https://mlo-public-dev.loandepotdev.works/api/v1/taskpipeline/tasks/user/f3d2d332-8a68-4ed4-8ffa-2e54a49f5483
