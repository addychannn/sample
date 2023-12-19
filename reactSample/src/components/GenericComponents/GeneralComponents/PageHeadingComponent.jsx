import {Box, Stack, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";

const PageHeadingComponent = ({
  pageTitle,
  subheading,
  variant,
  subheading2,
  link,
  fontWeight,
  sx,
  icon,
}) => {
  const theme = useTheme();
  return (
    <Stack spacing={"8px"} sx={sx}>
      <Stack direction="column" spacing={2}>
        <Stack direction="row">
          <Box>{icon}</Box>
          <Typography variant="h5"> {subheading}</Typography>
        </Stack>

        <Typography variant={"h2"} sx={700} color>
          {pageTitle}
        </Typography>
      </Stack>

      <Typography variant="h5">{subheading2}</Typography>
      <Typography color="primary">{link}</Typography>
    </Stack>
  );
};

export default PageHeadingComponent;
