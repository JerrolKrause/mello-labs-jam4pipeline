import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Jam4pipelineService } from '../../../shared/jam4pipeline.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignComponent implements OnInit {
  public formMain: FormGroup;
  public waiting = false;
  public data: any;
  public submit = false;

  constructor(private fb: FormBuilder, public jamSvc: Jam4pipelineService) { }// , public activeModal: NgbActiveModal

  ngOnInit() {
    // Formgroup
    this.formMain = this.fb.group({
      users: ['', []],
    });
  }

  public filesAdded(file: any) {
    console.log('files', file);
    // this.activeModal.close('Success');
  }

  public assign() {
    // this.activeModal.close('Success');
  }
}
