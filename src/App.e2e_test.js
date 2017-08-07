Feature('Register Page')

Scenario('test for register form', (I) => {
    I.amOnPage('/')
    I.see('Sign Up')
    I.see('Username')
    I.see('Password')
    I.seeElement('//button[contains(., "Register")]')
})
