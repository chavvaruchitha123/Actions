describe('Ecosia.org Demo', function() {
  before(browser => browser.navigateTo('https://www.ecosia.org/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body', 10000) // Increased timeout to 10 seconds
      .getTitle(function(title) {
        console.log('Page title is: ' + title); // Log the page title for debugging
      })
      
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
    
     
  });

  after(browser => browser.end());
});
