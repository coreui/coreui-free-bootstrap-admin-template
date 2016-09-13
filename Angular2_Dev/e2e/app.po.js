"use strict";
var CoreUIPage = (function () {
    function CoreUIPage() {
    }
    CoreUIPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    CoreUIPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return CoreUIPage;
}());
exports.CoreUIPage = CoreUIPage;
//# sourceMappingURL=app.po.js.map