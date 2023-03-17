# 원티드 프리온보딩 프론트엔드 인턴십 3주차 기업과제

## 목차

1. [프로젝트 소개](#1-프로젝트-소개)
2. [구현 결과](#2-구현-결과)
3. [과제 수행 과정](#3-과제-수행-과정)
4. [Best Practice 산출 전략 및 근거](#4-Best-Practice-산출-전략-및-근거)
5. [Refactoring](#5-Refactoring)
6. [팀 협업 방식](#6-팀-협업-방식)

<br>

## 1. 프로젝트 소개

![image](https://user-images.githubusercontent.com/85419343/225575638-bfb436ce-6cae-447f-a2ac-732502041e22.png)

<p align="center">
  <a href="https://main--ornate-chimera-f7ff38.netlify.app/">🔗 배포 URL</a>
</p>

### Flexsys Chart Project

- 이 프로젝트는 <a href="http://flexsys.co.kr/">플렉시스</a>에서 출제한 과제로, 주어진 데이터를 Chart로 시각화하며 필터링 기능을 구현했습니다.

### 진행 방식

- 7명의 팀원들이 각자 과제를 구현하고, 2회의 Pull Request를 보내 코드리뷰를 진행 후 Best Practice를 선정하였습니다.
- Best Practice로 뽑힌 코드 외에 다른 좋은 코드를 반영하기 위해 페어 프로그래밍으로 refactoring을 진행했습니다.

### 진행 기간

- 2023.03.13 ~ 2023.03.17 (5일)

### 프로젝트 실행 방법

```
$ git clone git@github.com:wanted-pre-onboarding-team5/pre-onboarding-9th-3-5.git
$ cd wanted-pre-onboarding-9th-3-5
$ npm install && npm run dev
```

<br>

## 2. 구현 결과

### (1) 시계열 차트 및 호버

|                                                 시계열 차트, 호버                                                 |
| :---------------------------------------------------------------------------------------------------------------: |
| <img src=https://user-images.githubusercontent.com/59612529/225919936-d71d2f48-d79b-4e7a-bc7e-94d450aba659.gif /> |

**시계열 차트 및 호버 요구사항** [ISSUE#2](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-3-5/issues/2)

- [x] 1. 주어진 JSON 데이터의 key값(시간)을 기반으로 시계열 차트를 만든다.
- [x] 2. 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만든다.
- [x] 3. Area 그래프의 기준값은 value_area 값을 이용한다.
- [x] 4. Bar 그래프의 기준값은 value_bar 값을 이용한다.
- [x] 5. 차트의 Y축에 대략적인 수치를 표현한다.
- [x] 6. 특정 데이터 구역에 마우스 호버시 id, value_area, value_bar 데이터를 툴팁 형태로 제공한다.

<br>

### (2) 차트 필터링 기능

|                                                   차트 필터링                                                    |
| :--------------------------------------------------------------------------------------------------------------: |
| <img src=https://user-images.githubusercontent.com/59612529/225921733-935e8094-4175-448f-aace-3cd122b63497.gif/> |

|                                      차트 필터링 - 배경 선택 시 ALL로 이동                                       |
| :--------------------------------------------------------------------------------------------------------------: |
| <img src=https://user-images.githubusercontent.com/59612529/225922356-d4d69324-4add-4966-a761-700239f03e90.gif/> |

|                                       차트 필터링 - 새로고침해도 필터 유지                                       |
| :--------------------------------------------------------------------------------------------------------------: |
| <img src=https://user-images.githubusercontent.com/59612529/225923229-ffbdf15d-8a23-4148-b1c6-f218a1ed0225.gif/> |

**필터링 기능 구현** [ISSUE#3](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-3-5/issues/3)

- [x] 1. 필터링 기능을 구현한다, 필터링은 특정 데이터를 하이라이트 하는 방식으로 구현한다.
- [x] 2. 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용한다.
- [x] 3. 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 한다.
- [x] 4. 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해준다.

<br>

## 3. 과제 수행 과정

### 요구사항 분석

- 다양한 차트 라이브러리 중 어떤것을 사용할 지 논의하였습니다.
  - 차트를 커스터마이징하기 좋으며, 기본적으로 제공하는 UI가 훌륭한 `chart.js`를 선택하였습니다.
- 처음 주어진 세 개의 요구사항을 관련도를 생각하여 **`시계열 차트와 호버 기능`, `필터링 기능`** 이라는 두 개의 큰 단위의 이슈로 나누었습니다.

### 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂FilterableChart
 ┃ ┃ ┣ 📜ChartFilter.tsx
 ┃ ┃ ┣ 📜MixedChart.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📜Header.tsx
 ┣ 📂constants
 ┃ ┗ 📜chart.ts
 ┣ 📂helpers
 ┃ ┣ 📂chart
 ┃ ┃ ┣ 📜extractChartDataAndOptions.ts
 ┃ ┃ ┣ 📜getChartColor.ts
 ┃ ┃ ┣ 📜getChartData.ts
 ┃ ┃ ┗ 📜getChartOptions.ts
 ┃ ┣ 📜extractArrayFromResponse.ts
 ┃ ┗ 📜getQueryData.ts
 ┣ 📂hooks
 ┃ ┗ 📜useChartFilter.tsx
 ┣ 📂pages
 ┃ ┣ 📜Error.tsx
 ┃ ┗ 📜Main.tsx
 ┣ 📂routes
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜loader.ts
 ┣ 📂types
 ┃ ┣ 📜chart.ts
 ┃ ┣ 📜queryData.ts
 ┃ ┗ 📜responseData.ts
 ┣ 📂utils
 ┃ ┣ 📜httpClient.ts
 ┃ ┗ 📜transparentize.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

### 사용한 라이브러리

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/husky-5D4F85?style=for-the-badge&logo=husky&logoColor=white">
</div>
 
<div style='margin-top:10px;'>  
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 
</div>
<br>

- **React** : 요구사항의 필수 스택인 react를 사용하였습니다.
- **Vite** : vite를 사용하여 프로젝트 툴체인을 구성하였습니다.
- **TypeScript** : 안정적인 프로그래밍을 위해 사용하였습니다.
- **Material UI** : 완성도가 높은 UI를 빠르게 구현하기 위해 사용하였습니다.
- **react-router-dom** : 직관적인 API로 SPA 구축 시 라우팅을 수월하게 할 수 있어 사용했습니다.
- **eslint** : 팀원간 코드 컨벤션을 통일하기 위해 사용했습니다.
- **prettier** : 팀원간 코드 포맷을 통일하기 위해 사용했습니다.
- **husky** : git hook을 좀 더 편리하게 적용할 수 있도록 사용했습니다.

<br>

## 4. Best Practice 산출 전략 및 근거

### Best Practice 산출 전략

- 분석한 요구사항을 토대로 큰 단위의 이슈 2개로 나눴으며, 팀원 모두 요구사항을 구현하여 2회의 PR을 정해진 시간까지 보냈습니다.
  - 1회차 PR: 3/15(수) 오전 8시까지 (EPIC ISSUE 1)
  - 2회차 PR: 3/16(목) 오후 5시까지 (EPIC ISSUE 2)
- PR message에는 Pull Request 템플릿에 맞춰 자신이 구현한 로직과 의도를 설명하여 팀원들이 이해하기 쉽도록 하였습니다.
- 팀원들의 코드를 리뷰하며 자신의 의견 및 질문을 코멘트로 남겼습니다.
- 마지막 코드 리뷰를 마친 후 자신이 생각하는 Best Practice를 뽑고 그 근거를 Notion에 정리했으며, 토론을 통해 최종 Best Practice를 선정했습니다.
- 선정된 Best Practice를 main 브랜치에 merge하였고, 팀원들과 함께 리팩토링을 진행하여 코드 퀄리티를 높였습니다.

### Best Practice 산출 근거

> 이번에는 다양한 사람들의 코드의 장점을 녹여낼 수 있도록 여러 명의 Best Practice를 뽑았습니다. Base로 창환님의 코드를 뽑아 함께 잘 한 점들을 적용할 수 있도록 Refactoring 작업을 진행했습니다.

- 자윤, 창환, 은우

  - 필터 기능 구현 시 쿼리 스트링을 적용하여 상태를 사용하지 않는 방식으로 구현했습니다. 새로고침을 하거나 url을 전달받아도 필터링이 유지됩니다.

- 자윤, 창환
  - 에러가 발생하거나 존재하지 않는 경로로 접근한 경우 Error 페이지를 보여주며, 다시 Main 페이지로 돌아갈 수 있도록 버튼을 배치해 유저의 편의성을 높였습니다.
  - 코드에서 사용되는 문자열, 숫자 등의 값을 상수화하여 가독성과 유지보수성을 높이고, 배열일 경우 TypeScript의 const assertion을 활용하여 Type checking의 정확도를 높였습니다.
  - Type을 선언하여 에러를 방지하고 개발 생산성을 향상시켰습니다.
- 창환

  - `ErrorPage` 컴포넌트 구현 시 React Router Dom에서 제공하는 [`isRouteErrorResponse`](https://reactrouter.com/en/main/utils/is-route-error-response)를 활용하여 좀 더 섬세한 에러 처리를 구현했습니다.

- 자윤

  - UI/UX의 완성도(필터 Radio button 적용과 배치, 색상 선택, hover 시 진하게 표시)를 높였습니다.
  - 필터링 등의 비즈니스 로직을 별도의 유틸 함수로 분리하여 로직의 재사용성과 코드의 가독성을 높였습니다.

- 현오
  - 컴포넌트를 적절한 단위로 분리하고 폴더에 정리하여 구조화하였으며, 중복되는 코드를 최소화하고 재사용성을 높였습니다.
  - `transparentize` 유틸 함수를 구현하여 색상의 opacity를 쉽게 조절할 수 있도록 하였습니다.

<br>

## 5. Refactoring

> 페어 프로그래밍으로 진행한 리팩토링 목록입니다. 토론을 통해 각자가 구현한 과제에서 잘 한 부분을 적용했습니다.

### 1. 관심사 분리 원칙에 따른 컴포넌트 구조 개선

- 관심사의 분리라는 원칙에 따라 기존의 컴포넌트의 구조를 변경했습니다.
  ```
  📂components
   ┃ 📂FilterableChart
   ┃ ┣ 📜ChartFilter.tsx
   ┃ ┣ 📜MixedChart.tsx
   ┃ ┗ 📜index.tsx
   ┗ 📜Header.tsx
  ```
  - 기존에는 components 폴더 안에 ChartFilter 컴포넌트와 MixedChart 컴포넌트가 같은 수준에 있었지만, ChartFilter는 차트에 종속되어 있다는 점을 고려하여 폴더 안에 함께 놓는 것이 더 응집도가 있다고 판단하여 변경했습니다.

### 2. data fetch 시 에러 처리 적용

- data를 fetch할 때 에러 처리를 적용하기 위해 httpClient 유틸 함수를 구현했습니다.

### 3. type alias 네이밍 컨벤션 지정 및 적용

- type alias 사용 시 이름의 끝에`Type`을 붙이지 않는 것으로 컨벤션을 정하여 중복을 줄일 수 있도록 하였습니다.

### 4. query parameter 기준에 따른 이름 변경

- API Design Standard가 명시되어 있는 [api.gov.au](https://api.gov.au/sections/naming-conventions.html#:~:text=Query%20Parameter%20Names,-Literals%2Fexpressions%20in&text=Query%20parameters%20MUST%20start%20with,that%20are%20not%20URL%20safe) 사이트의 내용을 반영하여 기존 query parameter의 네이밍을 `selectedID`에서 `selectedId`로 변경했습니다.
- **Query parameter naming standard**
  - 쿼리 문자열의 리터럴/표현식은 밑줄(\_)을 사용하여 구분해야 합니다.
  - 쿼리 매개변수는 문자로 시작해야 하며 camelCase 또는 snake_case여야 합니다.
  - 쿼리 매개변수는 URL에 안전하지 않은 문자를 포함하지 않아야 합니다.

### 5. UI / UX를 고려한 디자인 변경

- 각 차트에 마우스를 올렸을 때 해당 차트의 색상을 진하게 표시하여 가독성을 향상했습니다.
- 각 필터의 색상과 차트의 색상을 일치시켜 유저가 차트의 내용을 이해하기 좋도록 구현했습니다.
- 차트의 배경을 클릭 시 필터링이 해제되도록 하여 유저가 편리하게 차트를 이용할 수 있도록 구현했습니다.

### 6. 선언적인 코드로 변경

- 선언형 프로그래밍 원칙에 따라 달성 방법이 아닌 달성하려는 것을 설명할 수 있도록 코드를 수정했습니다.
- 또한 어떻게(How)보다 무엇(What)에 집중할 수 있어 코드 가독성이 좋아졌습니다.

```js
// before
for (const [key, value] of Object.entries(mockData.response)) {
  const { id, value_area, value_bar } = value;
  chartData.labelArray.push(key);
  chartData.idArray.push(id);
  chartData.areaDataArray.push(String(value_area));
  chartData.barDataArray.push(String(value_bar));
}

// after
Object.entries(mockData).forEach(([key, value]) => {
  const { id, value_area, value_bar } = value;
  chartData.labelArray.push(key);
  chartData.idArray.push(id);
  chartData.areaDataArray.push(String(value_area));
  chartData.barDataArray.push(String(value_bar));
});
```

### 7. utils와 helpers 폴더 분리

- utils 폴더에는 어떤 프로젝트에서든 사용할 수 있는 함수들을, helpers 폴더에는 프로젝트에 종속적인 함수들을 담아 좀 더 구별하기 쉽도록 하였습니다.
- 또한 하나의 함수에서는 하나의 기능만 담당하도록 기존의 결합되어있던 로직들을 분리했습니다.
  - 분리한 함수들의 응집도를 높이기 위해 서로 관련된 함수는 같은 폴더에 두었습니다.

### 8. React Custom Hook 도입

- `useChartFilter`라는 Custom Hook을 구현하여, Chart와 Filter 컴포넌트 내 상태 로직 및 비즈니스 로직을 분리했습니다.

### 9. 코드 가독성 향상

- 기존에 Chart 컴포넌트에 직접 props로 넣어 주던 data와 option 객체를 분리하여 가독성을 높였습니다.

<br>

## 6. 팀 협업 방식

### 🏃🏻‍♂️ 팀 프로젝트 진행 방식

#### 1. Discord 채널을 활용한 주기적인 회의 진행

- 주기적인 회의를 통해 서로의 의견을 나누고, 다음 할 일에 대한 계획을 수립하였습니다.
- 기능을 구현하는데 필요한 스택을 논의한 뒤 사용 라이브러리를 정하였습니다
- 분류에 따라 팀원 개개인이 과제를 수행했습니다.
- 리뷰 시간을 정하여 해당 시간에 PR에서 코드리뷰를 했습니다.
- 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다.
- [이슈](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-3-5/issues?q=is%3Aissue+is%3Aclosed)와 [PR메시지](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-3-5/pulls)를 활용하여 문서화하였습니다.

#### 2. Notion을 활용한 팀 프로젝트 과정 문서화

- 진행한 프로젝트의 문서화를 위해 notion을 활용하여 모든 구성원이 의견을 남기고, 진행 과정을 정리하였습니다.

#### 3. [요구사항 분석 후 Issue 생성](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-3-5/issues)

- 프로젝트 개발의 요구사항을 분석, 세부적으로 나누어 issue를 생성하였습니다.

#### 4. [Pull requests와 코드 리뷰](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-3-5/pulls)

- 세부적 issue를 두 개의 큰 단락으로 나누어 메인, 장바구니와 Best Practice, refactoring으로 총 네 번의 PR과 코드 리뷰를 진행하였습니다.

<br>

### 🤙 팀 컨벤션

<details>
<summary>💬<strong>커밋 컨벤션</strong></summary>
    
<div markdown="1">
    
#### Commit message

```tsx
[#Issue Number] Type: commit title

Description
```

#### Commit Type and Description

| Type     | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| Feat     | 새로운 기능 추가                                                                   |
| Design   | CSS 등 UI 디자인 변경                                                              |
| Refactor | 코드 리팩토링                                                                      |
| Fix      | 버그 수정                                                                          |
| Docs     | 문서 작업, 수정                                                                    |
| Style    | 코드 스타일 및 포맷 변경(코드 자체의 변경은 없는 경우, 함수/ 변수명 변경 포함)     |
| Test     | 테스트 코드 작성, 테스트 리팩토링(프로덕션 코드 변경 X)                            |
| Chore    | 소스 코드를 건들지 않는 작업 - 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 |
| Init     | 초기화                                                                             |
| Build    | 빌드 관련 파일 수정                                                                |
| CI       | CI 관련 설정 수정                                                                  |
| Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행                                   |
| Remove   | 파일을 삭제하는 작업만 수행                                                        |

</div>
</details>

<br>

<details>
<summary><strong>💬 eslint/prettier 설정</strong></summary>
<div markdown="1">
 
#### .eslintrc.cjs
 
```js
 module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',

    'no-console': ['warn', { allow: ['error'] }],
    eqeqeq: 'error',
    'dot-notation': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

},
};

```

#### .prettierrc.cjs

```

'use strict';

module.exports = {
bracketSpacing: true,
singleQuote: true,
tabWidth: 2,
trailingComma: 'all',
printWidth: 100,
endOfLine: 'auto',
useTabs: false,
semi: true,
jsxSingleQuote: true,
arrowParens: 'always',
};

```

</div>
</details>

<br>

<details>
<summary>💬<strong>이슈 전략</strong></summary>

- 이슈는 요구사항 분석에 작성한 리스트를 토대로 크게 시계열 차트 및 호버 시 툴팁 구현과 차트 필터링 기능을 구현하는 것을 EPIC이슈로 두고 만들었습니다.

- **EPIC 이슈 -** PR 보낼 때 멘션하는 용도, 브랜치에 표시되어야 합니다. **(Epic/#1-chadseok**)
- **요구사항 이슈 -** 커밋에 명시하는 용도입니다. (ex. [**#5**] Feat: 모달창 띄우기 기능)
</details>
<br>

### 👤 팀 멤버
|   강승훈   |   김은우   |   박준수   |   박한나   |   석창환   |   이자윤   |   조현오   |
|:--------:|:--------:|:--------:|:--------:|:--------:|:----------:|:----------:|
|[@seunghoonKang](https://github.com/seunghoonKang)|[@eunoo1995](https://github.com/eunoo1995)|[@junsu1220](https://github.com/junsu1220)|[@hannaax](https://github.com/hannaax)|[@chadseok](https://github.com/chadseok)|[@jaypedia](https://github.com/jaypedia)|[@letsjo](https://github.com/letsjo)|
|<img src="https://avatars.githubusercontent.com/seunghoonKang" width="80">|<img src="https://avatars.githubusercontent.com/eunoo1995" width="80">|<img src="https://avatars.githubusercontent.com/junsu1220" width="80">|<img src="https://avatars.githubusercontent.com/hannaax" width="80">|<img src="https://avatars.githubusercontent.com/chadseok" width="80">|<img src="https://avatars.githubusercontent.com/jaypedia" width="80">|<img src="https://avatars.githubusercontent.com/letsjo" width="80">|
<br>
```
