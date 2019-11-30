import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DreamsListComponent } from './dreams/dreams-list/dreams-list.component';
import { DreamsListCreateComponent } from './dreams/dreams-list/dreams-list-create/dreams-list-create.component';
// tslint:disable-next-line: max-line-length
import { DreamsListDetailedInformationComponent } from './dreams/dreams-list/dreams-list-detailed-information/dreams-list-detailed-information.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/modal/modal.component';
import { DreamSaverErrorHandler } from './shared/error-handler/dreamsaver-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DreamsListComponent,
    DreamsListCreateComponent,
    DreamsListDetailedInformationComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModalModule,
  ],
  entryComponents: [ModalComponent],
  providers: [{ provide: ErrorHandler, useClass: DreamSaverErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
