export const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  return dd + "/" + mm + "/" + yyyy;
};

export const getCurrentTime = (
  hour = true,
  minute = true,
  second = true,
  hour24 = true
) => {
  const time = new Date();
  let temp = {};
  if (hour) {
    temp = { ...temp, hour: "2-digit" };
  }
  if (minute) {
    temp = { ...temp, minute: "2-digit" };
  }
  if (second) {
    temp = { ...temp, second: "2-digit" };
  }

  return time.toLocaleString("en-US", { ...temp, hour12: false });
};

export const findGreaterTime = function (time1, time2) {
  let [time1hr, time1sec] = time1.split(":");
  let [time2hr, time2sec] = time2.split(":");
  if (time1hr > time2hr) {
    return time1;
  } else if (time1hr == time2hr) {
    if (time1sec > time2sec) {
      return time1;
    } else {
      return time2;
    }
  } else {
    return time2;
  }
};

export const mergeIntervals = function (intervals) {
  let sortedIntervals = intervals.sort(
    (a, b) => Date.parse(a[0]) - Date.parse(b[0])
  );
  let i = 1;
  while (i < sortedIntervals.length) {
    if (sortedIntervals[i][0] <= sortedIntervals[i - 1][1]) {
      let min =
        findGreaterTime(sortedIntervals[i - 1][0], sortedIntervals[i][0]) ==
        sortedIntervals[i - 1][0]
          ? sortedIntervals[i][0]
          : sortedIntervals[i - 1][0];
      let max =
        findGreaterTime(sortedIntervals[i - 1][1], sortedIntervals[i][1]) ==
        sortedIntervals[i - 1][1]
          ? sortedIntervals[i - 1][1]
          : sortedIntervals[i][1];
      sortedIntervals.splice(i - 1, 2, [min, max]);
    } else {
      i++;
    }
  }
  return sortedIntervals;
};
