import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent implements OnInit {
 
 //todo esto lo estamos haciendo gracias al código automáticamente generado por graphql code generators
  constructor(private pastLaunchesService: PastLaunchesListGQL) {}

  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 30 })
    .pipe(map((res) => res.data.launchesPast));
    //con el map obtenemos los datos que realmente queremos

  ngOnInit(): void {}
}
