import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyC1A2zg-PaimMASGwtyyCPDOfBGnwedhUY",
  authDomain: "sevi-5f77c.firebaseapp.com",
  databaseURL: "https://sevi-5f77c.firebaseio.com",
  projectId: "sevi-5f77c",
  storageBucket: "sevi-5f77c.appspot.com",
  messagingSenderId: "357852414029"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
