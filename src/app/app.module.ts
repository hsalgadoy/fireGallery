import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { VideoheaderComponent } from './videoheader/videoheader.component';
import { InterectivemapComponent } from './interectivemap/interectivemap.component';
import { TopiconeComponent } from './topicone/topicone.component';
import { ValuechainComponent } from './valuechain/valuechain.component';
import { TopictwooComponent } from './topictwoo/topictwoo.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { TopicthreeComponent } from './topicthree/topicthree.component';
import { PodcastComponent } from './podcast/podcast.component';
import { TopicfouthComponent } from './topicfouth/topicfouth.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { VideogalleryComponent } from './videogallery/videogallery.component';
import { ConclutionsComponent } from './conclutions/conclutions.component';

// 2. Add your credentials from step 1
const firebaseConfig = {
  apiKey: "AIzaSyBCHmL2qgth1SC8mX9IENJP-cDhXYiM7OM",
  authDomain: "firegallery-448d4.firebaseapp.com",
  databaseURL: "https://firegallery-448d4.firebaseio.com",
  projectId: "firegallery-448d4",
  storageBucket: "",
  messagingSenderId: "148670081419",
  appId: "1:148670081419:web:5a93ba794fa1ba91fb278e"
};

@NgModule({
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [ AppComponent, VideoheaderComponent, InterectivemapComponent, TopiconeComponent, ValuechainComponent, TopictwooComponent, PhotogalleryComponent, TopicthreeComponent, PodcastComponent, TopicfouthComponent, GraphicsComponent, VideogalleryComponent, ConclutionsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}