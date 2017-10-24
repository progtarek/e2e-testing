var localStorage = require('../../helpers/localstorage');
var generalHelpers = require('../../helpers/generalHelpers');

describe('angularjs homepage todo list', function () {
  var help = new generalHelpers();
  beforeAll(function () {
    help.goURL('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
  });

  it('check page title', function () {
    expect(browser.getTitle()).toContain('Protractor practice website - Registration');
  });

  it('submit without data', function () {
    element(by.buttonText('Login')).click();
    expect(element(by.linkText('Logout')).getTagName()).toBe('a');
  });

  it('submit with fake username value only', function () {
    element(by.model('Auth.user.name')).clear().sendKeys('tarek');
    element(by.buttonText('Login')).click();
    expect(element(by.linkText('Logout')).getTagName()).toBe('a');
  });

  it('submit with fake username and password values', function () {
    element(by.model('Auth.user.name')).clear().sendKeys('tarek');
    element(by.model('Auth.user.password')).clear().sendKeys('test test');
    element(by.buttonText('Login')).click();
    expect(element(by.linkText('Logout')).getTagName()).toBe('a');
  });

  it('submit with fake data values', function () {
    element(by.model('Auth.user.name')).clear().sendKeys('tarek');
    element(by.model('Auth.user.password')).clear().sendKeys('test test');
    element(by.model('model[options.key]')).clear().sendKeys('hello from the other side');
    element(by.buttonText('Login')).click();
    expect(element(by.linkText('Logout')).getTagName()).toBe('a');
  });


  it('submit with right values', function () {
    element(by.model('Auth.user.name')).clear().sendKeys('angular');
    element(by.model('Auth.user.password')).clear().sendKeys('password');
    element(by.model('model[options.key]')).clear().sendKeys('hello from the other side');
    element(by.buttonText('Login')).click();
    expect(element(by.linkText('Logout')).getTagName()).toBe('a');
    // browser.sleep(4000);
  });











  // it('should add a todo', function () {

  //   // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  //   // element(by.css('[value='add']')).click();
  //   // var todoList = element.all(by.repeater('todo in todoList.todos'));
  //   // expect(todoList.count()).toEqual(3);
  //   // expect(todoList.get(2).getText()).toEqual('write first protractor test');

  //   // // You wrote your first test, cross it off the list
  //   // todoList.get(2).element(by.css('input')).click();
  //   // var completedAmount = element.all(by.css('.done-true'));
  //   // expect(completedAmount.count()).toEqual(2);

  //   browser.sleep(3000);
  // });


});