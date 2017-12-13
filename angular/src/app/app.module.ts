import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminService } from './admin.service';
import { NgxPopperModule } from 'ngx-popper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopperModule,
    NgbModule.forRoot()
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
