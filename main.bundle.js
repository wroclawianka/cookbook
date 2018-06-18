webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <app-recipe-book *ngIf=\"loadedFeature === 'recipes'\"></app-recipe-book>\r\n            <app-shopping-list *ngIf=\"loadedFeature === 'shopping-list'\"></app-shopping-list>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // title = 'app';
        this.loadedFeature = 'recipes';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shopping_list_shopping_list_edit_shopping_list_edit_component__ = __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list-edit/shopping-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_recipe_book_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_recipe_book_recipe_list_recipe_item_recipe_item_component__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_recipe_book_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_recipe_book_recipe_book_component__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/components/shared/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_shopping_list_shopping_list_component__["a" /* ShoppingListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shopping_list_shopping_list_edit_shopping_list_edit_component__["a" /* ShoppingListEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_recipe_book_recipe_book_component__["a" /* RecipeBookComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_recipe_book_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_recipe_book_recipe_list_recipe_item_recipe_item_component__["a" /* RecipeItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_recipe_book_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_shared_dropdown_directive__["a" /* DropdownDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__components_shopping_list_shopping_list_service__["a" /* ShoppingListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a href=\"#\" class=\"navbar-brand\">\r\n                <i class=\"fa fa-cutlery\"></i> CookBook\r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a href=\"#\" (click)=\"onSelect('recipes')\">Recipies</a></li>\r\n                <li><a href=\"#\" (click)=\"onSelect('shopping-list')\">Shopping List</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li appDropdown class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">\r\n          Manage Data\r\n          <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Sava Data</a></li>\r\n                        <li><a href=\"#\">Fetch Data</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.featureSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    HeaderComponent.prototype.onSelect = function (featureSelected) {
        this.featureSelected.emit(featureSelected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n        <app-recipe-list></app-recipe-list>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n        <app-recipe-detail \r\n        *ngIf=\"selectedRecipe; else infoText\" \r\n        [recipe]=\"selectedRecipe\">\r\n    </app-recipe-detail>\r\n        <ng-template #infoText>\r\n            <p>Please select the recipe</p>\r\n        </ng-template>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeBookComponent = /** @class */ (function () {
    function RecipeBookComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.recipieSelected.subscribe(function (recipe) { return _this.selectedRecipe = recipe; });
    };
    RecipeBookComponent.prototype.recipeSelected = function (recipe) {
        this.selectedRecipe = recipe;
    };
    RecipeBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-recipe-book',
            template: __webpack_require__("../../../../../src/app/components/recipe-book/recipe-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/recipe-book/recipe-book.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]])
    ], RecipeBookComponent);
    return RecipeBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-detail/recipe-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    max-height: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"img-responsive\">\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h1>{{ recipe.name }}</h1>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div appDropdown class=\"btn-group\">\r\n      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n        Manage Recipe\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\">\r\n        <li>\r\n          <a href=\"#\" (click)=\"addToShoppingList()\">Add to Shopping List</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\">Edit Recipe</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\">Delete Recipe</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    {{ recipe.description }}\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <ul>\r\n      <li class=\"list-group-item\" *ngFor=\"let ingredient of recipe.ingredients\">\r\n        {{ ingredient.name }} - {{ ingredient.amount }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
    };
    RecipeDetailComponent.prototype.addToShoppingList = function () {
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */])
    ], RecipeDetailComponent.prototype, "recipe", void 0);
    RecipeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-recipe-detail',
            template: __webpack_require__("../../../../../src/app/components/recipe-book/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/recipe-book/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list_service__["a" /* ShoppingListService */]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-list/recipe-item/recipe-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.recipe {\r\n    max-width: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-list/recipe-item/recipe-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"list-group-item clearfix\" (click)=onSelected()>\r\n    <div class=\"pull-left\">\r\n        <h4 class=\"list-group-item-heading\">{{recipe.name}}</h4>\r\n        <p class=\"list-group-item-text\">{{recipe.description}}</p>\r\n    </div>\r\n    <span class=\"pull-right\">\r\n      <img \r\n      [src]=\"recipe.imagePath\"\r\n      alt=\"{{recipe.name}}\" \r\n      class=\"img-responsive recipe\">\r\n  </span>\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-list/recipe-item/recipe-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    RecipeItemComponent.prototype.onSelected = function () {
        this.recipeService.recipieSelected.emit(this.recipe);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    RecipeItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-recipe-item',
            template: __webpack_require__("../../../../../src/app/components/recipe-book/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/recipe-book/recipe-list/recipe-item/recipe-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-list/recipe-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.recipe{\r\n    max-width: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <button class=\"btn btn-success\">New Recipe</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <app-recipe-item \r\n        *ngFor=\"let recipeEl of recipies\" \r\n        [recipe]=\"recipeEl\">\r\n    </app-recipe-item>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe-list/recipe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipies = this.recipeService.getRecipies();
    };
    RecipeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-recipe-list',
            template: __webpack_require__("../../../../../src/app/components/recipe-book/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/recipe-book/recipe-list/recipe-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/recipe-book/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/components/recipe-book/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/components/shared/ingredient.model.ts");



var RecipeService = /** @class */ (function () {
    function RecipeService() {
        this.recipieSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.recipies = this.recipies = [
            new __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]('Pierogi ruskie', "filled dumplings of Central European origin\n         made by wrapping unleavened dough around\n         a savory or sweet filling and cooking in boiling water.", 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Pierogi_z_cebulk%C4%85.jpg', [
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Semi-fat white cheese", 0.5),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Potatos", 0.5),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Wheat flour", 0.3),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Egg", 1),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Butter", 0.02),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]('Svíčková na smetaně', "typical Czech dish and one of the most popular Czech meals. It is sirloin steak\n         prepared with vegetables, spiced with black pepper, allspice, bay leaf and thyme,\n         and boiled with double cream.", 
            // tslint:disable-next-line:max-line-length
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG/440px-Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG", [
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Sirloin", 0.75),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Onion", 3),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Butter", 0.02),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Wheat flour", 0.3),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Sour cream", 250),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]("Cranberry", 0.1),
            ]),
        ];
    }
    RecipeService.prototype.getRecipies = function () {
        return this.recipies.slice(); // slice() in this case will return a copy of the array (not a reference)
    };
    return RecipeService;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostBinding */])('class.open'),
        __metadata("design:type", Boolean)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/ingredient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "../../../../../src/app/components/shopping-list/ingredient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    //TODO: add pieces, grams...
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "../../../../../src/app/components/shopping-list/shopping-list-edit/shopping-list-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shopping-list/shopping-list-edit/shopping-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h4>Add new ingredients</h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" id=\"name\" class=\"form-control\" #nameInput>\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n          <label for=\"amount\">Amount</label>\r\n          <input type=\"number\" id=\"amount\" class=\"form-control\" #amountInput>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"onAddItem()\">Add</button>\r\n          <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Clear</button>          \r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shopping-list/shopping-list-edit/shopping-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ingredient_model__ = __webpack_require__("../../../../../src/app/components/shopping-list/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_service__ = __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListEditComponent = /** @class */ (function () {
    function ShoppingListEditComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ShoppingListEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingListEditComponent.prototype.onAddItem = function () {
        var name = this.nameInputRef.nativeElement.value;
        var amount = this.amountInputRef.nativeElement.value;
        var newIngredient = new __WEBPACK_IMPORTED_MODULE_1__ingredient_model__["a" /* Ingredient */](name, amount);
        this.shoppingListService.addIngredient(newIngredient);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('nameInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ShoppingListEditComponent.prototype, "nameInputRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('amountInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ShoppingListEditComponent.prototype, "amountInputRef", void 0);
    ShoppingListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-shopping-list-edit',
            template: __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list-edit/shopping-list-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shopping-list/shopping-list-edit/shopping-list-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shopping_list_service__["a" /* ShoppingListService */]])
    ], ShoppingListEditComponent);
    return ShoppingListEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shopping-list/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-10\">\r\n    <h3>Ingredients</h3>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-10\">\r\n    <app-shopping-list-edit (ingredientAdded)=\"onIngredientAdded($event)\"></app-shopping-list-edit>\r\n    <hr>\r\n    <h4>Current ingredients</h4>\r\n    <ul class=\"list-group\">\r\n      <a class=\"list-group-item\" *ngFor=\"let ingredient of ingredients\">\r\n        {{ ingredient. name }} ({{ ingredient.amount }})\r\n      </a>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChange
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.onIngredientAdded = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    ShoppingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-shopping-list',
            template: __webpack_require__("../../../../../src/app/components/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shopping-list/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ingredient_model__ = __webpack_require__("../../../../../src/app/components/shopping-list/ingredient.model.ts");


var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.ingredients = [
            new __WEBPACK_IMPORTED_MODULE_1__ingredient_model__["a" /* Ingredient */]('Apples', 5),
            new __WEBPACK_IMPORTED_MODULE_1__ingredient_model__["a" /* Ingredient */]('Tomatoes', 10),
        ];
    }
    //TODO: group ingredients with the same name
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice(); //slice() -> copy, not a reference!
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (newIngredients) {
        // this.ingredients = this.ingredients.concat(newIngredients);
        (_a = this.ingredients).push.apply(_a, this.ingredients); //spread!
        this.ingredientsChange.emit(this.ingredients.slice());
        var _a;
    };
    return ShoppingListService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map