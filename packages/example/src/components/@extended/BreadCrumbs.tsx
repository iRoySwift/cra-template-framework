import React from "react";
import { Box, Breadcrumbs as MuiBreadcrumbs, Grid, Link, Typography } from "@mui/material";

interface Props {}
const BreadCrumbs: React.FC<Props> = () => {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }
    return (
        <Box sx={{ mb: 3 }} role="presentation" onClick={handleClick}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item>
                    <MuiBreadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                            Core
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </MuiBreadcrumbs>
                </Grid>
                <Grid item sx={{ mt: 2 }}>
                    <Typography variant="h5">Breadcrumbs</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
export default BreadCrumbs;
