import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '$shared';

// Home component and routing
import { ManagerComponent } from './manager.component';
import { routing } from './manager.routes';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [ManagerComponent],
  exports: [],
  entryComponents: [],
})
export class ManagerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ManagerModule,
      providers: [],
    };
  }
}
