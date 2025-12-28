# 1. Page Router
- 현재 많은 기업에서 사용되고 있는 안정적인 라우터
- React Router 처럼 페이지 라우터 기능을 제공
- pages 폴더의 구조를 기반으로 페이지를 라우팅

### ① pages 폴더 아래에 들어있는 `파일들의 이름`을 기반으로 페이지 라우팅을 자동으로 제공
```
pages
┣ index.js → /
┣ about.js → /about
┗ item.js → /item
```
### ② `pages 폴더의 이름`을 기준으로 페이지 라우팅을 자동으로 제공
```
pages
┣ index.js → /
┗ about
  ┗ index.js → /about
┗ item
  ┗ index.js → /item
```

### ③ `동적 경로(Dynamic Routes)`를 갖는 페이지 라우팅
- 경로상의 어떠한 변할 수 있는 `가변적인 값`을 포함하고 있는 경로
  - 예&#41; 블로그의 게시글 페이지, 쇼핑몰의 상품별 상세페이지 등
- 파일명을 `대괄호`로 감싸주면 동적 경로에 대응하는 페이지의 역할이 된다. 
```
pages
┣ index.js → /
┗ item
  ┣ index.js → /item
  ┗ [id].js → /item/1, /item/2, ... , /item/100
```

### ④ Page Router 버전의 Next App 생성하기
- 설치
```
> npx create-next-app@14 폴더명
```
- `npx(node-package-execute)` : npmjs.com에 등록되어 있는 최신 버전의 노드 패키지를 다운로드 없이 바로 실행시키는 명령어
- `create-next-app` : Next.js 공식 문서에서 안내하고 있는 새로운 Next App을 생성하는 node.js 패키지 → Boilerplate(보일러플레이트)
```
📌 보일러플레이트(Boilerplate)?
- 프로그래밍에서 거의 변경 없이 여러 곳에서 반복적으로 재사용되는 표준화된 코드나 템플릿
```
- `@14` : 현재 설치하려는 Next App을 14버전으로 설치하라는 뜻
```
❓ 왜 14버전으로 설치하나요?
- Page Router에 존재하는 모든 기능들은 14버전에서 안정적으로 사용 가능하기 때문
```

- 개발 모드로 실행
```
> npm run dev → http://localhost:3000/
```

- 종료
```
> ctrl + c 또는 ctrl + d
```

### ⑤ Next.js 앱의 기본 파일들
```
section03
  ┣ node_modules
  ┣ public
  ┗ src
    ┣ pages
    ┃ ┣ api
    ┃ ┣ fonts
    ┃ ┣ index.tsx
    ┃ ┣ _app.tsx
    ┃ ┗ _document.tsx
    ┗ styles
    ┃ ┣ globals.css
    ┃ ┗ Home.module.css
    ┣ .eslintrc.json
    ┣ .gitignore
    ┣ next-env.d.ts
    ┣ next.config.mjs
    ┣ package-lock.json
    ┣ package.json
    ┗ tsconfig.json
```
- `node_modules` : Next.js App 또한 기본적으로는 Node.js패키지이기 때문에 의존성을 보관
- `package.json` : package의 정보를 보관
- `public` : 정적인 파일들을 보관
  - 예&#41; 파비콘, 이미지 파일 등..
- `src/pages` : 페이지 역할을 할 컴포넌트들을 보관할 파일들을 경로에 맞게 보관
  - `index.tsx` : index 페이지로 접속했을 때 나타나는 요소들의 페이지
  - `_app.tsx`
    - 리액트의 App컴포넌트와 동일한 역할 → 기본적으로는 모든 컴포넌트들의 `부모 컴포넌트(Root Component)`의 역할
    - 즉, 모든 페이지 역할을 하는 컴포넌트들의 부모 컴포넌트가 된다.
    - `Component` : 현재 페이지 역할을 할 컴포넌트를 받는다.
    - `page Props` : Component에게 전달될 페이지의 props들을 모두 객체로 보관한 것
    ```tsx
    export default function App({ Component, pageProps }: AppProps) {
      return <Component {...pageProps} />;
      // 1. 페이지 역할을 할 컴포넌트들을 렌더링 한다.
      // 2. 동시에 전달받은 pageProps를 구조분해 할당으로 전달한다.
    }
    ```
    - 즉, Next.js에서는 어떤 페이지를 렌더링하던 간에 App 컴포넌트 밑에 페이지 역할을 하는 컴포넌트가 렌더링 되는 구조로 렌더링 된다.
    - 예&#41; Header, Footer 등.. 같은 공통 요소
  - `_document.tsx`
    - 기존의 리액트 앱의 index.html과 비슷한 역할
    - `모든 페이지에 공통적으로 적용`이 되어야 하는 Next.js 앱의 HTML코드를 설정하는 컴포넌트
    - 예&#41; meta 태그, fonts, charset, google analytics, third-party script 등 페이지 전체에 다 적용되는 `HTML 태그를 관리`하기 위해 사용
    ```
    📌 Third-Party Script(서드 파티 스트립트)?
    - 웹사이트 소유자가 직접 개발하지 않고 외부 서비스(예: 구글 애널리틱스, 유튜브 플레이어, 광고, SNS 버튼 등)에서 제공받아 HTML 문서에 삽입하는 자바스크립트 또는 iframe 코드 조각
    - 성능 저하를 막기 위해 async, defer 속성 사용이나 Partytown과 같은 라이브러리 활용이 중요
    - Next.js와 같은 프레임워크에서는 최적화된 컴포넌트 제공
    출처) google 검색
    ```
- `src/styles` : 컴포넌트나 앱의 전체적인 스타일링을 담당하는 CSS 파일들을 보관
- `next.config.js` : Next App의 설정을 관리하는 파일 