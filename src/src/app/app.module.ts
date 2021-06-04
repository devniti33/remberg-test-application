import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NamesListComponent } from './names-list/names-list.component';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationReducers, APP_FEATURE } from './store/reducers';
import { ApplicationEffects } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NamesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(APP_FEATURE, ApplicationReducers),
    EffectsModule.forFeature(ApplicationEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
