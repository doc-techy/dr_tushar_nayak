const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;
const WEEKDAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;
const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function parseUTCDate(dateInput: string | number | Date) {
  if (dateInput instanceof Date) {
    return new Date(Date.UTC(dateInput.getUTCFullYear(), dateInput.getUTCMonth(), dateInput.getUTCDate()));
  }

  if (typeof dateInput === "string") {
    const trimmed = dateInput.trim();
    if (ISO_DATE_REGEX.test(trimmed)) {
      const [year, month, day] = trimmed.split("-").map((part) => Number.parseInt(part, 10));
      return new Date(Date.UTC(year, month - 1, day));
    }
    return new Date(trimmed);
  }

  if (typeof dateInput === "number") {
    const date = new Date(dateInput);
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  }

  return new Date(NaN);
}

export function formatDate(dateInput: string | number | Date, options: Intl.DateTimeFormatOptions) {
  const date = parseUTCDate(dateInput);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const { weekday, month, day, year } = options;

  const monthShort = MONTHS_SHORT[date.getUTCMonth()];
  const dayOfMonth = String(date.getUTCDate()).padStart(2, "0");
  const weekdayLong = WEEKDAYS_LONG[date.getUTCDay()];
  const yearNumeric = String(date.getUTCFullYear());

  if (weekday === "long" && month === "short" && day === "2-digit" && !year) {
    return `${weekdayLong}, ${monthShort} ${dayOfMonth}`;
  }

  if (month === "short" && day === "2-digit" && year === "numeric" && !weekday) {
    return `${monthShort} ${dayOfMonth}, ${yearNumeric}`;
  }

  return `${yearNumeric}-${monthShort}-${dayOfMonth}`;
}

