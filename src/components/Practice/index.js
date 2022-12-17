import { Divider, Grid, Paper, Typography, Switch, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import makeStyles from "@mui/material";
import styled from "@emotion/styled";
import { experimental_sx as sx } from "@mui/system";

const CustomPaper = styled(Paper)((props) =>
  sx({
    backgroundColor: "orange",
  })
);

const Practice = () => {
  return (
    <Container>
      <Grid container spacing={10} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={4.5} xl={4}>
          <CustomPaper
            sx={{
              color: "white",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            Practice
          </CustomPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={2} xl={4} ml={18}>
          <CustomPaper>Practice</CustomPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={2} xl={4}>
          <CustomPaper>Practice</CustomPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={2} xl={4}>
          <CustomPaper>Practice</CustomPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={4}>
          <CustomPaper>Practice</CustomPaper>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6} lg={6} xl={4}>
          <CustomPaper>Practice</CustomPaper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={4}>
          <CustomPaper>Practice</CustomPaper>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }} mt={5}>
        <Stack spacing={2} direction="row">
          <CustomPaper sx={{ width: "50%" }}>Item 1</CustomPaper>
          <CustomPaper>Item 2</CustomPaper>
          <CustomPaper>Item 3</CustomPaper>
          <CustomPaper>Item 3</CustomPaper>
          <CustomPaper>Item 3</CustomPaper>
        </Stack>
      </Box>
    </Container>
  );
};

export default Practice;
