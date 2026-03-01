# 1. App Router 시작하기
- Next.js 13버전에 새롭게 추가된 라우터
- 기준의 page Router를 완전히 대체함

### ※ 변경되거나 추가되는 사항
- 페이지 라우팅 설정 방식 변경
- 레이아웃 설정 방식 변경
- 데이터 페칭 방식 변경
- React 18 신규 기능 추가
  - 새롭게 추가된 기능들(예)
  1. React Server Component
  2. Streaming

### ※ 크게 변경되지 않는 사항
- 네비게이팅 (Navigating)
- 프리페칭 (Pre-Fetching)
- 사전 렌더링 (Pre-Rendering)

### ※ Next.js 생성 (App Router 버전)
```
> npx create-next-app@latest section04
```
- @latest : 생성하려는 next.js를 최신 버전으로 만든다.

### ※ Page Router 와의 차이점
1. `pages` 폴더가 존재 X → `app` 폴더 존재
2. `page.tsx` → 페이지 역할
3. `layout.tsx` → 레이아웃 역할

---

# 1_1. Next.js 15.0.3 버전부터 주의하셔야 할 점
- 구체적으로는 any 타입을 명시적으로 지정하거나 또는 사용하지 않는 변수를 선언해 둘 경우 오류가 발생
- ESLint 옵션 파일의 규칙을 수정한 다음 실습을 진행하시는 걸 추천
- eslintrc.config.json 파일의 내용을 다음과 같이 수정

```
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      - 
    }
  }
]);
```

- @typescript-eslint/no-unused-vars: "warn": 사용하지 않는 변수가 있을 때 경고로 표시
- @typescript-eslint/no-explicit-any": "off": any 타입을 명시적으로 정의할 수 있도록 허용해요
위 옵션을 추가 하시지 않으면 향후 실습 과정에서 오류가 발생할 수 있기 때문