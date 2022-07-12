import * as S from './style';
interface inputProps {
  title: string;
  setTitle: (arg0: string) => void;
  addTask: (arg0: string) => void;
}
export const Input = ({ setTitle, addTask, title }: inputProps) => {
  return (
    <S.Container>
      <S.Input onChange={(e) => setTitle(e.target.value)} />
      <S.Button type="button" onClick={() => addTask(title)}>
        Adicionar
      </S.Button>
    </S.Container>
  );
};
