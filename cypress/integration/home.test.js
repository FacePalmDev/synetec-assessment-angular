import { createYield } from "typescript";

describe('home page',() => {

    it('should display table of cities', () => {

        cy.visit('/');
        cy.get('table#city-table').should('exist');

    });

});