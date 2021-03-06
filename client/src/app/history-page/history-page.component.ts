import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MaterialInstance, MaterialService} from "../shared/classes/material.service";
import {OrdersService} from "../shared/services/orders.service";
import {Subscription} from "rxjs";
import {Filter, Order} from "../shared/interfaces";

const STEP = 2;

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tooltip', {static: false}) tooltipRef: ElementRef;
  oSub: Subscription;
  orders: Order[] = [];
  filter: Filter = {};
  tooltip: MaterialInstance;
  isFilterVisible = false;
  offset = 0;
  limit = STEP;
  loading = false;
  reloading = false;
  noMoreOrders = false;
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.reloading = true;
    this.fetch();
  }

  private fetch() {
    const params = Object.assign({}, this.filter, {
      offset: this.offset,
      limit: this.limit
    });
    this.oSub = this.orderService.fetch(params).subscribe( orders => {
      this.orders = this.orders.concat(orders);
      this.loading = false;
      this.noMoreOrders = orders.length < STEP;
       this.reloading = false;
    });
  }

  loadMore() {
    this.offset += STEP;
    this.loading = true;
    this.fetch();
  }

  applyFilter(filter: Filter) {
    this.orders = [];
    this.offset = 0;
    this.filter = filter;
    this.reloading = true;
    this.fetch();
  }

  get isViltered(): boolean {
    return Object.keys(this.filter).length !== 0;
  }

  ngOnDestroy(): void {
    this.tooltip.destroy();
    if (this.oSub) {
      this.oSub.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.tooltip = MaterialService.initTooltip(this.tooltipRef);
  }

}
