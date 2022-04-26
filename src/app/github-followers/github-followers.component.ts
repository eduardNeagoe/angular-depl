import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { combineLatest, switchMap } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'git hub-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private followersService: GithubFollowersService) { }

    ngOnInit(): void {
      combineLatest([
  
        //observables to combinea
        this.activatedRoute.paramMap,
        this.activatedRoute.queryParamMap
      ])
      .pipe(
        switchMap(combined => {
          // from paramMap
          let id = combined[0].get('id');
          //from queryParamMap
          let page = combined[1].get('page'); 
  
          // normally we would use the result of these observables to get data from the server
          // this.followersService.getAll({ id: id, page: page });
          return this.followersService.getFollowers();
        })
      ).subscribe({
        next: (followers) => {
          console.log(followers);
          this.followers = followers;
        }
        // error: 
      });
    }
}
