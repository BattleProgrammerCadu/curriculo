import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { ExpComponent } from './exp/exp.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AwardsComponent,
    EducationComponent,
    ExpComponent,
    InterestsComponent,
    SkillsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
