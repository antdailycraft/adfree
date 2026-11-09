# Adfree

광고·제휴 번들 없는 Windows 유틸리티를 찾고, 공식 다운로드 페이지와 검증 상태를 함께 보여주는 정적 사이트입니다.

현재 저장소에는 10개 카테고리의 후보 31개가 들어 있습니다. 공식 출처를 확인한 기록과 Windows에서 설치기를 직접 확인한 기록을 분리합니다. macOS에서도 사이트 개발과 링크 자동 점검은 가능하지만, Windows 설치 검증을 수행하기 전에는 `설치 검증 완료` 상태를 부여하지 않습니다.

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
