import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../core/fileReader.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    categories: any[] = [];

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private fileReader: FileReaderService
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.getCategories();
    }

    //Read categories from file
    getCategories() {
        this.fileReader.readJSON('/core/questions.json').then(
            res => {
                this.categories = res["categories"];
                this.initializeScore();
            },
            //print error in case of problems
            err => {
                console.log('Error reading json: ' + JSON.stringify(err));
            }
        )
    }

    //Set initial score
    initializeScore() {
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = getNumber(this.categories[i].title) || '0';
        }
    }

    //Navigation to the proper quiz page. I also save the righe color to show in the next view
    navigateToQuiz(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'backgroundColor': this.categories[index].backgroundColor,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/quiz"], navigationExtras);
    }
}
