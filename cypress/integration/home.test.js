import { createYield } from "typescript";

describe('home page', () => {

    it('should display table of cities', () => {

        // arrange
        cy.server();
        cy.fixture('cities.json').as('citiesJSON');
        cy.route('/api/cities', '@citiesJSON');

        // act
        cy.visit('/');

        // assert
        cy.get('table#city-table').should('exist');

    });

    it('should display a message to the user when there is no city to display', () => {

        // arrange
        cy.server();
        cy.fixture('empty.json').as('citiesJSON');
        cy.route('/api/cities', '@citiesJSON');

        // act
        cy.visit('/');

        // assert
        cy.get('table#city-table').should('not.exist');
        cy.get('.alert').should('exist');

    });

    it('should display the correct number of cities', () => {

        cy.server();
        cy.fixture('cities.json').as('citiesJSON');
        cy.route('/api/cities', '@citiesJSON');

        // act
        cy.visit('/');

        // assert
        cy.get('#city-table > tbody > tr').should('have.length', 3);

    });




});