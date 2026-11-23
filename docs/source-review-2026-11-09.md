# 후보 출처 검토 · 2026-11-09

대상은 기존 출처 검토 대기 후보 22개다. 공식 홈페이지·프로젝트 저장소·다운로드 안내의 관계와 Windows 배포 안내를 열람했다. HTTP 성공만으로 공식 여부를 판단하지 않았다. 이번 확인은 설치 파일 실행, 바이너리 서명 검사, 광고 없음 인증 또는 라이선스 전체 심사가 아니다.

## 결과

22개를 공식 출처 확인으로 전환했다. 총 31개가 공식 출처 확인 상태이며 Windows 설치 검증 완료는 0개다. 항목별 근거 URL과 확인 날짜는 `src/data/apps.json`의 `sourceEvidence`, `sourceCheckedAt`에 기록했다.

- PeaZip, NanaZip, Explorer++, SumatraPDF, KeePass: 안정판·개발판 구분과 Windows 패키지 안내 확인.
- FreeCommander: 무료 공개 32비트판과 64비트 후원 배포 조건 구분.
- PDF24 Creator, Greenshot: 공식 웹페이지에 광고가 있다. 앱 내부 광고·설치 제안은 미검증이므로 선정 최종 승인을 의미하지 않는다.
- LibreOffice: 공식 다운로드가 `/download/`로 이동하며 The Document Foundation 파일 서버를 연결한다. 로컬 HTTP 요청은 실패했으나 웹 열람 경로로 공식 페이지를 확인했다.
- foobar2000: 공식 Windows 페이지 `/windows`로 주소 갱신. preview 제외.
- MPC-BE: GitHub 개발 저장소가 SourceForge 프로젝트를 직접 연결하는 관계 확인. Nightly 제외.
- GIMP: 공식 Windows 다운로드 안내 확인.
- paint.net: getpaint.net에서 paint.net으로 이동하는 공식 경로를 기록. 무료 배포와 유료 Store판 구분.
- ImageGlass: 공식 사이트와 GitHub 관계 확인. Classic·Pro 무료 범위와 내부 홍보는 추가 검토 필요.
- Kopia: 공식 설치 문서와 Windows CLI·KopiaUI 안내 확인.
- Syncthing: 핵심 바이너리와 별도 프로젝트의 Windows 통합 도구를 구분.
- VeraCrypt: 공식 Windows 배포·서명 링크 확인. 서명 자체 검증은 미수행.
- HWiNFO: 공식 페이지에서 비상업적 사용 무료 조건 확인. 직접 자동 요청은 403이므로 자동 점검 실패와 공식성 판단을 구분.
- CrystalDiskInfo: 공식 제품·다운로드 연결 확인. 에디션·설치 제안 미검증.
- Notepad++: 공식 목록과 GitHub 배포 관계 확인. 웹 열람 도구의 403은 직접 HTTP 열람으로 보완.
- Visual Studio Code: Microsoft 공식 Windows 설치형·ZIP 안내 확인. 배포판 라이선스와 소스 저장소 라이선스 구분.
- Kate: KDE 공식 안내 확인. Windows 직접 설치 파일은 nightly이며 Microsoft Store 경로가 별도 제공된다. nightly를 안정판으로 기록하지 않음.

## 남은 작업

자동 점검은 31개 중 9개를 재검토 대상으로 보고했다. HWiNFO는 HTTP 403, LibreOffice·OBS Studio·VLC는 타임아웃이었다. 기존 확인 항목인 Duplicati와 ShareX는 등록 버전과 관측 버전이 달랐다. Explorer++(`version-1.4.0`), SumatraPDF(`3.6.1rel`), VeraCrypt(`VeraCrypt_1.26.31`)는 페이지의 버전과 GitHub 태그의 접두·접미 표기 차이다. 이번 작업에서는 기존 확인 항목의 버전이나 자동 감지 로직까지 변경하지 않았다.

Windows에서 설치·첫 실행·광고·제휴 프로그램·제거 과정을 확인해야 한다. 무료 범위와 라이선스가 확인 필요인 기존 필드는 이번 출처 검증만으로 일괄 승인하지 않았다. 자동 점검에서 발생하는 차단·타임아웃·버전 변경은 별도 재검토 대상이다.
