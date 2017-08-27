import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SectionComponent } from './section/section.component';
import { TitleComponent } from './title/title.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SectionComponent,
    TitleComponent,
    ContactComponent,
    PresentationsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }