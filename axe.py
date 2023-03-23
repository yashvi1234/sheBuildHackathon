from selenium import webdriver
from axe_selenium_python import Axe
import json

options = webdriver.ChromeOptions()
options.add_argument('headless')
driver=webdriver.Chrome(options=options)

def func(url):
        try:
                driver.get(url)
                axe=Axe(driver)
                axe.inject()
                results=axe.run()
                # print(results)
                axe.write_results(results, 'ally.json')
                driver.close()
                #assert len(results["violations"])==0,axe.report(results["violations"])

                with open('ally.json') as f:
                        data = json.load(f)
                        print(len(data["violations"]))

        finally:
                driver.quit()

with open('url.json') as f:
        d = json.load(f)

for i in d:
        #print(d[i])
        func(d[i])

#if __name__ == '__main__':
#        func("www.google.com")