import { Button, ButtonProps } from "./Button";

interface CTAButtonProps {
  text: string;
  href: string;
  intent?: ButtonProps["intent"];
  className?: string;
}

export default function CTAButton({ text, href, intent = "primary", className = "" }: CTAButtonProps) {
  return (
    <Button href={href} intent={intent} className={className}>
      {text}
    </Button>
  );
} 