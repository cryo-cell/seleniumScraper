const {Builder, By, Key} = require('selenium-webdriver')
let productArr = []
let pdfArr = []
async function getOverlayLinks() {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 10000 });

        //try {
          await driver.get('https://trulieve.com/');

          let remember = await driver.findElement(By.xpath('//*[@id="av_terms_checkbox"]'))
          await remember.click()
          let yes = await driver.findElement(By.xpath('//*[@id="modal_content_wrapper"]/div[4]/button[1]'))
          await yes.click()
          let location = await driver.findElement(By.xpath('//*[@id="st-container"]/div/header/div[2]/div/div[5]/a/span'))
          await location.click()
          let floridaButton = await driver.findElement(By.xpath('//*/button[@value="FL"]'))
          await floridaButton.click()

          //let largoLink = await driver.findElement(By.xpath('//*[@id="amlocator-map-container6588c0d3e7120"]/div[3]/div[2]/div[2]/div/div[1]/h3/a'))
          await pickupHere.click()
          let menu = await driver.findElement(By.xpath('/html/body/div[1]/header/div[2]/div[3]'))
          await menu.click()
          let flowerLink = await driver.findElement(By.xpath('//*[@id="dm"]/li[3]/a'))
          await flowerLink.click()
          let shopAll = await driver.findElement(By.xpath('//*[@id="dm"]/li[3]/div/div[1]/div[1]/div[2]/div/ul/li[8]/a'))
          await shopAll.click()
        let elems = await driver.findElements(By.className("overlay"))  
        for(let e of elems) {
                productArr.push(await e.getAttribute("href"));
                //console.log(await e.getAttribute("href"))
            }
        }
        finally {
                await driver.close()
        }
          //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
         // let a = await driver.find_elements_by_class_name('overlay')
          //console.log(a)
        
      }; 
      
async function getPdfLinks(link){
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get(link);
        let coaLink = await driver.findElement(By.className('coa-link').getAttribute("href"))
        pdfArr.push(coaLink)
        //console.log(pdfArr)
}
/*
        function getElementByXpath(path) {
                return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
      
        console.log( getElementByXpath('//*[@id="av_terms_checkbox"]') );
*/
      
      getOverlayLinks()
      for(let i=0; i<productArr.length; i++){
        getPdfLinks(productArr[i])
      }
      //getPdfLinks(productArr[0])
      console.log(pdfArr)
      console.log(productArr)