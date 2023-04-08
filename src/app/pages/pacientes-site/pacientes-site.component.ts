import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-site',
  templateUrl: './pacientes-site.component.html',
  styleUrls: ['./pacientes-site.component.css']
})
export class PacientesSiteComponent implements OnInit{
  showDatos = false;
  selectedTab = 'datos';
  // ...
  toggleDatos() {
    this.showDatos = !this.showDatos;
  }
  constructor(
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedTab= params['tab']
    });
    
  }
 
selectTab(tab: string) {
  const pacienteId = this.route.snapshot.paramMap.get('id');
  this.selectedTab = tab;
  this.router.navigate(['pacientes-site', pacienteId], { queryParams: {tab}});
}
}
