import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-office-image',
  templateUrl: './office-image.component.html',
  styleUrls: ['./office-image.component.css']
})
export class OfficeImageComponent implements OnInit {

  @Input()
  imgSrc: string = 'assets/syntel_chennai.jpg';

  @Input()
  altTxt?: string = 'Atos Syntel - Chennai';

  @Input()
  figAddressTxt?: string = 'Plot No. H7 or H8, SIPCOT IT Park, Old Mahabalipuram Road, Navallur Post, Siruseri, Tamil Nadu 603103';

  @Input()
  imgOpacity?: number = 1;

  @Output()
  onImageClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void { }

}
