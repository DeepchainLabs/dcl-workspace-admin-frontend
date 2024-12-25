import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

export const getWeekRange = (dateString: string) => {
  const date = dayjs(dateString, "YYYY-MM-DD");

  const firstDay = date.isoWeekday(1); // Monday of the current week
  const lastDay = date.isoWeekday(7); // Sunday of the current week

  return {
    firstDay: firstDay.format("YYYY-MM-DD"),
    lastDay: lastDay.format("YYYY-MM-DD"),
  };
};

export const extractTeamSize = (team: string) => {
  if (team.includes("+")) {
    return {
      min: parseInt(team.replace("+", "")),
      max: 9999,
    };
  } else {
    const teamSize = team.split("-");
    return {
      min: parseInt(teamSize[0]),
      max: parseInt(teamSize[1]),
    };
  }
};

export const formatTimezone = (timezone: string) => {
  return timezone.replace("UTC", "");
};

export const getTimeFromSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}H:${minutes}M`;
};

export const getHoursAndMinutesFromSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return { hours, minutes };
};

export const getRoute = (user: string, workspace: string, route: string) => {
  return workspace && user
    ? `/${user}/${workspace}${route}`
    : user
    ? `/${user}${route}`
    : route;
};
