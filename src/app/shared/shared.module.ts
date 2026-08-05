import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features/features.component';
import { SegmentComponent } from './segment/segment.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HeaderComponent } from './header/header.component';

import { FeatherModule } from 'angular-feather';
import {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle, Gitlab, MessageCircle, Play, CheckCircle
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlockQuote1Component } from './block-quote/block-quote1/block-quote1.component';
import { BlockQuote2Component } from './block-quote/block-quote2/block-quote2.component';

import { ReportAnalysisComponent } from './collapse/report-analysis/report-analysis.component';
import { CustomerSlideComponent } from './customer-slide/customer-slide.component';
import { DemoNowComponent } from './demo-now/demo-now.component';
import { BlockQuote3Component } from './block-quote/block-quote3/block-quote3.component';
import { BlockQuote4Component } from './block-quote/block-quote4/block-quote4.component';
import { BlockQuote5Component } from './block-quote/block-quote5/block-quote5.component';
import { CompanyStatisticsComponent } from './company-statistics/company-statistics.component';
import { BlockQuote6Component } from './block-quote/block-quote6/block-quote6.component';
import { BlockQuote7Component } from './block-quote/block-quote7/block-quote7.component';
import { BlockQuote8Component } from './block-quote/block-quote8/block-quote8.component';
import { BlockQuote9Component } from './block-quote/block-quote9/block-quote9.component';
import { FaCollapseComponent } from './collapse/fa-collapse/fa-collapse.component';
import { BlockQuote10Component } from './block-quote/block-quote10/block-quote10.component';
import { BlockQuote11Component } from './block-quote/block-quote11/block-quote11.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle, Gitlab, MessageCircle, Play, CheckCircle
};

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        ScrollToModule.forRoot(),
        FeatherModule.pick(icons),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        FeaturesComponent,
        PricingComponent,
        ContactComponent,
        FooterComponent,
        ScrollspyDirective,
        HeaderComponent,
        SegmentComponent,
        TestimonialComponent,
        BlockQuote1Component,
        BlockQuote2Component,
        BlockQuote3Component,
        BlockQuote4Component,
        BlockQuote5Component,
        BlockQuote6Component,
        BlockQuote7Component,
        BlockQuote8Component,
        BlockQuote9Component,
        BlockQuote10Component,
        BlockQuote11Component,
        ReportAnalysisComponent,
        FaCollapseComponent,
        CustomerSlideComponent,
        CompanyStatisticsComponent,
        DemoNowComponent
    ],
    // tslint:disable-next-line: max-line-length
    exports: [
        FeaturesComponent,
        PricingComponent,
        ContactComponent,
        FooterComponent,
        FeatherModule,
        ScrollspyDirective,
        HeaderComponent,
        SegmentComponent,
        TestimonialComponent,
        BlockQuote1Component,
        BlockQuote2Component,
        BlockQuote3Component,
        BlockQuote4Component,
        BlockQuote5Component,
        BlockQuote6Component,
        BlockQuote7Component,
        BlockQuote8Component,
        BlockQuote9Component,
        BlockQuote10Component,
        BlockQuote11Component,
        ReportAnalysisComponent,
        FaCollapseComponent,
        CustomerSlideComponent,
        CompanyStatisticsComponent,
        DemoNowComponent
    ]
})
export class SharedModule { }
