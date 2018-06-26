import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ManagerComponent } from './routes/manager/manager.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'manager',
    component: ManagerComponent,
    data: { title: 'Dashboard' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
