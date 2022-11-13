import { Component, Input, OnInit } from '@angular/core';

// TODO: Wenn man das Fenster zwischen lg und md verschiebt springt die Überschrift

@Component({
  selector: 'app-sub-page-img-header',
  templateUrl: './sub-page-img-header.component.html',
  styleUrls: ['./sub-page-img-header.component.scss'],
})
export class SubPageImgHeaderComponent implements OnInit {
  @Input() title:string = '';

  @Input() subTitle?: string;

  @Input() image?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
