import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-tasks-modal',
  templateUrl: './tasks-modal.component.html',
  styleUrls: ['./tasks-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksModalComponent implements OnInit {
  public waiting = false;
  public data: any;
  public submit = false;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  public annoy() {}
}
