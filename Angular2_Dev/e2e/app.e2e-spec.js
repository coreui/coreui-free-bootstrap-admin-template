describe('QuickStart E2E Tests', function () {
    var expectedMsg = 'My First Angular 2 App';
    beforeEach(function () {
        browser.get('');
    });
    it('should display: ' + expectedMsg, function () {
        expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    });
});
//# sourceMappingURL=app.e2e-spec.js.map