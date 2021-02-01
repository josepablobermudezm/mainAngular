import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LaunchDetailsGQL } from '../services/spacexGraphql.service';


@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {}

  /*la razón por la que ocupamos el ActivatedRoute
  es nuestra query de graphql toma una ID como su parámetro
  y obtenemos esa ID del url del navegador */

  /* angular nos da todos los URL parametros como un observable que podemos acceder en el Activated.route.paramMap
  cuando tenemos ese observable queremos hacer un switch para un observable de la información de la información de graphql
  finalmente hacemos el map porque no ocupamos la otra informaciíon que nos da la misma app  */

  launchDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.launchDetailsService.fetch({ id })),
    map((res) => res.data.launch)
  );

  ngOnInit(): void {
  }

}
