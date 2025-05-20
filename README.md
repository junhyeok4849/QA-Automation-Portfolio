# QA 자동화 포트폴리오

이 프로젝트는 Cypress를 활용한 자동화 테스트 실습 포트폴리오입니다.  
로그인 시나리오를 E2E 테스트로 구현하였으며, 테스트 시나리오 문서와 코드, 실행 결과를 포함하고 있습니다.

---

## 🧪 테스트 시나리오

| 기능   | 목적                          | 입력값               | 기대 결과                      |
|--------|-------------------------------|----------------------|--------------------------------|
| 로그인 | 정상 로그인 시 홈 이동 확인   | ID: Admin / PW: admin123 | `/dashboard`로 URL 이동 확인 |

---

## 🛠 사용 기술

- Cypress (v14.3.3)
- JavaScript (Node.js 기반)
- GitHub

---

## 🔍 테스트 대상 사이트

> https://opensource-demo.orangehrmlive.com/

(공식 데모용 로그인 사이트 — QA 실습용으로 사용됨)

---

## 📁 디렉토리 구조

QA-Automation-Portfolio/
├── cypress.config.js
├── cypress/
│ └── e2e/
│ └── login.cy.js
├── README.md

---

## 🖥 실행 방법

```bash
npm install
npx cypress open
