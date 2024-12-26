/**
 * Formats an ISO 8601 date string into a more readable format.
 * Example: "2024-04-15T10:30:00Z" -> "Apr 15, 2024 10:30 AM"
 *
 * @param isoDate - The ISO 8601 date string.
 * @returns The formatted date string or "Invalid Date" if the input is invalid.
 */
export function formatDate(isoDate: string): string {
  const date: Date = new Date(isoDate);

  // Check for invalid date
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  // Define options for formatting
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short', // e.g., "Apr"
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // 12-hour format
  };

  return date.toLocaleString(undefined, options);
}

/**
 * Formats an ISO 8601 date string into a relative time string.
 * Example: "2024-04-15T10:30:00Z" -> "2 hours ago"
 *
 * @param isoDate - The ISO 8601 date string.
 * @returns The relative time string or "Invalid Date" if the input is invalid.
 */
export function formatRelativeDate(isoDate: string): string {
  const date: Date = new Date(isoDate);
  const now: Date = new Date();

  // Check for invalid date
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  const diffInSeconds: number = Math.floor(
    (now.getTime() - date.getTime()) / 1000,
  );

  if (diffInSeconds < 0) {
    return 'In the future';
  }

  const intervals: { label: string; seconds: number }[] = [
    { label: 'year', seconds: 31536000 }, // 60 * 60 * 24 * 365
    { label: 'month', seconds: 2592000 }, // 60 * 60 * 24 * 30
    { label: 'week', seconds: 604800 }, // 60 * 60 * 24 * 7
    { label: 'day', seconds: 86400 }, // 60 * 60 * 24
    { label: 'hour', seconds: 3600 }, // 60 * 60
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}
