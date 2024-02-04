import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

const ConfirmationModal =({ isOpen, handleClose, handleConfirm })=>{
    return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this student?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="error" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
    )
}

export default ConfirmationModal;