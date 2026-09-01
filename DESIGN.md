---
name: Adfree
description: 공식 출처와 검증 상태를 서비스 장부처럼 읽는 Windows 유틸리티 카탈로그
colors:
  paper: "oklch(97% 0.012 92)"
  paper-2: "oklch(94% 0.014 92)"
  paper-3: "oklch(90% 0.016 92)"
  ink: "oklch(19% 0.018 78)"
  ink-soft: "oklch(31% 0.018 78)"
  muted: "oklch(43% 0.014 82)"
  rule: "oklch(81% 0.018 88)"
  rule-strong: "oklch(61% 0.021 84)"
  accent: "oklch(45% 0.115 151)"
  accent-soft: "oklch(91% 0.043 151)"
  accent-ink: "oklch(97% 0.012 92)"
  warning: "oklch(53% 0.116 73)"
  warning-soft: "oklch(92% 0.045 73)"
  warning-ink: "oklch(22% 0.032 73)"
  danger: "oklch(48% 0.155 28)"
  danger-soft: "oklch(92% 0.035 28)"
  focus: "oklch(55% 0.16 250)"
typography:
  display:
    fontFamily: '"Noto Serif KR", "AppleMyungjo", ui-serif, serif'
    fontSize: "clamp(2.5rem, 6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Noto Serif KR", "AppleMyungjo", ui-serif, serif'
    fontSize: "clamp(1.953rem, 4vw, 2.441rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Noto Serif KR", "AppleMyungjo", ui-serif, serif'
    fontSize: "1.5625rem"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  body:
    fontFamily: '"IBM Plex Sans KR", "Apple SD Gothic Neo", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: '"IBM Plex Sans KR", "Apple SD Gothic Neo", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 700
spacing:
  3xs: "0.125rem"
  2xs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "4rem"
  3xl: "6rem"
  4xl: "9rem"
rounded:
  sm: "0.375rem"
  md: "0.75rem"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.75rem"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.75rem"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 0.5rem 0 1rem"
    height: "3.5rem"
  filter-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.75rem"
  filter-chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.75rem"
  status-confirmed:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.75rem"
    height: "1.75rem"
  status-pending:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning-ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.75rem"
    height: "1.75rem"
  ledger-panel:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    padding: "1.5rem"
---

# Design System: Adfree

## Overview

**Creative North Star: "The Repair Bench Ledger"**

Adfree는 전자기기 수리대에 놓인 서비스 장부를 디지털 카탈로그로 옮긴다. 따뜻한 기록용지, 짙은 잉크, 눈금을 만드는 가는 표선이 기본 재료이며, 모든 시각적 선택은 “무엇을 확인했고 무엇이 아직 대기 중인가”를 더 빨리 읽게 해야 한다.

전체 정보 구조는 앱을 홍보하는 카드 모음이 아니라 서로 연결된 기록을 훑는 **Ecosystem Index**다. 사용자는 이름이나 용도로 검색하고 필터링한 뒤, 한 후보의 검증 기록을 읽고, 확인된 공식 페이지 또는 후보임이 분명히 표시된 출처로 이동한다. 화면 밀도는 장부처럼 정보가 풍부하되, 절제된 세로 리듬과 강한 섹션 규칙으로 빠르게 훑을 수 있어야 한다.

표면은 평평하고 물성이 느껴져야 한다. 앱 스토어식 홍보 카드 배열, 근거 없는 안전·인기 배지, 상태와 무관한 장식용 강조색은 이 세계에 속하지 않는다. 이 방향은 seed `8e97caa9`에서 확정되었고 finish review의 disposition은 `ship`, material fixes는 없음으로 승인되었다.

**Key Characteristics:**

- 따뜻한 종이 면과 잉크 표선으로 만든 수리대 서비스 장부
- 확인은 녹색, 대기와 변경은 호박색으로 읽히는 증거 중심 상태 언어
- 제목용 명조와 설명용 고딕이 분리된 한국어 편집 계층
- 그림자보다 선, 여백, 종이 농도 차이로 깊이를 만드는 평면 구조
- 검색·필터에서 검증 기록과 정직한 외부 출처 표기로 이어지는 작업 흐름

## Colors

팔레트는 오래 다룬 기록지처럼 따뜻하고 낮은 채도를 유지하며, 상태색만 명확한 기능적 대비를 가진다.

### Primary

