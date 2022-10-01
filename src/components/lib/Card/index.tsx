import styled from "styled-components";
import { theme } from "~/theme/variables";

type StyledCardProps = {
  rounded: keyof typeof theme.borderRadius;
};

const StyledCard = styled.div<any>`
  padding: 24px;
  border-radius: ${({ rounded, theme }) =>
    theme.borderRadius?.[rounded] || theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
`;

type CardProps = {
  children?: React.ReactNode;
} & Partial<StyledCardProps>;

const Card: React.FC<CardProps> = ({ children, rounded, ...props }) => {
  return (
    <StyledCard rounded={rounded} {...props}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  rounded: "sm",
};

export default Card;
