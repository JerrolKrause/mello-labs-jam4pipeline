import { Injectable } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// Modals
import { AssignComponent } from '../components/modals/assign/assign.component';
import { DocumentUploadComponent } from '../components/modals/document-upload/document-upload.component';
import { TasksModalComponent } from '../components/modals/tasks-modal/tasks-modal.component';


@Injectable()
export class ModalsService {

  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }


  /**
   * Open a modal window
   * @param modal Which modal to open
   * @param data Data to pass to the modal
   */
  public openModalWithComponent(modal: 'assign' | 'upload' | 'tasks', data: any) {
    const initialState = {
      data: data,
      title: 'Modal with component'
    };
    let component;
    switch (modal) {
      case 'assign':
        component = AssignComponent;
        break;
      case 'upload':
        component = DocumentUploadComponent;
        break;
      case 'tasks':
        component = TasksModalComponent;
        break;
    }

    this.bsModalRef = this.modalService.show(component, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
