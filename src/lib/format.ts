export const formatKoreanDate = (value: string | null) => {
  if (!value) return "확인 대기";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
};

export const portableLabel = {
  yes: "포터블 제공",
  no: "설치형만 확인",
  unknown: "포터블 확인 대기",
} as const;
