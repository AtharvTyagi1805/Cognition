const WhyParticipateCardLayout = (props) => {
  return (
    <div
      className={
        "h-60 w-[30%] my-6 flex justify-evenly items-center flex-col rounded-md bg-gradient-to-b from-pink-100 to-pink-300" +
        props.data.backgroundClr
      }
    >
      <img src={props.data.image} className="w-1/2" />
      <p>{props.data.content}</p>
    </div>
  );
};

export default WhyParticipateCardLayout;
