const {Builder,By,Key} = require('selenium-webdriver');
require('geckodriver');
async function example()

{

let driver = await new Builder().forBrowser('firefox').build();
var searchString = "Automation testing with Selenium and JavaScript";
await driver.get("http://google.com");

await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
 
//Verify the page title and print it
var title = await driver.getTitle();
console.log('Title is:',title);

//It is always a safe practice to quit the browser after execution
await driver.quit();

}

example();