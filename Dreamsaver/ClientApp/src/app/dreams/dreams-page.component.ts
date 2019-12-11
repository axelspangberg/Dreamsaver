import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DreamsCreateComponent } from './dreams-create/dreams-create.component';

@Component({
  selector: 'app-dreams-page',
  templateUrl: './dreams-page.component.html',
  styleUrls: ['./dreams-page.component.scss'],
})
export class DreamsPageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DreamsCreateComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
