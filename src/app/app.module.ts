import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { SquareComponent } from './tictactoe/square/square.component';
import { BoardComponent } from './tictactoe/board/board.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';



// Gestures
import {
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

/** Import Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig
} from '@alyle/ui';

import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyIconModule } from '@alyle/ui/icon';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyGridModule } from '@alyle/ui/grid';
import { LyMenuModule } from '@alyle/ui/menu';
import { LySliderModule } from '@alyle/ui/slider';


/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { AlyleUIComponent } from './alyle-ui/alyle-ui.component';
import { FlexingComponent } from './flexing/flexing.component';


const firebaseConfig = {
  apiKey: "AIzaSyAFXHo19dNrMMxyfmKBG4oGB37o5ddSDMs",
  authDomain: "primeraapp-38578.firebaseapp.com",
  databaseURL: "https://primeraapp-38578-default-rtdb.firebaseio.com/",
  projectId: "primeraapp-38578",
  storageBucket: "primeraapp-38578.appspot.com",
  messagingSenderId: "578950898605",
  appId: "1:578950898605:web:e1938e05b08c42d9f97724"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactsComponent,
    TodoListComponent,
    SquareComponent,
    BoardComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    AlyleUIComponent,
    FlexingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    GraphQLModule,
    HttpClientModule,
    MatCardModule,
    // Add components
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    LyAvatarModule,
    LyGridModule,
    LyMenuModule,
    LyIconModule,
    LyBadgeModule,
    LySliderModule,
    // ...
    // Gestures
    HammerModule
  ],
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
