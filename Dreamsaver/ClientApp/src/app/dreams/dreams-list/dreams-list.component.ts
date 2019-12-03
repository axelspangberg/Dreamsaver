import { Component, OnInit } from '@angular/core';
import { DreamsListService } from './dreams-list.service';

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.scss'],
})
export class DreamsListComponent implements OnInit {
  dreamsList: DreamLists[];
  closeResult: string;

  constructor(readonly service: DreamsListService) {}

  ngOnInit(): void {
    this.initDreamsList();
  }

  private initDreamsList() {
    this.service.getDreamLists().subscribe(d => {
      this.dreamsList = d;
    });
  }
}
