import { Component, OnInit } from '@angular/core';
import { DreamsService } from '../dreams.service';

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.scss'],
})
export class DreamsListComponent implements OnInit {
  dreamsList: IDream[];
  closeResult: string;

  constructor(readonly service: DreamsService) {}

  ngOnInit(): void {
    this.initDreamsList();
  }

  private initDreamsList() {
    this.service.getDreamLists().subscribe(d => {
      this.dreamsList = d;
    });
  }
}
