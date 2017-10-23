var localStorage = require('../../helpers/localstorage');
var generalHelpers = require('../../helpers/generalHelpers');

describe('angularjs homepage todo list', function () {
  var help = new generalHelpers();
  beforeAll(function () {
    help.goURL('https://angularjs.org');

  });

  it('should add a todo', function () {

      element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      element(by.css('[value="add"]')).click();
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write first protractor test');

      // You wrote your first test, cross it off the list
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).toEqual(2);

      browser.sleep(3000);
  });
});