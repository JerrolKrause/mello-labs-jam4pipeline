import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService, ApiProps } from '$api';
import { UIStoreService } from '$ui';

@Component({
  selector: 'app-manager',
  styleUrls: ['./manager.component.scss'],
  templateUrl: './manager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerComponent implements OnInit, OnDestroy {
  public users$ = this.api.select.users$;
  public usersState$ = this.api.select.getState$(ApiProps.users);

  public dateStart: any;
  public dateEnd: any;

  /** Hold subs for unsub */
  private subs: Subscription[] = [];

  constructor(private api: ApiService, public ui: UIStoreService) {}

  public ngOnInit() {
    // Get users and load into store
    this.api.users.get().subscribe();
  }

  ngOnDestroy() {
    if (this.subs.length) {
      this.subs.forEach(sub => sub.unsubscribe());
    } // Unsub
  }
}
