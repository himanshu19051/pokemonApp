import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabEnums } from 'src/app/enum/App.enum';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  @Input() profileData:any;
  @Output() activeTab = new EventEmitter<TabEnums>();

  openEvolution(){
    this.activeTab.emit(TabEnums.EVOLUTION);
  }
}
