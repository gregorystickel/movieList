const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/Week_06/Day_2/Lab/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Movie Tests', async () => {

    
    let inputAddMovie = await driver.findElement(By.css('input'))
       
    await inputAddMovie.sendKeys('John Wick\n')
    await inputAddMovie.sendKeys('Jaws\n')
    
    await driver.sleep(2000)

    let crossOutMovie = await driver.findElement(By.css('span'))
    await crossOutMovie.click()
   
    await driver.sleep(2000)
    
    let deletemovie = await driver.findElement(By.id('JohnWick'))
    await deletemovie.click()

    await driver.sleep(2000)
    
})