import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../shared';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/data-grid/', '_json');
}

import { GridBasicComponent, gridBasicExampleConfig } from './examples/basic';
import {
  GridLoadingStatusComponent,
  gridLoadingStatusExampleConfig,
} from './examples/loading-status';
import {
  GridHidePaginationComponent,
  gridHidePaginationExampleConfig,
} from './examples/hide-pagination';
import { GridSortableComponent, gridSortableExampleConfig } from './examples/sortable';
import {
  GridRowSelectableComponent,
  gridRowSelectableExampleConfig,
} from './examples/row-selectable';
import {
  GridExpandableRowComponent,
  gridExpandableRowExampleConfig,
} from './examples/expandable-row';
import {
  GridColumnHidingMovingComponent,
  gridColumnHidingMovingExampleConfig,
} from './examples/column-hiding-moving';
import {
  GridColumnPinnableComponent,
  gridColumnPinnableExampleConfig,
} from './examples/column-pinnable';
import { GridHoverStripedComponent, gridHoverStripedExampleConfig } from './examples/hover-striped';
import {
  GridRowWithButtonsComponent,
  gridRowWithButtonsExampleConfig,
} from './examples/row-with-buttons';
import {
  GridCustomCellTemplateComponent,
  gridCustomCellTemplateExampleConfig,
} from './examples/custom-cell-template';
import {
  GridCustomCellTemplate2Component,
  gridCustomCellTemplate2ExampleConfig,
} from './examples/custom-cell-template-2';
import {
  GridDataFormattingComponent,
  gridDataFormattingExampleConfig,
} from './examples/data-formatting';
import { GridNoResultComponent, gridNoResultExampleConfig } from './examples/no-result';
import {
  GridCustomHeaderTemplateComponent,
  gridCustomHeaderTemplateExampleConfig,
} from './examples/custom-header-template';
import {
  GridCustomFooterTemplateComponent,
  gridCustomFooterTemplateExampleConfig,
} from './examples/custom-footer-template';
import {
  GridCustomToolbarTemplateComponent,
  gridCustomToolbarTemplateExampleConfig,
} from './examples/custom-toolbar-template';
import { GridI18nComponent, gridI18nExampleConfig } from './examples/i18n';
import { GridRemoteDataComponent, gridRemoteDataExampleConfig } from './examples/remote-data';
import { GridColumnResizeComponent, gridColumnResizeExampleConfig } from './examples/column-resize';
import {
  GridRowColumnClassComponent,
  gridRowColumnClassExampleConfig,
} from './examples/row-column-class';

@Component({
  selector: 'app-grid-overview',
  templateUrl: './grid-overview.html',
})
export class GridOverviewComponent {
  constructor(public route: ActivatedRoute) {}
}

@Component({
  selector: 'app-grid-api',
  templateUrl: './grid-api.html',
})
export class GridApiComponent {
  constructor(public route: ActivatedRoute) {}
}

@NgModule({
  imports: [
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forChild([
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: GridOverviewComponent,
        pathMatch: 'full',
        data: {
          examples: [
            gridBasicExampleConfig,
            gridColumnResizeExampleConfig,
            gridLoadingStatusExampleConfig,
            gridHidePaginationExampleConfig,
            gridSortableExampleConfig,
            gridRowSelectableExampleConfig,
            gridExpandableRowExampleConfig,
            gridColumnHidingMovingExampleConfig,
            gridColumnPinnableExampleConfig,
            gridHoverStripedExampleConfig,
            gridRowWithButtonsExampleConfig,
            gridCustomCellTemplateExampleConfig,
            gridCustomCellTemplate2ExampleConfig,
            gridDataFormattingExampleConfig,
            gridRowColumnClassExampleConfig,
            gridNoResultExampleConfig,
            gridCustomHeaderTemplateExampleConfig,
            gridCustomFooterTemplateExampleConfig,
            gridCustomToolbarTemplateExampleConfig,
            gridI18nExampleConfig,
            gridRemoteDataExampleConfig,
          ],
        },
      },
      {
        path: 'api',
        component: GridApiComponent,
        pathMatch: 'full',
        data: {
          content: require('!!raw-loader!!highlight-loader!markdown-loader!./grid.md'),
        },
      },
      { path: '**', redirectTo: 'overview' },
    ]),
  ],
  declarations: [
    GridOverviewComponent,
    GridApiComponent,

    GridBasicComponent,
    GridColumnResizeComponent,
    GridLoadingStatusComponent,
    GridHidePaginationComponent,
    GridSortableComponent,
    GridRowSelectableComponent,
    GridExpandableRowComponent,
    GridColumnHidingMovingComponent,
    GridColumnPinnableComponent,
    GridHoverStripedComponent,
    GridRowWithButtonsComponent,
    GridCustomCellTemplateComponent,
    GridCustomCellTemplate2Component,
    GridDataFormattingComponent,
    GridRowColumnClassComponent,
    GridNoResultComponent,
    GridCustomHeaderTemplateComponent,
    GridCustomFooterTemplateComponent,
    GridCustomToolbarTemplateComponent,
    GridI18nComponent,
    GridRemoteDataComponent,
  ],
})
export class GridModule {}
