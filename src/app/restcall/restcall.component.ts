import { Component,OnInit } from '@angular/core';

import { UserapiService } from '../userapi.service';

import { IUser } from '../IUser'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrl: './restcall.component.css'
})
export class RestcallComponent {
  protected title = 'app';
  // protected users$: Observable<IUser[]>;
 users$!: IUser[];
   constructor(public _userservice: UserapiService) {}
 
   ngOnInit() {
     this._userservice.getUsers().subscribe(res => {
       this.users$ = res;
     });
   }
  }