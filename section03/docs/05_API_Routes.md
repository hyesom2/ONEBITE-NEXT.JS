# 5. API Routes
- Next.js에서 API를 구축할 수 있게 해주는 기능
- 마치 백엔드 API서버가 하는 일과 동일하게 간단한 API를 구축해서 클라이언트(브라우저)로부터 요청을 받아 데이터베이스에서 데이터를 꺼내오거나 또 다른 서드파티에 데이터를 불러와서 전달을 해준다던지 하는 이러한 일련의 동작들을 직접 만들 수 있다.<br />
<img width="919" height="305" alt="image" src="https://github.com/user-attachments/assets/cd37fd5e-befe-4d9d-b2cf-e8aa5238d15f" />

- Next.js에서는 pages폴더 아래 API라는 폴더를 만들고 해당 폴더 안에 새로운 파일들을 배치시켜 주게도면 그 파일들은 API Routes로서 웹페이지를 정의하는 파일이 아닌 API응답을 정의하는 코드로서 설정이 된다.

```ts
// /src/pages/api/hello.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
// NextApiRequest, NextApiResponse : Next.js에서 자체적으로 기본 제공하는 타입들

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
```

<img width="338" height="102" alt="image" src="https://github.com/user-attachments/assets/73fda6c4-b400-4fab-897d-a22e78b211d2" />
