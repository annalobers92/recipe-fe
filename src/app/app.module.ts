import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './feature/list-users/list-users.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SaveUserComponent } from './feature/save-user/save-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateIngredientComponent } from './feature/Ingredient/create-ingredient/create-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    SaveUserComponent,
    CreateIngredientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
