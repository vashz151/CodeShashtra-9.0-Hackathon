import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])

service = Service('/chromedriver')

driver = webdriver.Chrome(service=service, options=options)
driver.get('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&respone_mode=query&redirect_uri=https%3A%2F%2Fasia-south1-truecaller-web.cloudfunctions.net%2Fapi%2Fnoneu%2Fauth%2Fgoogle%2Fv1&state=asia-south1%7Cin%7Cfalse%7Cweb%7Chttps%3A%2F%2Fwww.truecaller.com&client_id=22378802832-klpcj5dosalhnu0vshg3hjm9qgidmp8j.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&service=lso&o2v=2&flowName=GeneralOAuthFlow')

elem = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, 'identifierId')))
elem.send_keys('shah5yxxxghag@gmail.com')

elem1 = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button')))
elem1.click()

elem2 = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[2]/div[2]/div")))

try:
    if elem2.text:
        print(elem2.text)
except Exception as e:
    print(e)

finally:
    driver.quit()
