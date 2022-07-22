import * as S from './style';
interface inputProps {
  title: string;
  setTitle: (arg0: string) => void;
  addTask: (arg0: string) => void;
  isVisible: boolean;
}
export const Input = ({ setTitle, addTask, title, isVisible }: inputProps) => {
  return (
    <S.Container isVisible={isVisible}>
      <S.Input onChange={(e) => setTitle(e.target.value)} />
      <S.Button type="button" onClick={() => addTask(title)}>
        Add task
      </S.Button>
    </S.Container>
  );
};
