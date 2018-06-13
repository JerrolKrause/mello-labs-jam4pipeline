import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {

  @Input() loans: any[];
  @Input() manager = false;

  public assignBulk: { [key: string]: boolean } = {};
  public bulkDisabled = true;

  public model: { [key: string]: {dateStarted:string} } = {
    '1': {
      dateStarted:'12/21/2018'
    },
    '2': {
      dateStarted: '12/21/2018'
    },
    '3': {
      dateStarted: '12/21/2018'
    },
    '4': {
      dateStarted: '12/21/2018'
    }
  }

  constructor() { }

  ngOnInit() {
  }

  public start(id: string) {
    this.model[id] = {
      dateStarted: String(new Date())
    }
  } 

  public followup(id: string) {
    console.log(id);
  }

  public fileUploadComplete(lnkey:string) {
    console.log('fileUploadComplete', lnkey);
  }

  public bulkAssignValid(test:any) {
    console.log(test)
    console.log(this.assignBulk);
    let isDisabled = true;
    Object.keys(this.assignBulk).forEach(key => {
      if (this.assignBulk[key]){
        isDisabled = false;
      }
    });
    this.bulkDisabled = isDisabled;

  }

}
