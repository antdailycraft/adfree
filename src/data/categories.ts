export const categories = [
  { id: "archive", label: "압축", description: "파일 묶기와 압축 해제" },
  { id: "files", label: "파일 검색·관리", description: "빠른 검색과 탐색기 보완" },
  { id: "documents", label: "PDF·문서", description: "문서 보기와 기본 편집" },
  { id: "media", label: "동영상·음악", description: "재생과 미디어 변환" },
  { id: "images", label: "이미지", description: "사진 보기와 편집" },
  { id: "capture", label: "화면 캡처·녹화", description: "스크린샷과 화면 기록" },
  { id: "backup", label: "백업·동기화", description: "파일 보존과 기기 간 동기화" },
  { id: "security", label: "비밀번호·보안", description: "자격 증명과 암호화" },
  { id: "system", label: "시스템 도구", description: "Windows 설정과 상태 확인" },
  { id: "text", label: "텍스트 편집", description: "메모와 코드 편집" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export const categoryById = Object.fromEntries(
  categories.map((category) => [category.id, category]),
) as Record<CategoryId, (typeof categories)[number]>;
