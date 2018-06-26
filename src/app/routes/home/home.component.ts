import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService, ApiProps } from '$api';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public users$ = this.api.select.users$;
  public usersState$ = this.api.select.getState$(ApiProps.users);

  /** Hold subs for unsub */
  private subs: Subscription[] = [];

  constructor(private api: ApiService) {}

  public ngOnInit() {
    this.api.users.get().subscribe();
  }

  ngOnDestroy() {
    if (this.subs.length) {
      this.subs.forEach(sub => sub.unsubscribe());
    } // Unsub
  }
}
