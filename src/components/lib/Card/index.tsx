import { StyledCard } from "./style";
import { theme } from "~/theme/variables";

type StyledCardProps = {
  rounded: keyof typeof theme.borderRadius;
};

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
