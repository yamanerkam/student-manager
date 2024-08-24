import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
@Component({
  selector: 'app-sidebar-headless-demo',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule],
  templateUrl: './sidebar-headless-demo.component.html',
})
export class SidebarHeadlessDemoComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e:any): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
