function formatTime(minutes: number): string {
  if (isNaN(minutes) || minutes < 0) {
    return "Invalid input";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  // const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  // const formattedMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;

  const formattedHours = hours < 10 ? `${hours}` : `${hours}`;
  const formattedMinutes =
    remainingMinutes < 10
      ? `0${Math.floor(remainingMinutes)}`
      : `${Math.floor(remainingMinutes)}`;

  return `${formattedHours}H:${formattedMinutes}M`;
}

export default formatTime;
