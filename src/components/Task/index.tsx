import * as S from './styles';
import { Trash } from '@styled-icons/entypo/Trash';
interface TaskProps {
  task: string;
  isOk: boolean;
  onChangeStatus: () => void;
  deleteTask: () => void;
}

export const Task = ({ task, isOk, onChangeStatus, deleteTask }: TaskProps) => {
  return (
    <S.Task isOk={isOk}>
      <p>{task}</p>
      <div>
        <S.Check type="checkbox" onClick={onChangeStatus} />
        &nbsp; &nbsp;
        <Trash size={15} onClick={deleteTask} />
      </div>
    </S.Task>
  );
};
