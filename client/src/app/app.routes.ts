import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
    { path: 'home', loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent) },
    { path: 'todo', loadComponent: () => import('./pages/to-do/to-do.component').then(m => m.ToDoComponent) },
    { path: 'students', loadComponent: () => import('./pages/student-card-screen/student-card-screen.component').then(m => m.StudentCardScreenComponent) },
    { path: 'student/:id', loadComponent: () => import('./pages/student-page/student-page.component').then(m => m.StudentPageComponent) },
    { path: 'new-student', loadComponent: () => import('./pages/new-student-page/new-student-page.component').then(m => m.NewStudentPageComponent) },
    { path: 'homework', loadComponent: () => import('./pages/homework/homework.component').then(m => m.HomeworkComponent) },
    { path: 'calender', loadComponent: () => import('./pages/calender/calender.component').then(m => m.CalenderComponent) },
    { path: 'finance', loadComponent: () => import('./pages/finance/finance.component').then(m => m.FinanceComponent) },
    { path: 'messages', loadComponent: () => import('./pages/messages/messages.component').then(m => m.MessagesComponent) },
    { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
    { path: 'new-package', loadComponent: () => import('./pages/new-package/new-package.component').then(m => m.NewPackageComponent) },
    { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
