// Module Imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';


// Component Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Service imports 



@NgModule({
	declarations: [
		AppComponent,
  HomeComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FlexLayoutModule,
		FormsModule,
		MatButtonModule,
		MatChipsModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
