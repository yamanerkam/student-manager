import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'todo', component: ToDoComponent },
    { path: '**', component: NotFoundComponent },


];
