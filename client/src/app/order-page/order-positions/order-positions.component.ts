import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PositionsService} from "../../shared/services/positions.service";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {Position} from "../../shared/interfaces";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-order-positions',
  templateUrl: './order-positions.component.html',
  styleUrls: ['./order-positions.component.scss']
})
export class OrderPositionsComponent implements OnInit {
  positions$: Observable<Position[]>;

  constructor(private route: ActivatedRoute,
              private positionService: PositionsService,
              private order: OrderService
              ) { }

  ngOnInit() {
    this.positions$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.positionService.fetch(params['id']);
      }),
      map((positions: Position[]) => {
        return positions.map(position => {
          position._quantity = 1;
          return position;
        });
      })
    );
  }

  addToOrder(position: Position) {
    this.order.add(position);
  }

}
