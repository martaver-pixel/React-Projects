interface DiceProps {
  num: number;
}
const Die = ({ num }: DiceProps) => {
  return (
    <>
      <img
        src={`die${num}.svg`}
        alt={`die${num}.svg`}
        style={{ width: '30vh' }}
      />
    </>
  );
};

export default Die;
