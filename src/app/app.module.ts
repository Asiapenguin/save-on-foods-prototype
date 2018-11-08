import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalAssistantWelcomeOverlayComponent } from './personal-assistant-welcome-overlay/personal-assistant-welcome-overlay.component';
import { OverlayService } from '../core/overlay.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PersonalAssistantWelcomeOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    OverlayModule
  ],
  entryComponents: [
    PersonalAssistantWelcomeOverlayComponent
  ],
  providers: [
    OverlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
