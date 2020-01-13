
import { CommonModule } from '@angular/common';
import{merchandizer} from './merchandizer';
import {MatTableModule,MatIconModule, MatButtonModule,
   MatDialogModule, MatSnackBarModule, MatSelectModule, MatNativeDateModule} from '@angular/material';
   import {HttpClientModule} from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbInputModule, 
  NbTreeGridModule ,
  NbCheckboxModule,
  NbDialogModule,
  NbPopoverModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchInitialOrderComponent } from './fetch-initial-order/fetch-initial-order.component';
import { AddInitialOrderComponent } from './fetch-initial-order/add-initial-order/add-initial-order.component';
import { ShowInitialOrderComponent } from './fetch-initial-order/show-initial-order/show-initial-order.component';
import { EditInitialOrderComponent } from './fetch-initial-order/edit-initial-order/edit-initial-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ModalOverlaysRoutingModule } from '../modal-overlays/modal-overlays-routing.module';
import { CountryComponent } from './country/country.component';
import { ShowCountryComponent } from './country/show-country/show-country.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './country/delete-country/delete-country.component';
import { ImageComponent } from './image/image.component';
import { AddImageComponent } from './image/add-image/add-image.component';
import { ShowImageComponent } from './image/show-image/show-image.component';
import { DeleteImageComponent } from './image/delete-image/delete-image.component';
import { EditImageComponent } from './image/edit-image/edit-image.component';
import { TeamleaderComponent } from './teamleader/teamleader.component';
import { AddTeamleaderComponent } from './teamleader/add-teamleader/add-teamleader.component';
import { ShowTeamleaderComponent } from './teamleader/show-teamleader/show-teamleader.component';
import { DeleteTeamleaderComponent } from './teamleader/delete-teamleader/delete-teamleader.component';
import { EditTeamleaderComponent } from './teamleader/edit-teamleader/edit-teamleader.component';
import { MerchandizerComponent } from './merchandizer/merchandizer.component';
import { AddMerchandizerComponent } from './merchandizer/add-merchandizer/add-merchandizer.component';
import { ShowMerchandizerComponent } from './merchandizer/show-merchandizer/show-merchandizer.component';
import { EditMerchandizerComponent } from './merchandizer/edit-merchandizer/edit-merchandizer.component';
import { DeleteMerchandizerComponent } from './merchandizer/delete-merchandizer/delete-merchandizer.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AddBuyerComponent } from './buyer/add-buyer/add-buyer.component';
import { ShowBuyerComponent } from './buyer/show-buyer/show-buyer.component';
import { EditBuyerComponent } from './buyer/edit-buyer/edit-buyer.component';
import { DeleteBuyerComponent } from './buyer/delete-buyer/delete-buyer.component';
import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { ShowLocationComponent } from './location/show-location/show-location.component';
import { DeleteLocationComponent } from './location/delete-location/delete-location.component';
import { EditLocationComponent } from './location/edit-location/edit-location.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { ShowCompanyComponent } from './company/show-company/show-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { DeleteCompanyComponent } from './company/delete-company/delete-company.component';
import { ParsialFabricBookingComponent } from './parsial-fabric-booking/parsial-fabric-booking.component';
import { ShowParsialFabricBookingComponent } from './parsial-fabric-booking/show-parsial-fabric-booking/show-parsial-fabric-booking.component';
import { AddParsialFabricBookingComponent } from './parsial-fabric-booking/add-parsial-fabric-booking/add-parsial-fabric-booking.component';
import { EditParsialFabricBookingComponent } from './parsial-fabric-booking/edit-parsial-fabric-booking/edit-parsial-fabric-booking.component';
import { DeleteParsialFabricBookingComponent } from './parsial-fabric-booking/delete-parsial-fabric-booking/delete-parsial-fabric-booking.component';
import { PreCoastingComponent } from './pre-coasting/pre-coasting.component';
import { ShowPreCoastingComponent } from './pre-coasting/show-pre-coasting/show-pre-coasting.component';
import { AddPreCoastingComponent } from './pre-coasting/add-pre-coasting/add-pre-coasting.component';
import { EditPreCoastingComponent } from './pre-coasting/edit-pre-coasting/edit-pre-coasting.component';
import { DeletePreCoastingComponent } from './pre-coasting/delete-pre-coasting/delete-pre-coasting.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DataTable, DataTableModule } from 'angular5-data-table';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogService } from '../../@core/mock/mat-dialog.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    merchandizer,
    FetchInitialOrderComponent,
    AddInitialOrderComponent,
    ShowInitialOrderComponent,
    EditInitialOrderComponent,
    CountryComponent,
    ShowCountryComponent,
    AddCountryComponent,
    EditCountryComponent,
    DeleteCountryComponent,
    ImageComponent,
    AddImageComponent,
    ShowImageComponent,
    DeleteImageComponent,
    EditImageComponent,
    TeamleaderComponent,
    AddTeamleaderComponent,
    ShowTeamleaderComponent,
    DeleteTeamleaderComponent,
    EditTeamleaderComponent,
    MerchandizerComponent,
    AddMerchandizerComponent,
    ShowMerchandizerComponent,
    EditMerchandizerComponent,
    DeleteMerchandizerComponent,
    BuyerComponent,
    AddBuyerComponent,
    ShowBuyerComponent,
    EditBuyerComponent,
    DeleteBuyerComponent,
    LocationComponent,
    AddLocationComponent,
    ShowLocationComponent,
    DeleteLocationComponent,
    EditLocationComponent,
    CompanyComponent,
    AddCompanyComponent,
    ShowCompanyComponent,
    EditCompanyComponent,
    DeleteCompanyComponent,
    ParsialFabricBookingComponent,
    ShowParsialFabricBookingComponent,
    AddParsialFabricBookingComponent,
    EditParsialFabricBookingComponent,
    DeleteParsialFabricBookingComponent,
    PreCoastingComponent,
    ShowPreCoastingComponent,
    AddPreCoastingComponent,
    EditPreCoastingComponent,
    DeletePreCoastingComponent,
    MatConfirmDialogComponent
    
  ],
  imports: [
   
    HttpClientModule,
    CommonModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NgxEchartsModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule, 
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCheckboxModule,
    NbPopoverModule,
    NbTooltipModule,
    //metarial
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    DataTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule,
    MatSelectModule,
    
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers:[
    MatDialogService
  ],
  entryComponents:[
    AddInitialOrderComponent,AddCompanyComponent,
    MatConfirmDialogComponent,EditInitialOrderComponent
  ]
})
export class MerchandizerModuleModule { }
