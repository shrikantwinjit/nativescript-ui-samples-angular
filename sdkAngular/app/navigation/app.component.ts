import { Component } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItemService } from "./exampleItemService.service";
import { RouteConfig } from "@angular/router-deprecated";
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import { ControlsListComponent } from "./controls-list/controls-list.component";
import { ExamplesListComponent } from "./examples-list/examples-list.component";
import { ListViewGettingStartedComponent } from "../listview/getting-started/listview-getting-started.component";
import { ListViewHeaderFooterComponent } from "../listview/header-footer/listview-header-footer.component";
import { ListViewItemReorderComponent } from "../listview/item-reorder/listview-item-reorder.component";
import { ListViewItemSelectionComponent } from "../listview/item-selection/listview-item-selection.component";
import { ListViewItemSwipeComponent } from "../listview/item-swipe/listview-item-swipe.component";
import { ListViewLoadOnDemandComponent } from "../listview/load-on-demand/listview-load-on-demand.component";
import { ListViewPullToRefreshComponent } from "../listview/pull-to-refresh/listview-pull-to-refresh.component";
import { SidedrawerGettingStartedComponent } from "../sidedrawer/getting-started/getting-started.component";
import { SidedrawerEventsComponent } from "../sidedrawer/events/events.component";
import { SidedrawerPositionComponent } from "../sidedrawer/position/position.component";
import { SidedrawerTransitionsComponent } from "../sidedrawer/transitions/transitions.component";
import { RadCalendarGettingStartedComponent } from "../calendar/getting-started/calendar-getting-started.component";
import { RadCalendarPopulatingWithDataComponent } from "../calendar/populating-with-data/calendar-populating-with-data.component";
import { RadCalendarProgramaticControlComponent } from "../calendar/programatic-control/calendar-programatic-control.component";
import { RadCalendarViewModesComponent } from "../calendar/view-modes/calendar-view-modes.component";
import { RadCalendarSelectionModesComponent } from "../calendar/selection-modes/calendar-selection-modes.component";

@Component({
  selector: "app",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS, ExampleItemService],
  template: "<page-router-outlet></page-router-outlet>"
})
 @RouteConfig([
  { path: "/controls", component: ControlsListComponent, name: "Controls", useAsDefault: true },
  { path: "/examples", component: ExamplesListComponent, name: "Examples" },
  { path: "/listview-getting-started", component: ListViewGettingStartedComponent, name: "ListviewGettingStarted" },
  { path: "/listview-header-footer", component: ListViewHeaderFooterComponent, name: "ListviewHeaderFooter" },
  { path: "/listview-item-reorder", component: ListViewItemReorderComponent, name: "ListviewItemReorder" },
  { path: "/listview-item-selection", component: ListViewItemSelectionComponent, name: "ListviewItemSelection" },
  { path: "/listview-item-swipe", component: ListViewItemSwipeComponent, name: "ListViewItemSwipe" },
  { path: "/listview-load-on-demand", component: ListViewLoadOnDemandComponent, name: "ListViewLoadOnDemand" },
  { path: "/listview-pull-to-refresh", component: ListViewPullToRefreshComponent, name: "ListViewPullToRefresh" },
  { path: "/sidedrawer-getting-started", component: SidedrawerGettingStartedComponent, name: "SideDrawerGettingStarted" },
  { path: "/sidedrawer-events", component: SidedrawerEventsComponent, name: "SideDrawerEvents" },
  { path: "/sidedrawer-position", component: SidedrawerPositionComponent, name: "SideDrawerPosition" },
  { path: "/sidedrawer-transitions", component: SidedrawerTransitionsComponent, name: "SideDrawerTransitions" },
  { path: "/calendar-getting-started", component: RadCalendarGettingStartedComponent, name: "CalendarGettingStarted" },
  { path: "/calendar-populating-with-data", component: RadCalendarPopulatingWithDataComponent, name: "CalendarPopulatingWithData" },
  { path: "/calendar-programatic-control", component: RadCalendarProgramaticControlComponent, name: "CalendarProgramaticControl" },
  { path: "/calendar-view-modes", component: RadCalendarViewModesComponent, name: "CalendarViewModes" },
  { path: "/calendar-selection-modes", component: RadCalendarSelectionModesComponent, name: "CalendarSelectionModes" },
])
export class AppComponent {

}


// Migration to Angular 2 RC1 'Router'

//import { Component, OnInit } from "@angular/core";
// import { Routes, Router, ROUTER_PROVIDERS } from "@angular/router";
// @Component({
//   selector: "app",
//   directives: [NS_ROUTER_DIRECTIVES],
//   providers: [ROUTER_PROVIDERS, NS_ROUTER_PROVIDERS, ExampleItemService],
//   template: "<page-router-outlet></page-router-outlet>"
// })
// @Routes([
//   { path: "/controls", component: ControlsListComponent },
//   { path: "/examples", component: ExamplesListComponent },
//   { path: "/listview-getting-started", component: ListViewGettingStartedComponent },
//   { path: "/listview-header-footer", component: ListViewHeaderFooterComponent },
//   { path: "/listview-item-reorder", component: ListViewItemReorderComponent },
//   { path: "/listview-item-selection", component: ListViewItemSelectionComponent },
//   { path: "/listview-item-swipe", component: ListViewItemSwipeComponent },
//   { path: "/listview-load-on-demand", component: ListViewLoadOnDemandComponent },
//   { path: "/listview-pull-to-refresh", component: ListViewPullToRefreshComponent },
//   { path: "/sidedrawer-getting-started", component: SidedrawerGettingStartedComponent },
//   { path: "/sidedrawer-events", component: SidedrawerEventsComponent },
//   { path: "/sidedrawer-position", component: SidedrawerPositionComponent },
//   { path: "/sidedrawer-transitions", component: SidedrawerTransitionsComponent },
// ])
// export class AppComponent implements OnInit {
//   constructor(private router: Router) {

//   }
  
//   ngOnInit() {
//     this.router.navigate(['/controls']);
//   }
// }