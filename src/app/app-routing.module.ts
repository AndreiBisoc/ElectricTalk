import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./cars/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./cars/add-car/add-car.module').then( m => m.AddCarPageModule)
  },
  {
    path: 'edit-car',
    loadChildren: () => import('./cars/edit-car/edit-car.module').then( m => m.EditCarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./chat/forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./chat/add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'topics',
    loadChildren: () => import('./chat/topics/topics.module').then( m => m.TopicsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./chat/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'stations',
    loadChildren: () => import('./stations/stations.module').then( m => m.StationsPageModule)
  },
  {
    path: 'edit-account',
    loadChildren: () => import('./auth/edit-account/edit-account.module').then( m => m.EditAccountPageModule)
  },
  {
    path: 'add-topic',
    loadChildren: () => import('./chat/add-topic/add-topic.module').then( m => m.AddTopicPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
