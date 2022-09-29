import styled from "styled-components";
import { theme } from "~/theme/variables";

type StyledTextProps = {
  // fixme: these types are not correct
  color: keyof typeof theme.colors;
  size: keyof typeof theme.typography.fontSize;
  fw: keyof typeof theme.typography.fontWeight;
};

const StyledText = styled.span<StyledTextProps>`
  color: ${(props) => props.theme.colors[props.color] || "inherit"};
  font-size: ${(props) => props.theme.typography.fontSize[props.size]};
  font-weight: ${(props) => props.theme.typography.fontWeight[props.fw]};
`;

type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

const Text: React.FC<TextProps & StyledTextProps> = ({
  children,
  color,
  size,
  fw,
  className,
}) => {
  return (
    <StyledText color={color} size={size} fw={fw} className={className}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  size: "base",
  fw: "normal",
};

export default Text;
