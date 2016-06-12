'use strict';

describe('Directive: ngSparkline', function () {

  // load the directive's module
  beforeEach(module('customDirectiveExampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-sparkline></ng-sparkline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngSparkline directive');
  }));
});
