import { useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from '@mui/material';
import { UploadProfileImage } from "./UploadProfileImage";

export const SignUp = ({ openForm, OpenSignUp }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [ImagePreview, setImagePreview] = useState(null);
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState(0);
    const [github, setGithub] = useState("")
    const [linkedIn, setLinkedIn] = useState("")

    const handleUploadClick = () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFile?.length; i++) {
            formData.append('profilePicture', selectedFile[i]);
        }
    };

    function handleProfileImage(event) {
        setSelectedFile(event.target.files);
        setImagePreview(URL.createObjectURL(event.target.files[0]));
    }

    function handleForm(e) {
        switch (e.target.id) {
            case "fullName":
                setFullName(e.target.value)
                break;
            case "age":
                setAge(e.target.value)
                break;
            case "github":
                setGithub(e.target.value)
                break;
            case "linkedIn":
                setLinkedIn(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <Dialog
            open={openForm}
            onClose={(event, reason) => reason === 'backdropClick' ? "" : OpenSignUp()}>
            <DialogTitle>Sign Up as Admin</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter Your Info
                </DialogContentText>

                <Stack direction="row" spacing={1} alignItems="center" marginTop="1rem">
                    <TextField
                        autoFocus
                        id="fullName"
                        label="Full Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={fullName ? false : true}
                        helperText={fullName ? "" : "Enter your Full Name"}
                        onChange={handleForm}
                    />
                    <TextField
                        id="age"
                        label="Age"
                        type="number"
                        fullWidth={false}
                        variant="standard"
                        error={age >= 16 && age <= 50 ? false : true}
                        helperText={age >= 16 && age <= 50 ? "" : "(16 <= Age <= 50)"}
                        onChange={handleForm}
                    />
                </Stack>

                <Stack direction="row" alignItems="center">
                    <TextField
                        margin="dense"
                        id="github"
                        label="Github"
                        type="text"
                        variant="standard"
                        sx={{ marginRight: "5px" }}
                        error={github ? false : true}
                        helperText={github ? "" : "Github username"}
                        onChange={handleForm}
                    />
                    <TextField
                        margin="dense"
                        id="linkedIn"
                        label="LinkedIn"
                        type="text"
                        variant="standard"
                        error={linkedIn ? false : true}
                        helperText={linkedIn ? "" : "LinkedIn username"}
                        onChange={handleForm}
                    />
                </Stack>

                <UploadProfileImage
                    handleUploadClick={handleUploadClick}
                    handleProfileImage={handleProfileImage}
                    ImagePreview={ImagePreview} />
            </DialogContent>
            <DialogActions>
                <Button onClick={OpenSignUp}>Go Back</Button>
                <Button onClick={OpenSignUp}>Sign Up</Button>
            </DialogActions>
        </Dialog>
    );
}