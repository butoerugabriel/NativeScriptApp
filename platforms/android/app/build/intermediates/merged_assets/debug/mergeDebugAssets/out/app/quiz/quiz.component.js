"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var application_settings_1 = require("tns-core-modules/application-settings");
var timer_1 = require("timer");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(route, routerExtensions, page) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.page.actionBarHidden = true;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.category = params['category'];
            _this.backgroundColor = params['backgroundColor'];
            _this.questions = JSON.parse(params['questions']);
        });
    };
    // -------------------------- QUIZ ----------------------------
    QuizComponent.prototype.selectAnswer = function (answerIndex, args) {
        var _this = this;
        var option = args.object;
        if (this.questions[this.currentQuestionIndex].correctAnswerIndex == answerIndex) {
            // correct answer
            this.score += 1;
            option.backgroundColor = '#B6EB81';
        }
        else {
            // wrong answer
            option.backgroundColor = '#ff4b60';
        }
        timer_1.setTimeout(function () {
            option.backgroundColor = '#4446FF';
            if (_this.currentQuestionIndex == _this.questions.length - 1) {
                _this.end();
            }
            else {
                _this.currentQuestionIndex += 1;
            }
        }, 500);
    };
    QuizComponent.prototype.saveScore = function () {
        var scorePercentage = Math.round(this.score * 100 / this.questions.length);
        application_settings_1.setNumber(this.category, scorePercentage);
    };
    QuizComponent.prototype.end = function () {
        this.saveScore();
        this.navigateToScore();
    };
    // ------------------------- NAVIGATION -----------------------------
    QuizComponent.prototype.navigateToScore = function () {
        var navigationExtras = {
            queryParams: {
                'score': Math.round(this.score * 100 / this.questions.length)
            }
        };
        this.routerExtensions.navigate(["/score"], navigationExtras);
    };
    QuizComponent.prototype.navigateToPrevious = function () {
        this.routerExtensions.backToPreviousPage();
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: "quiz",
            moduleId: module.id,
            templateUrl: "./quiz.component.html",
            styleUrls: ['./quiz.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.RouterExtensions,
            page_1.Page])
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUMvQiw4RUFBa0U7QUFFbEUsK0JBQW1DO0FBUW5DO0lBVUMsdUJBQ1MsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLElBQVU7UUFGVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFUbkIsY0FBUyxHQUEwRSxFQUFFLENBQUM7UUFFdEYseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFRakIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDaEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELCtEQUErRDtJQUUvRCxvQ0FBWSxHQUFaLFVBQWEsV0FBbUIsRUFBRSxJQUFTO1FBQTNDLGlCQXFCQztRQXBCQSxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxrQkFBa0IsSUFBSSxXQUFXLEVBQUU7WUFDaEYsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1NBQ25DO2FBQ0k7WUFDSixlQUFlO1lBQ2YsTUFBTSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7U0FDbkM7UUFDRCxrQkFBVSxDQUNUO1lBQ0MsTUFBTSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDbkMsSUFBSSxLQUFJLENBQUMsb0JBQW9CLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzRCxLQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDWDtpQkFDSTtnQkFDSixLQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDO2FBQy9CO1FBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0UsZ0NBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQscUVBQXFFO0lBRXJFLHVDQUFlLEdBQWY7UUFDQyxJQUFJLGdCQUFnQixHQUFHO1lBQ3RCLFdBQVcsRUFBRTtnQkFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUM3RDtTQUNELENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQTFFVyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuQyxDQUFDO3lDQVllLHVCQUFjO1lBQ0gseUJBQWdCO1lBQzVCLFdBQUk7T0FiUCxhQUFhLENBNEV6QjtJQUFELG9CQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IHNldE51bWJlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidGltZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcInF1aXpcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9xdWl6LmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL3F1aXouY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFF1aXpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNhdGVnb3J5OiBzdHJpbmc7XG5cdGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXHRxdWVzdGlvbnM6IHsgcXVlc3Rpb246IHN0cmluZywgb3B0aW9uczogc3RyaW5nW10sIGNvcnJlY3RBbnN3ZXJJbmRleDogbnVtYmVyIH1bXSA9IFtdO1xuXG5cdGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIgPSAwO1xuXHRzY29yZTogbnVtYmVyID0gMDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwcml2YXRlIHBhZ2U6IFBhZ2Vcblx0KSB7XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXHRcdFx0dGhpcy5jYXRlZ29yeSA9IHBhcmFtc1snY2F0ZWdvcnknXTtcblx0XHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zWydiYWNrZ3JvdW5kQ29sb3InXVxuXHRcdFx0dGhpcy5xdWVzdGlvbnMgPSBKU09OLnBhcnNlKHBhcmFtc1sncXVlc3Rpb25zJ10pO1xuXHRcdH0pXG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBRVUlaIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRzZWxlY3RBbnN3ZXIoYW5zd2VySW5kZXg6IG51bWJlciwgYXJnczogYW55KSB7XG5cdFx0bGV0IG9wdGlvbiA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuXHRcdGlmICh0aGlzLnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5jb3JyZWN0QW5zd2VySW5kZXggPT0gYW5zd2VySW5kZXgpIHtcblx0XHRcdC8vIGNvcnJlY3QgYW5zd2VyXG5cdFx0XHR0aGlzLnNjb3JlICs9IDE7XG5cdFx0XHRvcHRpb24uYmFja2dyb3VuZENvbG9yID0gJyNCNkVCODEnO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIHdyb25nIGFuc3dlclxuXHRcdFx0b3B0aW9uLmJhY2tncm91bmRDb2xvciA9ICcjZmY0YjYwJztcblx0XHR9XG5cdFx0c2V0VGltZW91dChcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0b3B0aW9uLmJhY2tncm91bmRDb2xvciA9ICcjNDQ0NkZGJztcblx0XHRcdFx0aWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPT0gdGhpcy5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdHRoaXMuZW5kKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCA1MDApXG5cdH1cblxuXHRzYXZlU2NvcmUoKSB7XG5cdFx0bGV0IHNjb3JlUGVyY2VudGFnZSA9IE1hdGgucm91bmQodGhpcy5zY29yZSAqIDEwMCAvIHRoaXMucXVlc3Rpb25zLmxlbmd0aCk7XG5cdFx0c2V0TnVtYmVyKHRoaXMuY2F0ZWdvcnksIHNjb3JlUGVyY2VudGFnZSk7XG5cdH1cblxuXHRlbmQoKSB7XG5cdFx0dGhpcy5zYXZlU2NvcmUoKTtcblx0XHR0aGlzLm5hdmlnYXRlVG9TY29yZSgpO1xuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOQVZJR0FUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0bmF2aWdhdGVUb1Njb3JlKCkge1xuXHRcdGxldCBuYXZpZ2F0aW9uRXh0cmFzID0ge1xuXHRcdFx0cXVlcnlQYXJhbXM6IHtcblx0XHRcdFx0J3Njb3JlJzogTWF0aC5yb3VuZCh0aGlzLnNjb3JlICogMTAwIC8gdGhpcy5xdWVzdGlvbnMubGVuZ3RoKVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zY29yZVwiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG5cdH1cblxuXHRuYXZpZ2F0ZVRvUHJldmlvdXMoKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuXHR9XG5cbn0iXX0=