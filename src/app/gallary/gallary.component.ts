import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {

  imageList: any[] = [ 
    {
    "ID": "1",
    "url": './asset/images/1.jpg'
 },
 {
    "ID": "2",
    "url": './asset/images/2.jpg'
 },
 {
  "ID": "2",
  "url": './asset/images/3.jpg'
} ,
{
  "ID": "2",
  "url": './asset/images/4.jpg'
} ,
{
  "ID": "2",
  "url": './asset/images/5.jpg'
} ,
{
  "ID": "2",
  "url": './asset/images/6.jpg'
}  ];
 

}

