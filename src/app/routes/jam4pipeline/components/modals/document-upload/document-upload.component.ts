import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Jam4pipelineService } from '../../../shared/jam4pipeline.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentUploadComponent implements OnInit {
  public formMain: FormGroup;
  public waiting = false;
  public data: any;
  public submit = false;

  constructor(private fb: FormBuilder, public jamSvc: Jam4pipelineService) {} // , public activeModal: NgbActiveModal

  ngOnInit() {
    // Formgroup
    this.formMain = this.fb.group({
      files: ['', []],
    });
  }

  public filesAdded(file: any) {
    console.log('files', file);
    // this.activeModal.close('Success');
  }
}
