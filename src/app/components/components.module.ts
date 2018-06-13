import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd Party Tools
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Mello Labs Tools
import { ApiToolsModule } from '@mello-labs/api-tools';
import { FormToolsModule } from '@mello-labs/form-tools';

// Components import
import {
  FooterComponent,
  HeaderComponent,
  LayoutMainComponent,
  LayoutSingleComponent,
  NavComponent,
  NavSearchComponent,
  LaunchModalComponent,
} from '$components';

// Modals import
import { ConfirmationModalComponent, LogoutModalComponent, DocumentUploadComponent, AssignComponent, TasksModalComponent } from '$modals';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';

// Models to include
export const APP_MODALS = [ConfirmationModalComponent, LogoutModalComponent, DocumentUploadComponent, AssignComponent, TasksModalComponent];

// Components to include
export const APP_COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  LayoutMainComponent,
  LayoutSingleComponent,
  NavComponent,
  NavSearchComponent,
  LaunchModalComponent,
  TasksComponent,
  UsersComponent,
  ...APP_MODALS,
];

@NgModule({
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Vendor
    NgbModule.forRoot(),

    // Mello Labs Tools
    ApiToolsModule.forRoot(),
    FormToolsModule.forRoot(),
  ],
  providers: [],
  declarations: [APP_COMPONENTS],
  exports: [APP_COMPONENTS, FormsModule, ReactiveFormsModule, NgbModule, ApiToolsModule, FormToolsModule],
  entryComponents: [APP_MODALS],
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: [],
    };
  }
}
