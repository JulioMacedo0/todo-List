import * as S from './styles';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

interface ButtonProps {
  toggleInput: () => void;
}
export const Button = ({ toggleInput }: ButtonProps) => {
  return (
    <S.Button onClick={toggleInput}>
      <Plus size={30} color={'#20c57e'} />
    </S.Button>
  );
};
