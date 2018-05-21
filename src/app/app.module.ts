import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { SignupComponent } from './components/signup/signup.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { AlertComponent } from './components/dashboard/alert/alert.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { SalesComponent } from './components/dashboard/sales/sales.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { StubhubComponent } from './components/dashboard/stubhub/stubhub.component';
import { ZoneSectionComponent } from './components/dashboard/zone-section/zone-section.component';
import { DashboardAsideComponent } from './components/blocks/dashboard-aside/dashboard-aside.component';
import { HeaderComponent } from './components/blocks/header/header.component';
import { SubTopHeaderComponent } from './components/blocks/sub-top-header/sub-top-header.component';
import { PageTitleDirective } from './directives/page-title.directive';
import { RouteCssClassDirective } from './directives/route-css-class.directive';
import { SmInputStyleDirective } from './directives/sm-input-style.directive';
import { StubhubPriceRangePipe } from './filters/stubhub-price-range.pipe';
import { StubhubQtyPipe } from './filters/stubhub-qty.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    SignupComponent,
    SubscriptionComponent,
    AlertComponent,
    MainComponent,
    SalesComponent,
    StatsComponent,
    StubhubComponent,
    ZoneSectionComponent,
    DashboardAsideComponent,
    HeaderComponent,
    SubTopHeaderComponent,
    PageTitleDirective,
    RouteCssClassDirective,
    SmInputStyleDirective,
    StubhubPriceRangePipe,
    StubhubQtyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
