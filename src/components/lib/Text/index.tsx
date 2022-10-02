import styled from "styled-components";
import { theme } from "~/theme/variables";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.typography.fontSize;
  fw?: keyof typeof theme.typography.fontWeight;
}

const StyledText = styled.span<any>`
  color: ${({ theme, color }) => theme.colors?.[color] || "inherit"};
  font-size: ${({ theme, size }) =>
    theme.typography.fontSize?.[size] || "inherit"};
  font-weight: ${({ theme, fw }) =>
    theme.typography.fontWeight?.[fw] || "inherit"};
`;

const Text: React.FC<TextProps> = ({
  children,
  color,
  size,
  fw,
  className,
  ...props
}) => {
  return (
    <StyledText
      color={color}
      size={size}
      fw={fw}
      className={className}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
