import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerComponent } from './manager.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    data: { title: 'Dashboard' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
