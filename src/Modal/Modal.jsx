import { Component } from "react";
import { Button } from "../Button/Button";
import { ModalStyled, Overlay } from './Modal.styled.js'

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEsc);
  }
  onEsc = (e) => {
    if (e.code === "Escape") this.props.closeModal();
  };
  render() {
    const { poster, closeModal } = this.props;
    return (
      <Overlay>
        <ModalStyled>
          <img src={`https://image.tmdb.org/t/p/w400${poster}`} alt="" />
          <Button text="Close" handleClick={closeModal} />
        </ModalStyled>
      </Overlay>
    );
  }
}
