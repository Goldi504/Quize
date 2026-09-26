import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;

  background: rgba(0, 0, 0, 0.88);

  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 16px;

  padding: 20px 30px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7);

  text-align: center;

  /* Question number */
  .number {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;

    margin: 0 0 15px;
  }

  /* Question */
  > p:not(.number) {
    color: #ffffff;

    font-size: 23px;
    font-weight: 700;

    line-height: 1.3;

    margin: 10px 0 20px;
  }
`;

type ButtonWrapperProps = {
  $correct: boolean;
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  margin: 8px 0;

  transition: all 0.2s ease;

  button {
    cursor: pointer;

    /* Smaller button */
    width: 85%;
    height: 60px;

    padding: 5px 12px;

    font-size: 18px;
    font-weight: 600;

    color: #ffffff;

    background: ${({ $correct, $userClicked }) =>
      $correct
        ? 'linear-gradient(90deg, #16a34a, #22c55e)'
        : $userClicked
        ? 'linear-gradient(90deg, #dc2626, #ef4444)'
        : 'linear-gradient(90deg, #111111, #292929)'};

    border: 1.5px solid rgba(255, 255, 255, 0.6);

    border-radius: 7px;

    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);

    transition: all 0.2s ease;
  }

  button:hover:not(:disabled) {
    transform: translateY(-1px);

    background: linear-gradient(
      90deg,
      #292929,
      #111111
    );

    border-color: #ffffff;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }

  button:disabled {
    cursor: default;
  }
`;