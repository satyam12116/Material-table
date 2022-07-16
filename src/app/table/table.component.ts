
import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AppService } from '../app.service';

export interface GithubIssue {
  title: string;
  platform:String;
  score:String;
  genre:String;
  editors_choice:String;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  

  displayedColumns: string[] = ['title', 'platform', 'score', 'genre','editors_choice'];
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!:MatTableDataSource<any>;
  constructor(private appService: AppService) { 
   
  }

  ngOnInit(): void {
    this.getData();
  }
  
    
    getData(){
     this.appService.getSampleData().subscribe((res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort=this.sort;
    })
  }
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}