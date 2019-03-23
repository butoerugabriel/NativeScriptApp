"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var application_settings_1 = require("tns-core-modules/application-settings");
var fileReader_service_1 = require("../core/fileReader.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, page, fileReader) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.fileReader = fileReader;
        this.categories = [];
        this.page.actionBarHidden = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    //Read categories from file
    HomeComponent.prototype.getCategories = function () {
        var _this = this;
        this.fileReader.readJSON('/core/questions.json').then(function (res) {
            _this.categories = res["categories"];
            _this.initializeScore();
        }, 
        //print error in case of problems
        function (err) {
            console.log('Error reading json: ' + JSON.stringify(err));
        });
    };
    //Set initial score
    HomeComponent.prototype.initializeScore = function () {
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = application_settings_1.getNumber(this.categories[i].title) || '0';
        }
    };
    //Navigation to the proper quiz page. I also save the righe color to show in the next view
    HomeComponent.prototype.navigateToQuiz = function (index) {
        var navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'backgroundColor': this.categories[index].backgroundColor,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/quiz"], navigationExtras);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            fileReader_service_1.FileReaderService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsZ0NBQStCO0FBQy9CLDhFQUFrRTtBQUNsRSxpRUFBK0Q7QUFRL0Q7SUFJSSx1QkFDWSxnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLFVBQTZCO1FBRjdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBTHpDLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFPbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IscUNBQWEsR0FBYjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQ2pELFVBQUEsR0FBRztZQUNDLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBQ0QsaUNBQWlDO1FBQ2pDLFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELG1CQUFtQjtJQUNuQix1Q0FBZSxHQUFmO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLGdDQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDN0U7SUFDTCxDQUFDO0lBRUQsMEZBQTBGO0lBQzFGLHNDQUFjLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLElBQUksZ0JBQWdCLEdBQUc7WUFDbkIsV0FBVyxFQUFFO2dCQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUs7Z0JBQ3hDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZTtnQkFDekQsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDaEU7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQS9DUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQU1nQyx5QkFBZ0I7WUFDNUIsV0FBSTtZQUNFLHNDQUFpQjtPQVBoQyxhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBnZXROdW1iZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgRmlsZVJlYWRlclNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9maWxlUmVhZGVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGZpbGVSZWFkZXI6IEZpbGVSZWFkZXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldENhdGVnb3JpZXMoKTtcbiAgICB9XG5cbiAgICAvL1JlYWQgY2F0ZWdvcmllcyBmcm9tIGZpbGVcbiAgICBnZXRDYXRlZ29yaWVzKCkge1xuICAgICAgICB0aGlzLmZpbGVSZWFkZXIucmVhZEpTT04oJy9jb3JlL3F1ZXN0aW9ucy5qc29uJykudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzW1wiY2F0ZWdvcmllc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVTY29yZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vcHJpbnQgZXJyb3IgaW4gY2FzZSBvZiBwcm9ibGVtc1xuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyBqc29uOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvL1NldCBpbml0aWFsIHNjb3JlXG4gICAgaW5pdGlhbGl6ZVNjb3JlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmxhc3RTY29yZSA9IGdldE51bWJlcih0aGlzLmNhdGVnb3JpZXNbaV0udGl0bGUpIHx8ICcwJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vTmF2aWdhdGlvbiB0byB0aGUgcHJvcGVyIHF1aXogcGFnZS4gSSBhbHNvIHNhdmUgdGhlIHJpZ2hlIGNvbG9yIHRvIHNob3cgaW4gdGhlIG5leHQgdmlld1xuICAgIG5hdmlnYXRlVG9RdWl6KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgICdjYXRlZ29yeSc6IHRoaXMuY2F0ZWdvcmllc1tpbmRleF0udGl0bGUsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6IHRoaXMuY2F0ZWdvcmllc1tpbmRleF0uYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICdxdWVzdGlvbnMnOiBKU09OLnN0cmluZ2lmeSh0aGlzLmNhdGVnb3JpZXNbaW5kZXhdLnF1ZXN0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9xdWl6XCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG59XG4iXX0=