import { loadRemoteModule } from "@angular-architects/module-federation";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShellContainerComponent } from "./components/shell-container/shell-container.component";

const routes: Routes = [
  {path: '', redirectTo: 'apps', pathMatch: 'full'},
  {
    path: "apps",
    component: ShellContainerComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: "http://localhost:4300/remoteEntry.js",
            remoteName: "mfeDashboard",
            exposedModule: "./Module",
          }).then((obj) => {
            return obj.DashboardModule
          }),
      },
      {path: 'profile', redirectTo: ''}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
