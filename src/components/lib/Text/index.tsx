import { theme } from "~/theme/variables";
import { StyledText } from "./style";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.typography.fontSize;
  fw?: keyof typeof theme.typography.fontWeight;
}

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
