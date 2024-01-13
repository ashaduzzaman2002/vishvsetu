// SuccessModal.js
import React from "react";
import { Modal, Fade, Button, Typography, Stack } from "@mui/material";

const SuccessModal = ({ open, handleClose }) => {
  return (
    <Modal
      className="fixed inset-0 flex items-center justify-center"
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <div className="bg-white p-8 rounded text-center shadow-lg relative z-50">
          <div class="w-12 h-12 rounded-full bg-green-100  p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-green-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Success</span>
          </div>

          <Typography variant="h5" className="mb-4">
            Submission Successful!
          </Typography>
          <Typography variant="body1" className="mb-4">
            We will connect with you soon.
          </Typography>

          <Stack direction={"row"} justifyContent={"center"}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
            >
              Close
            </Button>
          </Stack>
        </div>
      </Fade>
    </Modal>
  );
};

export default SuccessModal;
