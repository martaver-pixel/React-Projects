import { StyledCoinContainer } from '../styles';
interface CoinProps {
  side: string;
}
const Coin = ({ side }) => {
  return (
    <StyledCoinContainer>
      <img src={`../public/img/${side}.jpg`} alt={side} width='200px' />
    </StyledCoinContainer>
  );
};

export default Coin;
