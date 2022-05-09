import styled from 'styled-components';

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transistion: all 0.3s ease;
`;
