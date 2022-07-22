import { SetStateAction } from 'react';
import * as S from './style';

interface inputProps {
  title: string;
  setTitle: (arg0: string) => void;
  addTask: (arg0: string) => void;
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const Input = ({
  setTitle,
  setIsVisible,
  addTask,
  title,
  isVisible,
}: inputProps) => {
  function handleAddTask() {
    addTask(title);
    setTitle('');
    setIsVisible(false);
  }

  return (
    <S.Container isVisible={isVisible}>
      <S.Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={() => {
          if (title.trim().length) {
            handleAddTask();
          } else {
            setIsVisible(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === 'Enter' && title.trim().length) {
            handleAddTask();
          } else if (e.code === 'Escape') {
            setIsVisible(false);
            setTitle('');
          }
        }}
      />
    </S.Container>
  );
};
