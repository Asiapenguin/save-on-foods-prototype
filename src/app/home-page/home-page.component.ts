import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayService } from '../../core/overlay.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
    this.overlayService.open()
  }
}
