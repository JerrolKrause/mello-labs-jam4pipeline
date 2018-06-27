import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// 3rd Party Tools
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule, ModalModule, AlertModule, BsDatepickerModule   } from 'ngx-bootstrap';

// Routing
import { routing } from './jam4pipeline.routes';

// Routes
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ManagerComponent } from './routes/manager/manager.component';

// Components
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { StateComponent } from './components/state/state.component';

// Modals
import { AssignComponent } from './components/modals/assign/assign.component';
import { DocumentUploadComponent } from './components/modals/document-upload/document-upload.component';
import { TasksModalComponent } from './components/modals/tasks-modal/tasks-modal.component';

// Services
import { Jam4pipelineService } from './shared/jam4pipeline.service';
import { ModalsService } from './shared/modals.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Vendor
    TabsModule.forRoot(), ModalModule.forRoot(), AlertModule.forRoot(), BsDatepickerModule.forRoot()
  ],
  providers: [Jam4pipelineService, ModalsService],
  declarations: [
    DashboardComponent,
    ManagerComponent,
    TasksComponent,
    UsersComponent,
    StateComponent,
    AssignComponent,
    DocumentUploadComponent,
    TasksModalComponent
  ],
  entryComponents: [
    AssignComponent,
    DocumentUploadComponent,
    TasksModalComponent
  ]
})
export class Jam4pipelineModule {}
