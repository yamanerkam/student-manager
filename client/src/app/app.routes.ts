import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StudentCardScreenComponent } from './pages/student-card-screen/student-card-screen.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { NewStudentPageComponent } from './pages/new-student-page/new-student-page.component';
import { SidebarHeadlessDemoComponent } from './sidebar-headless-demo/sidebar-headless-demo.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'todo', component: ToDoComponent },
    { path: 'students', component: StudentCardScreenComponent },
    { path: 'student/:id', component: StudentPageComponent },
    { path:'new-student',component:NewStudentPageComponent},
    { path:'a',component:SidebarHeadlessDemoComponent},
    { path: '**', component: NotFoundComponent },



];
