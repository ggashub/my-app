import { Button, Grid } from "@mui/material";

type FormSettings = {
  colNum: number
};

export default function BasicForm(formSettings: FormSettings) {
  return (
    <Grid container justifyContent="center" spacing={4} sx={{ textAlign: 'center' }}>
      {[...Array(formSettings.colNum)].map((e, i) => {
        return (
          <Grid item xs={4}>
            <Button variant="contained">
              Model {i}
            </Button>
          </Grid>
        )
      })}
    </Grid>
  );
}