import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: any[];
  loading = true;
  error!: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          query getUser {
            allUsers {
              nodes {
                createdAt
                id
                name
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.allUsers?.nodes;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
