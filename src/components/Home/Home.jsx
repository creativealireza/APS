
import { Tasks } from "./Tasks/Tasks";
import {
    CssBaseline,
    Container,
    Stack,
    Avatar,
    Divider,
    Chip,
} from '@mui/material';

export const Home = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <Stack justifyContent="space-between" alignItems="center" spacing={3}>
                    <Stack direction="row" flexWrap="wrap">
                        <Avatar alt="Alireza" src="src" />
                    </Stack>

                    <Divider variant="middle" role="tasks" sx={{ width: "100%" }}>
                        <Chip label="ALL TASKS" />
                    </Divider>

                    <Tasks edit />

                    <Divider variant="middle" role="tasks" sx={{ width: "100%" }}>
                        <Chip label="COMPLETED TASKS" />
                    </Divider>

                    <Tasks complete />
                </Stack>
            </Container>
        </>
    )
}