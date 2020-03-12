import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/partials/editor/editor.component';
import { BackendService } from './services/backend.service';
import { ShortcutService } from './services/shortcut.service';
import { TutorialsnippetComponent } from './components/partials/help/tutorialsnippet/tutorialsnippet.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { WmcodeDirective } from './directives/wmcode.directive';
import { WerckmeisterComponent } from './components/pages/werckmeister.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ManualComponent } from './components/pages/manual.component';
import { AutumnLeavesComponent } from './components/pages/examples/autumn.component';
import { IpanemaComponent } from './components/pages/examples/ipanema.component';
import { GettingStartedComponent } from './components/pages/getting-started';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

registerLocaleData(en);
@NgModule({
	declarations: [
		AppComponent,
		EditorComponent,
		TutorialsnippetComponent,
		HeaderComponent,
		WmcodeDirective,
		WerckmeisterComponent,
		ManualComponent,
		AutumnLeavesComponent,
		IpanemaComponent,
		GettingStartedComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgZorroAntdModule,
		BrowserAnimationsModule,
		NgxPageScrollCoreModule,
		NgxPageScrollModule
	],
	providers: [BackendService, ShortcutService, { provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent]
})
export class AppModule { }
