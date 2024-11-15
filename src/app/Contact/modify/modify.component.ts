import { Component, EventEmitter, Input, OnChanges, Output,  SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IContactReqObj } from '../../app.component';
import { ContactService } from '../../contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.scss'
})
export class ModifyComponent implements OnChanges {
  @Input() module: string = '';
  @Input() ID: number = 0;
  @Input() EditObj: IContactReqObj;
  @Output() GetModule: EventEmitter<string> = new EventEmitter();
  ContactForm: FormGroup;
  constructor(public service: ContactService, public fb: FormBuilder) {
    this.ContactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    
      if (this.module == "Edit"&&this.EditObj != null && this.EditObj != undefined) {
        this.ContactForm.get('firstName').setValue(this.EditObj.firstName);
        this.ContactForm.get('lastName').setValue(this.EditObj.lastName);
        this.ContactForm.get('email').setValue(this.EditObj.email);
      }
   
  }
  Save() {
    if (this.module == 'Edit') {
      if (this.Validate()) {
        this.Edit();
      }
    } else if (this.module == "New") {
      if (this.Validate()) {
        this.Create();
      }
    }
  }
  CreateReqaram(): IContactReqObj {

   return  {
      firstName: this.ContactForm.get('firstName').value,
      lastName: this.ContactForm.get('lastName').value,
      email: this.ContactForm.get('email').value
    }
  }
  Validate(): boolean{
    if (this.ContactForm.valid) {
      return true;
    } else {
      if (this.ContactForm.get('firstName').invalid) {
        alert('First Name is Mandatory!!');

      } else if (this.ContactForm.get('lastName').invalid) {
        alert('Last Name is Mandatory!!');
      } else {
        alert('Invalid email!!');
      }
      return false;
    }
  }
  Create() {
    this.service.Create(this.CreateReqaram()).subscribe({
        next: (data) => {
        this.GetModule.emit('List');
        }, error: (error) => {
          alert(error?.error?.title);
        }
      });
   
  }
  ModuleChange() {

  }
  Edit() {
    this.service.Modify(this.ID,this.CreateReqaram()).subscribe({
      next: (data) => {
        this.GetModule.emit('List');
      }, error: (error) => {
        alert(error?.error?.title);
      }
    });
  }
  Cancel() {
    this.GetModule.emit('List')
  }
}
