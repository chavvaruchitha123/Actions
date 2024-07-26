describe('Ecosia.org Demo', function() {
  before(browser => browser.navigateTo('https://www.ecosia.org/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body')
    
      
      
  
      .click('button[type=submit]')
      
  });

  after(browser => browser.end());
});