- **Confirmed Green** (`colors.accent`): 공식 출처 확인과 설치 검증 완료를 나타내는 유일한 긍정 상태색이다.
- **Confirmed Wash** (`colors.accent-soft`): 확인 배지와 선택 범위의 배경에만 사용해 녹색 표시를 읽기 쉽게 만든다.
- **Paper on Green** (`colors.accent-ink`): 짙은 녹색 위에서 종이색 대비가 필요한 경우의 전경색이다.

### Secondary

- **Pending Amber** (`colors.warning`): 출처 검토, Windows 설치 검증 대기, 변경 재검토처럼 미완료 상태를 표시한다.
- **Pending Wash** (`colors.warning-soft`): 대기 배지와 주의 메모의 배경이다.
- **Dark Amber Ink** (`colors.warning-ink`): 밝은 호박색 면 위의 설명 텍스트를 안정적으로 읽게 한다.

### Tertiary

- **Exception Red** (`colors.danger`): 등재 기준 미충족, 오류, 무효 입력에만 쓴다.
- **Exception Wash** (`colors.danger-soft`): 실패 상태의 낮은 강도 배경이다.
- **Keyboard Blue** (`colors.focus`): 키보드 초점 윤곽선에만 쓰는 접근성 신호다.

### Neutral

- **Warm Record Paper** (`colors.paper`): 전체 캔버스와 기본 입력·버튼 면이다.
- **Ledger Stock** (`colors.paper-2`): 검색 제어부, 범위 장부, 선택 행처럼 한 단계 구분되는 기록 면이다.
- **Handling Tint** (`colors.paper-3`): 호버 중인 종이 표면에만 드러나는 가벼운 변화다.
- **Bench Ink** (`colors.ink`): 주요 본문, 제목, 굵은 규칙, 선택된 제어의 기준색이다.
- **Secondary Ink** (`colors.ink-soft`): 요약, 보조 설명, 기본 칩 텍스트에 사용한다.
- **Pencil Note** (`colors.muted`): 날짜, 레이블, 도움말, 부차 메타데이터에 사용한다.
- **Ledger Rule** (`colors.rule`): 섹션 내부의 가장 가는 분리선이다.
- **Measured Rule** (`colors.rule-strong`): 행 경계와 입력 테두리처럼 더 분명한 구조선이다.

### Named Rules

**The Evidence Color Rule.** 녹색은 확인된 증거, 호박색은 대기 또는 변경, 빨간색은 실패에만 사용한다. 상태와 관계없는 장식에는 세 색을 쓰지 않는다.

**The Paper Dominance Rule.** 한 화면의 대부분은 종이와 잉크 중립색이어야 하며, 상태색은 기록을 찾게 하는 작은 표식으로 남는다.

## Typography

**Display Font:** Noto Serif KR (AppleMyungjo 및 시스템 명조 대체)

**Body Font:** IBM Plex Sans KR (Apple SD Gothic Neo 및 시스템 고딕 대체)

**Character:** 단단한 명조 제목이 기록의 주제를 세우고, 중립적인 고딕 본문이 날짜·상태·근거를 빠르게 전달한다. 두 서체 모두 한국어 줄바꿈과 숫자 기록을 우선한다.

### Hierarchy

- **Display** (700, `clamp(2.5rem, 6vw, 5.25rem)`, 1.18): 첫 화면 선언과 주요 문서 제목에만 사용하며, 짧은 행과 강한 줄바꿈을 유지한다.
- **Headline** (700, `clamp(1.953rem, 4vw, 2.441rem)`, 1.18): 카탈로그, 검증 기록, 가이드의 큰 섹션 제목이다.
- **Title** (700, `1.5625rem`, 1.18): 앱 이름과 행·패널 안의 소제목이다.
- **Body** (400, `1rem`, 1.62): 설명과 근거 본문이다. 주요 설명은 대체로 38–42rem 안에서 읽히게 한다.
- **Label** (700, `0.875rem`): 검색 레이블, 필터 이름, 동작 텍스트처럼 조작과 기록 구조를 구분한다.

### Named Rules

**The Ledger Voice Rule.** 명조는 주제와 이름을 선언하고, 고딕은 상태와 근거를 설명한다. 장식적 명조를 메타데이터나 조작 레이블까지 확장하지 않는다.

## Layout

