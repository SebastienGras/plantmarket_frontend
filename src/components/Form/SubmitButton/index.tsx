import { JSX } from "react";

import ButtonComponent from "@components/Button";

type SubmitButtonProps = {
  disabled?: boolean;
  pendingLabel: string;
  label: string;
};

const SubmitButton = ({
  disabled,
  pendingLabel,
  label,
}: SubmitButtonProps): JSX.Element => {
  return (
    <ButtonComponent
      type="submit"
      disabled={!!disabled}
      text={disabled ? pendingLabel : label}
      fullWidth={false}
    />
  );
};

export default SubmitButton;
