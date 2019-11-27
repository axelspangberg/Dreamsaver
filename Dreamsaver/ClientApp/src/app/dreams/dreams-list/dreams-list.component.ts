import { Component, OnInit } from '@angular/core';
import { DreamsListService } from './dreams-list.service';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-dreams-list',
  templateUrl: './dreams-list.component.html',
  styleUrls: ['./dreams-list.component.scss']
})
export class DreamsListComponent implements OnInit {

  dreamsList: DreamLists[];
  modalOptions: NgbModalOptions;
  closeResult: string;

  constructor(readonly service: DreamsListService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit(): void {
    this.initDreamsList();
  }

  private initDreamsList() {
    this.service.getDreamLists().subscribe(d => {
      this.dreamsList = d;
    });
  }


    open() {
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = 'I your title';
      modalRef.componentInstance.content = 'I am your content';
  }

}
