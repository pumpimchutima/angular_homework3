import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework3';

  userActiveTab: boolean = true;
  workspaceActiveTab:boolean = false;

  clickTab(nameTab:string){

    if(nameTab==='user'){
      this.userActiveTab=true;
      this.workspaceActiveTab=false;
    }else if(nameTab==='workspace'){
      this.userActiveTab=false;
      this.workspaceActiveTab=true;
    }

  }
}
