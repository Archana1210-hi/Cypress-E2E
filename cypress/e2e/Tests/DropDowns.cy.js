describe('Handling Dropdowns',()=>{
    it('Select Dropdown',()=>{
       cy.visit("https://testautomationpractice.blogspot.com/")
       cy.get('#country').select('India').should('have.value','india')
    })
    it('Dropdown without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Italy')
    })
    it('Auto-suggest Dropdown',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Hyderabad')
        cy.get('.suggestion-title').contains('Hyderabad Metro').click()
        cy.get('.mw-page-title-main').should('have.text','Hyderabad Metro')
    })
    it.only('Dynamic Dropdown',()=>{
        cy.visit('https://www.google.com/')
        cy.get('textarea#APjFqb').type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length',13)
        cy.get('div.wM6W7d>span')
        .each( ($el,index,$list)=>{
          if($el.text()=='cypress automation tutorial')
          {
            cy.wrap($el).click()
          }
        })
        cy.get('textarea#APjFqb').should('have.value','cypress automation tutorial')
        
    })


})