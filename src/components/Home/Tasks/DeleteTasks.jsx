import { useState } from "react";
import {
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  LinearProgress
} from '@mui/material';
import { deleteAllTasks } from "../../../API/API";
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteTasks = ({ title, adminId, isReq }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteDialog() {
    setOpenDelete(openDelete => !openDelete);
  }

  async function handleDeleteAll() {
    setIsLoading(true)

    const deleteTasks = await deleteAllTasks({ adminId });

    if (deleteTasks?.status === 200) {
      handleDeleteDialog();
      setIsLoading(false)
      isReq(req => !req);
    }
  }

  return (
    <Stack alignSelf="flex-start">
      <Button
        disableRipple
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        sx={{
          textTransform: "none",
        }}
        onClick={handleDeleteDialog}
      >
        {title}
      </Button>
      <Dialog
        open={openDelete}
        onClose={handleDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {isLoading && <LinearProgress />}
        <DialogTitle id="alert-dialog-title">
          Delete All Tasks?
        </DialogTitle>

        <Divider variant="middle" />

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"Are You Sure? Sure Sure?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialog}> {"Mission Abort"}</Button>
          <Button onClick={handleDeleteAll}>
            {"Delete All"}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
