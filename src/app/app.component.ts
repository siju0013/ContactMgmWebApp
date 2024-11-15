import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './Contact/list/list.component';
import { ModifyComponent } from './Contact/modify/modify.component';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListComponent, ModifyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ContactApps';
  moduleType: string = "List";
  id: number = 0;
  editResponeObj: IContactReqObj;
  constructor(public service: ContactService) {
    
  }
  ModuleChange(resp: editResponeObj) {
    this.moduleType = resp.Module;
    this.id = resp.id;
    this.editResponeObj = resp.data;
  }
  EditClick() {
    this.moduleType = "Edit";
  }
  Cancel(val: string) {
    this.moduleType = val;
  }
}
export interface IContactModl {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
export interface IContactReqObj {
  firstName: string;
  lastName: string;
  email: string;
}
export interface editResponeObj {
  id: number;
  Module: string;
  data: IContactReqObj;
}
