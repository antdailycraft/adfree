import { readFile } from "node:fs/promises";

const reportPath = process.argv[2];
if (!reportPath) throw new Error("Usage: node scripts/render-source-issue.mjs <report.json>");
const report = JSON.parse(await readFile(reportPath, "utf8"));
const review = report.results.filter((result) => result.status === "review");

console.log("자동 점검에서 사람이 확인해야 할 변경을 발견했습니다. 이 이슈는 데이터를 자동 수정하지 않습니다.\n");
console.log(`- 점검 시각: ${report.generatedAt}`);
console.log(`- 점검 앱: ${report.checked}개`);
console.log(`- 재검토 필요: ${report.needsReview}개\n`);
console.log("| 앱 | 감지 내용 | 최종 주소 |");
console.log("|---|---|---|");
for (const item of review) {
  const message = item.messages.join("; ").replaceAll("|", "\\|");
  console.log(`| ${item.name} | ${message} | ${item.finalUrl ?? "응답 없음"} |`);
}
console.log("\n## 검토 절차\n");
console.log("1. 프로젝트의 공식 홈페이지나 소스 저장소에서 배포 주소를 다시 확인합니다.");
console.log("2. 안정판과 시험판을 구분합니다.");
console.log("3. Windows 설치 검증이 필요한 경우 상태를 완료로 바꾸지 않습니다.");
console.log("4. 확인 근거와 날짜를 데이터에 기록하고 이 이슈를 닫습니다.");
