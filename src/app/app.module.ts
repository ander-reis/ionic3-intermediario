import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CameraListPage} from "../pages/camera-list/camera-list";
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path";
import {SQLite} from "@ionic-native/sqlite";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        CameraPage,
        CameraListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        CameraPage,
        CameraListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        FilePath,
        SQLite,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
