import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { JSX, ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: (close: () => void) => ReactNode;
};

const ModalComponent = ({
  open,
  onClose,
  title,
  children,
}: Props): JSX.Element => (
  <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
    {title && (
      <DialogTitle>
        {title}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    )}
    <DialogContent>{children(onClose)}</DialogContent>
  </Dialog>
);

export default ModalComponent;
