import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FavoriteButtonComponent } from './shared/components/buttons/favorite-button/favorite-button.component';
import { AuthDirective } from './shared/directives/auth.directive';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { SafePipe } from './shared/pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FavoriteButtonComponent,
    AuthDirective,
    CapitalizePipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LoaderComponent, FavoriteButtonComponent]
})
export class AppModule { }
