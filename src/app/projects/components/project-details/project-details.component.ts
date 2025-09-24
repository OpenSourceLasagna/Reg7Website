import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectDataService } from '../../stores/project-data.service';
import { Project } from "src/app/projects/interfacesAndTypes/project";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectName: any = '';
  project!: Project;

  constructor(private router: Router, private projectData: ProjectDataService) {
  }

  //TODO: pass params

  ngOnInit(): void {
    this.projectName = this.router.url.split('/').pop();
    const projectsMap = this.projectData.projects;
    this.project = projectsMap.get(this.projectName)!;
  }

}
