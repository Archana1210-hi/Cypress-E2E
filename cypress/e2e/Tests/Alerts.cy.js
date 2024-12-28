describe('Alerts',()=>{
    it('JavaScript Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    }) 
    it('JS Confirm Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        //cypress automatically closed alert window by using 'ok' button
       // cy.get('#result').should('have.text','You clicked: Ok')
        //close alert window by 'cancel' button
        cy.on('window:confirm',()=>false)
       cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it('Prompt Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: welcome')
    })
    it.only('Authentication alert',()=>{
    cy.vist('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get('div[class="example"] p').should('have.contain','Congratulations')
})
})