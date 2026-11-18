const dtf = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

/** 2026-11-18 → 2026年11月18日 */
export const fmtDate = (d: Date) => dtf.format(d);
