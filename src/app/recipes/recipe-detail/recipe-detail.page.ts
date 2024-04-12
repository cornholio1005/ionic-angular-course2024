import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {

  loadedRecipe: Recipe | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private recepiesService: RecipesService,
              private router: Router /*81*/,
              private alertCtrl: AlertController) { }


  ngOnInit() {
    console.log("===RecipeDetailPage ngOnInit()===");
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        //redirect
        this.router.navigate(['/recipes']);//83
        return;
      }
      const recipeId = paramMap.get('recipeId');
      //@ts-ignore
      this.loadedRecipe = this.recepiesService.getRecipe(recipeId!);
      console.log(this.loadedRecipe?.title);
    });
  }
  onDeleteRecipe(){
    this.alertCtrl.create({//82 Injecting Ionic Controllers
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recepiesService.deleteRecipe(this.loadedRecipe?.id!);
          this.router.navigate(['/recipes']);
        }
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    });
    /*this.recepiesService.deleteRecipe(this.loadedRecipe?.id!);
    this.router.navigate(['/recipes']);*/
  }

  ionViewWillEnter(){
    console.log('ionWillEnter');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(): void {
   console.log("class recipe datail page Methond ONDESTROY");
  }
}
