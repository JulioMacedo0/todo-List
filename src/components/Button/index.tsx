import * as S from './styles';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

// interface ButtonProps {
//   addTask: () => void;
// }
export const Button = (/*{ addTask }: ButtonProps*/) => {
  return (
    <S.Button /*onClick={addTask}*/>
      <Plus size={30} color={'#20c57e'} />
    </S.Button>
  );
};