기본 컨테이너는 `min(100% - clamp(2rem, 8vw, 8rem), 90rem)`으로, 320px 화면에서도 양쪽에 최소 1rem 여백을 남긴다. 세로 간격은 0.125rem부터 9rem까지의 토큰 스케일을 사용하되, 홈의 섹션과 앱 행은 1–4rem 범위의 간격을 중심으로 조밀하게 구성한다. 큰 여백만으로 섹션을 나누지 않고 1px·2px 규칙선을 함께 사용한다.

첫 화면은 좁은 화면에서 선언·검색·검증 현황 장부가 한 열로 흐르고, 52rem부터 비대칭 두 열이 된다. 카테고리는 40rem 미만에서 한 개의 선택 상자로, 그 이상에서 여러 필터 칩으로 표시한다. 앱 기록은 모바일에서 세로 장부 행, 40rem부터 3열 메타데이터와 한 줄의 상태·동작, 60rem부터 정체성·장부·상태·동작의 네 열로 바뀐다. 카테고리 인덱스는 30rem부터 2열, 60rem부터 3열이며, 70rem부터 검색과 필터 제어부도 두 열로 넓어진다.

헤더는 4.75rem 높이의 sticky 기록 표지다. 40rem부터 검색 제어가 전체 필드로 펼쳐지고, 60rem부터 데스크톱 내비게이션이 나타난다. 콘텐츠는 임의 카드 폭보다 행과 표의 공통 기준선을 우선하며, 날짜와 버전 숫자에는 tabular numerals를 사용한다.

## Elevation & Depth

기본 화면은 그림자가 없는 평면 장부다. 깊이는 종이 농도 차이, 1px 머리선, 2px 굵은 규칙, 섹션 여백으로 표현한다. 그림자는 문맥 위에 실제로 떠 있는 모바일 메뉴와 검색 대화상자에만 허용한다.

### Shadow Vocabulary

- **Dropdown Lift** (`0 0.5rem 1.5rem oklch(24% 0.022 78 / 0.12)`): 모바일 메뉴가 문서 위에 열린 경우의 짧은 분리다.
- **Dialog Lift** (`0 1rem 4rem oklch(24% 0.022 78 / 0.12)`): 가운데 검색 대화상자의 더 넓고 옅은 분리다.

### Named Rules

**The Flat Ledger Rule.** 정지한 콘텐츠 면에는 그림자를 쓰지 않는다. 오버레이나 임시 메뉴처럼 실제로 쌓임 순서가 바뀔 때만 그림자를 허용한다.

## Shapes

형태 언어는 직사각형 장부와 기능적인 작은 곡선의 조합이다. 큰 콘텐츠 영역과 표는 모서리를 둥글리지 않고 선으로 끝내며, 클릭 가능한 버튼·입력은 작게 굽은 모서리(0.375rem)를 사용한다. 대화상자와 메뉴처럼 독립된 떠 있는 면은 중간 곡선(0.75rem), 필터와 상태 표식은 완전한 pill(999px)을 사용한다.

모든 상태 배지는 작은 원형 점을 안에 두어 색상만으로 상태를 전달하지 않는다. 아이콘은 채우지 않은 2px 잉크 선으로 그리고, 장식용 아이콘보다 검색·이동 같은 실제 기능에 제한한다.

## Components

### Buttons

버튼은 작고 단단한 작업대 제어처럼 느껴져야 한다.

- **Shape:** 작게 굽은 직사각형(0.375rem), 최소 높이 2.75rem이며 coarse pointer에서는 3rem이다.
- **Primary:** 잉크 면 위 종이색 텍스트, 좌우 1rem 여백으로 공식 페이지 이동 같은 가장 중요한 동작에 쓴다.
- **Hover / Focus:** 호버에서 1px 올라가고, active에서 1px 내려간다. focus-visible은 2px Keyboard Blue 윤곽선과 0.25rem 간격을 사용한다.
- **Outline:** 종이 면, 잉크 테두리와 텍스트로 보조 외부 이동이나 전체 보기 동작을 표시한다.
- **Text Link:** 테두리 없이 밑줄을 유지하며 검증 기록, 기준, 보조 이동에 쓴다.

### Chips

필터 칩은 분류 라벨이 아니라 현재 질의를 바꾸는 조작이다.

- **Style:** 기본은 종이 면과 강한 규칙선, Secondary Ink 텍스트, pill 형태, 최소 높이 2.75rem이다.
- **State:** 선택된 칩은 잉크 면과 종이색 텍스트로 완전히 뒤집는다. 초록색 선택 상태를 쓰지 않아 “확인됨” 의미와 섞이지 않게 한다.
- **Responsive:** 40rem 미만에서는 긴 칩 묶음을 레이블이 있는 기본 선택 상자로 바꿔 첫 결과가 지나치게 아래로 밀리지 않게 한다.

