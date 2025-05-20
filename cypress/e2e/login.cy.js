describe('로그인 기능 테스트', () => {
  it('정상 로그인 시 홈화면 이동', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });
}); 
