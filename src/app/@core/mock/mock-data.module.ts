import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { SmartTableService } from './smart-table.service';
import { UserActivityService } from './user-activity.service';
import { OrdersChartService } from './orders-chart.service';
import { ProfitChartService } from './profit-chart.service';
import { TrafficListService } from './traffic-list.service';
import { PeriodsService } from './periods.service';
import { EarningService } from './earning.service';
import { OrdersProfitChartService } from './orders-profit-chart.service';
import { TrafficBarService } from './traffic-bar.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { SolarService } from './solar.service';
import { TrafficChartService } from './traffic-chart.service';
import { StatsBarService } from './stats-bar.service';
import { CountryOrderService } from './country-order.service';
import { StatsProgressBarService } from './stats-progress-bar.service';
import { VisitorsAnalyticsService } from './visitors-analytics.service';
import { SecurityCamerasService } from './security-cameras.service';
import { FetchInitialOrderService } from './fetch-initial-order.service';
import { AddInitialOrderComponent } from '../../pages/merchandizer-module/fetch-initial-order/add-initial-order/add-initial-order.component';
import { LocationService } from './location.service';
import { BuyerService } from './buyer.service';
import { ItemsService } from './items.service';
import { ProductionDeptInfoesService } from './production-dept-infoes.service';
import { OrderinfoService } from './marchandizer/orderinfo.service';
import { PrecostingService } from './marchandizer/precosting.service';
import { PasialFabricBookingService } from './marchandizer/pasial-fabric-booking.service';
import { CompanyService } from './company.service';
import { CountryService } from './country.service';
import { MarchandizerInfoService } from './marchandizer/marchandizer-info.service';
import { ImageUploadService } from './marchandizer/image-upload.service';
import { TeamLeaderInfoService } from './marchandizer/team-leader-info.service';
import { MatDialogService } from './mat-dialog.service';

const SERVICES = [
  UserService,
  ElectricityService,
  SmartTableService,
  UserActivityService,
  OrdersChartService,
  ProfitChartService,
  TrafficListService,
  PeriodsService,
  EarningService,
  OrdersProfitChartService,
  TrafficBarService,
  ProfitBarAnimationChartService,
  TemperatureHumidityService,
  SolarService,
  TrafficChartService,
  StatsBarService,
  CountryOrderService,
  StatsProgressBarService,
  VisitorsAnalyticsService,
  SecurityCamerasService,
  FetchInitialOrderService,
  LocationService,
  BuyerService,
  ItemsService,
  ProductionDeptInfoesService,
  OrderinfoService,
  PrecostingService,
  PasialFabricBookingService,
  CompanyService,
  CountryService,
  MarchandizerInfoService,
  ImageUploadService,
  TeamLeaderInfoService,
  MatDialogService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,AddInitialOrderComponent
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
