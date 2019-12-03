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
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DreamSaverErrorHandler } from './shared/error-handler/dreamsaver-error-handler';
import { SpinnerComponent } from './shared/spinner/spinner-app/spinner.component';
import { SpinnerOverlayComponent } from './shared/spinner/spinner-overlay/spinner-overlay.component';
import { DreamsCreateComponent } from './dreams/dreams-create/dreams-create.component';
import { DreamsDetailedInformationComponent } from './dreams/dreams-detailed-information/dreams-detailed-information.component';
import { DreamsPageComponent } from './dreams/dreams-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DreamsListComponent,
    DreamsCreateComponent,
    DreamsDetailedInformationComponent,
    SpinnerComponent,
    SpinnerOverlayComponent,
    DreamsPageComponent,
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
  providers: [{ provide: ErrorHandler, useClass: DreamSaverErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
