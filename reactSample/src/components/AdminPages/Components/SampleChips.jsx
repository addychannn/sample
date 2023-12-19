import {Box, Chip, Grid, Stack, Typography} from "@mui/material";
import React, {Fragment} from "react";

export const SampleChips = () => {
  return (
    <Fragment>
      <Box>
        <Grid contained spacing={1}>
          <Grid item desktop={12}>
            <Typography variant="h4">Chips</Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" variant="filled" color="secondary" />
              <Chip label="Info" color="info" variant="filled" />
              <Chip label="Success" color="success" variant="filled" />
              <Chip label="Warning" color="warning" variant="filled" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
