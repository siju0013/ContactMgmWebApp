import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IContactModl, editResponeObj } from '../../app.component';
import { ContactService } from '../../contact.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [
    HttpClientModule
  ],
})
export class ListComponent implements OnInit, OnDestroy {
  ListData: IContactModl[] = [];
  @Input() module : string = '';
  @Output() getResp: EventEmitter<editResponeObj> = new EventEmitter();
  GetSubscription: Subscription;
  constructor(public service: ContactService) {

  }
  ngOnInit(): void {
    this.GetData();
  }
  GetData() {
    this.GetSubscription=  this.service.GetList().subscribe({
      next: (data: IContactModl[]) => {
        this.ListData = data;
      },
      error: (error: any) => {
        alert(error?.error?.title);
      },
      complete: () => {
        alert('Loaded Completely')
      }
    })
  }
 
  Delete(Id: number) {
    this.service.Delete(Id).subscribe({
      next: (data) => {
        alert('Deleted Successfully');
        this.ListData = data;
      }, error: (error) => {
        alert(error?.error?.title);
      }
    })
  }

  Edit(obj: IContactModl) {
    this.module = "Edit";
    this.getResp.emit({ id: obj.id, Module: this.module, data: { firstName: obj.firstName, lastName: obj.lastName, email: obj.email } });
  }

  ngOnDestroy(): void {
    this.GetSubscription.unsubscribe();
  }
}