### Cards / Containers

독립 카드 대신 같은 기준선을 공유하는 장부 행과 패널을 사용한다.

- **Corner Style:** 앱 행, 범위 장부, 검증 표는 직각이며 둥근 외곽 카드로 감싸지 않는다.
- **Background:** 기본 기록은 Warm Record Paper, 제어부와 범위 요약은 Ledger Stock을 사용한다.
- **Shadow Strategy:** 일반 콘텐츠에는 그림자가 없고 굵은 상·하단 규칙과 가는 행 구분선으로 묶는다.
- **Border:** 2px 잉크 규칙은 섹션 시작·끝, 1px 규칙은 내부 행과 셀을 구분한다.
- **Internal Padding:** 앱 행은 모바일에서 1.5rem, 60rem 이상에서 1rem의 세로 여백을 사용한다. 제어·요약 패널은 1.5–2.5rem을 사용한다.

### Inputs / Fields

검색 필드는 장부에서 기록을 찾는 핵심 도구로, 주변 제어보다 넓고 또렷하다.

- **Style:** Warm Record Paper 면, 1px Measured Rule 테두리, 0.375rem 모서리, 최소 높이 3.5rem이다.
- **Focus:** 내부 입력의 기본 윤곽선 대신 전체 필드가 2px Keyboard Blue 외곽선을 얻는다.
- **Error / Disabled:** 오류는 Exception Red 테두리, 성공은 Confirmed Green 테두리, disabled는 52% 불투명도를 사용한다.

### Navigation

헤더는 종이 면과 하단 머리선으로 문서에 붙어 있는 sticky 표지다. 워드마크는 명조로 쓰고 마침표만 Confirmed Green을 사용한다. 현재 페이지는 잉크 텍스트와 녹색 밑줄로 표시하며, 모바일 메뉴는 60rem 미만에서 compact details 패널로 바뀐다. 검색은 40rem 미만에서 원형 아이콘 버튼, 그 이상에서 레이블과 단축키가 있는 pill 필드다.

### Status Badges

상태 배지는 색, 짧은 한국어 레이블, 원형 표식을 함께 사용한다. 확인·검증 완료는 Confirmed Green/Confirmed Wash, 검토·변경 대기는 Pending Amber/Pending Wash, 기준 미충족은 Exception Red/Exception Wash다. 모든 배지는 최소 높이 1.75rem의 pill이며 서로 같은 시각 무게를 유지한다.

### Verification Record

검증 기록은 사용자가 외부 출처를 열기 전에 증거 상태를 판단하는 서명 패턴이다. 상단에는 앱 이름과 “검증 기록 먼저 보기” 링크를 두고, 본문에서 공식 출처 상태와 Windows 설치 상태를 분리한다. 도메인·안정 버전·라이선스·계정·포터블·자동 감지 항목은 공통 표선 위에서 읽히며, 마지막 동작 문구는 확인 상태에 따라 “공식 다운로드 페이지” 또는 “검토 중인 후보 출처”로 명확히 달라져야 한다.

## Do's and Don'ts

### Do:

- **Do** 검색과 필터 결과에서 상태, 확인 날짜, 공식 또는 후보 도메인을 같은 장부 행에 보여준다.
- **Do** 확인된 공식 출처와 Windows 설치 검증을 서로 독립된 상태로 표시한다.
- **Do** 녹색·호박색·빨간색을 증거 상태에만 연결하고 텍스트 레이블과 함께 쓴다.
- **Do** 종이 면, 잉크 규칙, 세로 여백으로 정보 계층을 만든다.
- **Do** 320px, 키보드 탐색, visible focus, reduced motion을 기본 품질 기준으로 유지한다.

### Don't:

- **Don't** 후보 앱을 홍보 카드, 별점, 인기 순위, 추천 점수로 표현한다.
- **Don't** 공식 출처 확인을 Windows 설치 검증 완료처럼 보이게 합치지 않는다.
- **Don't** 검토 중인 링크를 “공식 다운로드”라고 부르거나 상태 표기를 생략하지 않는다.
- **Don't** 정지한 행과 패널에 그림자·그라디언트·장식용 강조색을 추가하지 않는다.
- **Don't** 좁은 화면에서 표를 억지로 가로 스크롤시키거나 핵심 상태와 동작을 숨기지 않는다.
