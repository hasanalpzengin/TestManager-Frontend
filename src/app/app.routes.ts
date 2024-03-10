import { ProjectsComponent } from './projects/projects.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
    { path: "projects", component: ProjectsComponent, title: "Projects"}
];
