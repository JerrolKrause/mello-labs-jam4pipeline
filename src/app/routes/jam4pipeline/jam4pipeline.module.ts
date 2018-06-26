import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// 3rd Party Tools
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
import { routing } from './jam4pipeline.routes';

// Routes
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ManagerComponent } from './routes/manager/manager.component';

// Components
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { StateComponent } from './components/state/state.component';

// Services
import { Jam4pipelineService } from './shared/jam4pipeline.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Vendor
    NgbModule.forRoot(),
  ],
  providers: [Jam4pipelineService],
  declarations: [DashboardComponent, ManagerComponent, TasksComponent, UsersComponent, StateComponent],
})
export class Jam4pipelineModule {}
