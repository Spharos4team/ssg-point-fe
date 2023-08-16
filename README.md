# ssg-point-FE

> 2023 Spharos Academy 3기 1차 프로젝트

## 📌 to-do

- [ ] WBS 작성(화면 설계 참고)
- [ ] prettier, eslint 설정(보류),
- [ ] 라이브러리 정리
- [ ] json-server 활용 방안
  - Mock API test
  - auth test
- [x] Branch 전략
- [ ] docs: git 설정, commit msg
- [ ] 이미지소스: storage 사용 여부에 따라 결정되겠지만, 일단 프론트에 표시되어야 하는 것들은 모두 표시되어야만 한다. 로컬이든 스토리지든 상관없다.
- [x] 타입 대신 인터페이스: 조금 불편하더라도 구현 의무를 지니고, 미약하나마 성능상 우월한 인터페이스 사용
- [ ] component
  - ui
    - [x] LinkImageWithFallback: 링크를 가진 이미지 컴포넌트(src 에러 또는 loading fallback 적용)

## 📌 Reference Libraries

- [ ] [styled-components](https://styled-components.com/docs/basics)
- [ ] [redux](https://redux.js.org/introduction/getting-started)
- [ ] [redux-saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [ ] [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [x] [json-server](https://github.com/typicode/json-server)
- [ ] [prettier](https://prettier.io/docs/en/install.html)
- [x] [eslint](https://eslint.org/docs/user-guide/getting-started)
- [ ] [lodash](https://lodash.com/docs/4.17.15)
- [x] [Todo Tree]()
- [x] [SWR]

## 📌 Check

### Naming Convention

- 컴포넌트는 컴포넌트 폴더 하위에 index.tsx로 생성하지 말고 파일명으로 사용
  - ~~ExampleComponent/inde.tsx~~
- Component: {컴포넌트}{위치}{범위}.tsx
  - TabBarTopMain.tsx
