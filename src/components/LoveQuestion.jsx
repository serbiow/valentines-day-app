import { useNavigate } from 'react-router-dom';
import EvadingNoButton from './EvadingNoButton';

function LoveQuestion() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/love');
  };

  return (
    <div className="love-question">
      <h1>Você me ama?</h1>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
        <button onClick={handleYesClick}>Sim</button>
        <EvadingNoButton />
      </div>
    </div>
  );
}

export default LoveQuestion;