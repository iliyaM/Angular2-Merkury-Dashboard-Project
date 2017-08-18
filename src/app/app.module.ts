import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';
import { MainContentComponent } from './components/MainContent/MainContent.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ActivityComponent } from './components/activity/activity.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    TasksComponent,
    HeaderComponent,
    NotfoundComponent,
    HomePageComponent,
    MessagesComponent,
    ActivityComponent,
    LineChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomePageComponent},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
