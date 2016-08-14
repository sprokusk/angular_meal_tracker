System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Meal;
    return {
        setters:[],
        execute: function() {
            Meal = (function () {
                function Meal(name, description, calories, sodium, sugar, id) {
                    this.name = name;
                    this.description = description;
                    this.calories = calories;
                    this.sodium = sodium;
                    this.sugar = sugar;
                    this.id = id;
                    this.healthful = true;
                }
                return Meal;
            }());
            exports_1("Meal", Meal);
        }
    }
});
//# sourceMappingURL=meal.model.js.map