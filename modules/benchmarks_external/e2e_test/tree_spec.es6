var testUtil = require('../../e2e_test_lib/e2e_test/test_util');

describe('ng1.x tree benchmark', function () {

  var URL = 'benchmarks_external/web/tree/tree_benchmark.html';

  afterEach(testUtil.verifyNoBrowserErrors);

  it('should not throw errors', function() {
    browser.get(URL);
    testUtil.clickAll(['#createDom', '#destroyDom']);
  });

});
