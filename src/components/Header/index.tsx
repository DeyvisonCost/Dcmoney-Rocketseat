import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dc money" />
        <button type="button" onClick={onOpenModal}>
          nova transação
        </button>
      </Content>
    </Container>
  );
}
