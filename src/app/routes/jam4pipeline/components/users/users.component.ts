import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModalsService } from '../../shared/modals.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  @Input() users: any[];

  constructor(public modals: ModalsService) {}

  ngOnInit() {}

  public annoy() {}
}
