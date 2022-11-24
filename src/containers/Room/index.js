const Room = (props) => {
  const { title, building, floor, isBooked, isBookedColor, notBookedColor } =
    props;
  return (
    <div>
      <span>{title}</span>
      <span>{building}</span>
      <span>{floor}</span>
      <span>{isBooked}</span>
      <span>{isBookedColor}</span>
      <span>{notBookedColor}</span>
    </div>
  );
};
export default Room;
