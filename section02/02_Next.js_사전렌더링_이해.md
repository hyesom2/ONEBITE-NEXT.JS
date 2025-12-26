# 2. Next.js 사전렌더링 이해
### ※ CSR(Client Side Rendering)
- React.js 앱의 기본적인 렌더링 방식
- 클라이언트(브라우저)에서 직접 화면을 렌더링 하는 방식

<img width="1187" height="593" alt="image" src="https://github.com/user-attachments/assets/046136d5-6f41-47cb-a72c-5809988a7640" />
1. 유저가 브라우저를 통해 `초기 접속 요청`을 보낸다.
2. 리액트 웹 서버는 `빈 껍데기 HTML파일`인 `index.html`을 브라우저에게 보내준다.
3. 브라우저는 서버로부터 받은 HTML파일을 일단 화면에 렌더링한다. → `빈 화면 렌더링` → 사용자가 보고 있는 화면에는 빈 화면이 나온다.
4. 서버는 브라우저에게 리액트 앱을 하나의 JavaScript파일로 묶어서(번들링)해서 브라우저에게 보낸다. → `JS Bundle`
5. 브라우저는 서버로부터 받은 번들링 된 JavaScript파일(리액트 앱)을 직접 실행한다. → `JS 실행`
6. 리액트 앱이 실행되어 우리가 만든 컴포넌트들이 실제로 화면에 나타난다. → `컨텐츠 렌더링`

- 장점
  - 페이지 이동이 매우 빠르고 쾌적하다.
  <img width="1273" height="497" alt="초기접속 후 CSR" src="https://github.com/user-attachments/assets/d0e1f974-1d07-4696-9760-4f6a3aadcf98" />
  → `JS Bundle`로 인해 초기 접속 후 유저가 웹 페이지의 링크나 버튼을 클릭해서 페이지를 이동하게 되어도 서버에서 새로운 페이지를 요청할 필요가 없다. 
- 단점
  - 초기 접속 속도가 느려진다.
  <img width="1273" height="597" alt="초기접속이 느린 CSR" src="https://github.com/user-attachments/assets/3ae63973-5111-4604-a664-fae441178879" />
  → 요청의 시작 시점으로부터 화면이 실제로 컨텐츠가 렌더링 되는 순간까지 오래걸린다.
  → FCP가 늦어진다.
  ```
  📌 참고
  ※ FCP(First Contentful Paint) 
  - "요청 시작"시점으로 부터 컨텐츠가 화면에 처음 나타나는데 걸리는 시간
  - 요청시작 &lt;--&gt; 컨텐츠 렌더링
  - 웹 페이지의 성능을 대표할 정도로 중요한 지표
  ```

### ※ 사전 렌더링(Pre-rendering)
- 브라우저의 요청에 사전에 렌더링이 완료된 HTML을 응답하는 렌더링 방식
- Client Side Rendering(CSR)의 단점을 효율적으로 해결하는 기술

<img width="1175" height="399" alt="사전 렌더링" src="https://github.com/user-attachments/assets/ef162645-e2cc-4b50-8717-164e3800f6ff" />
1. 유저가 브라우저를 통해서 `초기 접속 요청`을 보낸다.
2. 웹 서버 측에서 JavaScript로 작성해둔 모든 리액트 컴포넌트들을 다 실행하여 컴포넌트들을 HTML페이지로 미리 다 변환한다. → `JS 실행(렌더링)`
3. 서버 측에서 `렌더링된 HTML파일`을 브라우저에게 응답해준다.

### ※ React의 문제점을 해결하는 Next.js의 사전 렌더링
<img width="1216" height="626" alt="image" src="https://github.com/user-attachments/assets/9387cd4e-0d89-4635-8b83-fc4e7e871c28" />
- CSR에서는 빈 껍데기 index.html을 보냈던 방면 사전 렌더링 방식에서는 서버측에서 이미 사전에 렌더링이 완료된 HTML을 보내준다.
- CSR의 느린 FCP가 큰 폭으로 단축된다.
- Hydration(하이드레이션)으로 JS를 HTML과 연결하여 상호작용이 가능하도록 한다.
- TTI(Time To Interactive) : 요청으로 부터 Hydration이 종료되는 과정까지 

```
📌 참고
※ JS실행(렌더링) : JavaScript코드(React 컴포넌트)를 HTML로 변환하는 과정
※ 화면에 렌더링 : HTML코드를 브라우저가 화면에 그려내는 작업 
```

### ※ 사전 렌더링의 페이지 이동 → CSR 방식으로 처리
<img width="1237" height="682" alt="image" src="https://github.com/user-attachments/assets/3a49de29-5d42-471b-b371-d592a29c94ba" />
- 브라우저가 서버에게 별도의 페이지를 추가로 요청하지 않는다.
- 직접 브라우저 측에서 JavaScript 코드를 실행(리액트 앱을 실행)해서 컴포넌트를 교체하는 방식으로 페이지이동이 효율적으로 진행된다.
