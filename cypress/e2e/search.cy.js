describe('직원 검색 기능 테스트', () => {
  it('직원 이름으로 검색 시 결과에 이름이 포함되어야 한다', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // 로그인
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // PIM 메뉴 클릭
    cy.contains('PIM').click();

    // 검색창에 이름 입력 후 검색
    cy.get('input[placeholder="Type for hints..."]').type('Paul Collings');
    cy.contains('Search').click();

    // 결과 테이블에 이름 포함 확인
    cy.get('.oxd-table-body').should('contain.text', 'Paul Collings');
  });
});
