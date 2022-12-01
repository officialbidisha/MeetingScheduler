export const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  return mm + "/" + dd + "/" + yyyy;
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
