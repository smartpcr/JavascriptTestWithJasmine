/**
 * Created by sp_farm on 12/2/2014.
 */
var Calculator = function(displayElement){
    this.$el = $(displayElement);
};

Calculator.prototype.hideResult = function(cb){
    this.$el.fadeOut(1000, cb);
};

Calculator.prototype.add = function(a, b){
    $(this.$el).html(a + b);
};

Calculator.prototype.divide = function(a, b){
    $(this.$el).html(a / b);
};