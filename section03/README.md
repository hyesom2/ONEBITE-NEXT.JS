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