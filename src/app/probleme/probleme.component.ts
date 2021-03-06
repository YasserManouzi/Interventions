import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/longueur-minimum/longueur-minimum.composant';
import { ITypeProbleme } from './typesprobleme';
import { TypesproblemeService } from './typesprobleme.service';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;
  typesproblemeProbleme: ITypeProbleme[]
errorMessage: string;
  

  save(): void {
  }
  constructor(private fb:FormBuilder, private typesprobleme: TypesproblemeService) { }

  ngOnInit()  {
   this.problemeForm = this.fb.group
   
    ({
      
      prenom: ['',[VerifierCaracteresValidator.longueurMinimum(3),Validators.required]],
      noTypeProbleme:['',[Validators.required]]
    });
    this.typesprobleme.obtenirTypesprobleme()
    .subscribe(tp => this.typesproblemeProbleme = tp,
               error => this.errorMessage = <any>error);  
  }
  
}
