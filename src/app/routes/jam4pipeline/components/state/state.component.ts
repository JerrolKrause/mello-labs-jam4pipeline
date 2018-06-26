import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';

import { Models } from '../../shared/jam4pipeline.models';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateComponent implements OnInit {
  @Input() state: Models.ApiState<any>;

  constructor() {}

  ngOnInit() {}
}
