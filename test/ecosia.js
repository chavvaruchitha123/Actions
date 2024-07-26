describe('Ecosia.org Demo', function() {
  before(browser => browser.navigateTo('https://www.ecosia.org/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body', 10000) // Increased timeout to 10 seconds
      .getTitle(function(title) {
        console.log('Page title is: ' + title); // Log the page title for debugging
      })
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .waitForElementVisible('.layout__content', 10000) // Ensure the content is visible before asserting
      .assert.textContains('.layout__content', 'Nightwatch.js');
  });

  after(browser => browser.end());
});
