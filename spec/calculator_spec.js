/**
 * Created by sp_farm on 12/2/2014.
 */
describe("Calculator", function () {
	/*  custom matcher */
	var calc, el;
	var async = require('jasmine-async')(jasmine);

	beforeEach(function () {
		el = $('<div>some content</div>');
		$('#container').append(el);
		calc = new Calculator(el);

		jasmine.addMatchers({
			isBetween: function (util, customEqualityTesters) {
				return {
					compare: function (actual, a, b) {
						var result = actual >= a && actual <= b;
						return {
							pass: result,
							message: 'dummy matcher'
						};
					}
				};
			}
		});
	});

	afterEach(function(){
		el.remove();
	});

	async.it('should make the result invisible', function(done){
		var callback = function(){
			expect(el.css('display').toBe('none'));
			done();
		};

		calc.hideResult(callback);
	})
})
;