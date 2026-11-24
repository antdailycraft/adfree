# Adfree

사이트: [https://adfree.aidaon.com](https://adfree.aidaon.com)

광고·제휴 번들 없는 Windows 유틸리티를 찾고, 공식 다운로드 페이지와 검증 상태를 함께 보여주는 정적 사이트입니다.

현재 저장소에는 10개 카테고리의 후보 46개가 들어 있습니다. 공식 출처를 확인한 기록과 Windows에서 설치기를 직접 확인한 기록을 분리합니다. macOS에서도 사이트 개발과 링크 자동 점검은 가능하지만, Windows 설치 검증을 수행하기 전에는 `설치 검증 완료` 상태를 부여하지 않습니다.

## 로컬 실행

Node.js 24 이상을 사용합니다.

```sh
npm install
npm run dev
```

주요 명령은 다음과 같습니다.

- `npm run check`: Astro 타입 검사, 데이터 검증, 단위 테스트
- `npm run build`: GitHub Pages용 정적 사이트 빌드
- `npm run validate:data`: 후보 수, 카테고리, URL, 검증 근거 검사
- `npm run check:sources`: 공식 다운로드 페이지와 GitHub 안정판 변화 점검

네트워크 점검 결과는 시스템 임시 디렉터리에 JSON으로 저장되며 카탈로그 데이터를 자동 수정하지 않습니다.

## 데이터 갱신

앱 정보는 `src/data/apps.json`에서 관리합니다.

1. 공식 홈페이지나 프로젝트 저장소에서 다운로드 페이지를 확인합니다.
2. `officialHosts`에 실제로 허용할 공식 도메인만 기록합니다.
3. 사람이 확인한 근거 링크와 날짜를 추가한 뒤 `sourceStatus`를 `confirmed`로 변경합니다.
4. Windows에서 설치·첫 실행·제거 과정을 확인한 뒤에만 `installerStatus`를 `verified`로 변경합니다.
5. `npm run check`를 통과시킵니다.

GitHub Actions는 매주 공식 페이지와 GitHub 안정판 변화를 감지합니다. 변화가 있으면 검토 이슈를 만들며 자동으로 공개 데이터를 바꾸지 않습니다.

## 배포

`main` 브랜치에 푸시하면 공식 Astro GitHub Pages 작업이 사이트를 빌드하고 배포합니다. GitHub 저장소 설정에서 Pages의 Source를 **GitHub Actions**로 선택해야 합니다.

커스텀 도메인 `adfree.aidaon.com`의 루트(`/`)에서 서비스합니다. Actions 환경에서도 `base`는 `/`로 유지하며, `SITE_URL`을 지정하면 canonical·Open Graph·sitemap에 사용할 사이트 주소를 덮어쓸 수 있습니다. 기본 주소는 `https://adfree.aidaon.com`입니다.

## 댓글 (Remark42)

프로그램 상세 페이지에 익명 닉네임 댓글과 GitHub 로그인 댓글을 제공합니다. 로그인한 사용자는 프로필 사진과 이름이 표시됩니다. `src/components/Comments.astro`에서 서버 `https://api.aidaon.com/remark42`, 사이트 ID `adfree`를 사용합니다. 댓글 식별자는 미리보기 주소가 아닌 정식 페이지 URL입니다. 댓글 불러오기 버튼을 누른 뒤 외부 스크립트를 요청합니다.

공통 서버 구성과 운영 안내는 인접한 `shared-services/deploy/remark42/`에 있습니다. 비밀키와 댓글 DB는 Git에 포함하지 않습니다.

## 개발 접속 주소

Metis의 공통 개발 호스트는 `metis.aidaon.com`입니다.
Adfree: http://metis.aidaon.com:8430/ (예: `/apps/peazip/`).
접속 기기는 Tailscale에 연결되어 있어야 합니다. DNS는 Metis의 Tailscale IP를
가리키는 DNS 전용 A 레코드이며, 프로젝트별로 포트만 구분합니다.
개발 서버는 `0.0.0.0:8430`으로 실행하고 `metis.aidaon.com`을 허용합니다.
정식 사이트와 canonical 주소는 `https://adfree.aidaon.com`을 유지합니다.
