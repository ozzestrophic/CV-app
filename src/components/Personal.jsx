import Input from "./Input";
import CardTab from "./CardTab";

export default function Personal({
  shownCard,
  setShownCard,
  title,
  state,
  setState,
}) {
  const cardIndex = 1;

  return (
    <>
      <CardTab
        cardIndex={cardIndex}
        title={title}
        shownCard={shownCard}
        setShownCard={setShownCard}
      />
      {shownCard === cardIndex && (
        <div className="flex flex-col justify-start gap-4">
          <Input
            inputName="name"
            index={0}
            title={"Name"}
            state={state}
            setState={setState}
          />
          <Input
            inputName="email"
            index={0}
            title={"Email"}
            state={state}
            setState={setState}
          />
          <Input
            inputName="phone"
            index={0}
            title={"Phone number"}
            state={state}
            setState={setState}
          />
          <Input
            inputName="address"
            index={0}
            title={"Address"}
            state={state}
            setState={setState}
          />
        </div>
      )}
    </>
  );
}
