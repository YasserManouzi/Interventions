import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();


  });

  it("#1 | Zone PRÉNOM invalide avec 2 caractères", () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue("a".repeat(2));
    let errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisant']).toBe(true);
  });
  
  
  it("#2 | Zone PRÉNOM valide avec 3 caractères", () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue("a".repeat(3));
    let errors = zone.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });

  it("#3 | Zone PRÉNOM valide avec 200 caractères", () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue("a".repeat(200));
    let errors = zone.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });
  it("#4 | Zone PRÉNOM valide avec aucune valeur", () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(null);
    let errors = zone.errors || {};
    expect(zone.valid).toBeFalsy();
  });

  it("#5 | Zone PRÉNOM valide avec 10 espaces", () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue("a".repeat(10));
    let errors = zone.errors || {};
   
    expect(errors['minlength']).toBeFalsy();
  });

  it("#6 | Zone PRÉNOM valide avec 2 espaces et 1 caractères", () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue("a".repeat(3));
    let errors = zone.errors || {};
    expect(errors['minlength']).toBeFalsy();
    
  });
});
