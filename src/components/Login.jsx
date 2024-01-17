import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import LoginPage from "./LoginPage";

const Login = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Card sx={styles.cardContainer}>
            <CardContent>
                <Box sx={styles.headingContainer}>

              <Typography
                sx={{
                  fontSize: 32,
                  fontWeight: 700,
                  width: { xs: "100%", md: "80%",  },
                //   pl: {xs:2, md:10}
                }}
                color="primary.medium"
                gutterBottom
              >
                See why the world’s best companies use Qubly to become truly
                data-driven.
              </Typography>
                </Box>
              <Box sx={styles.dividerContainer}>
                <Divider sx={{ width: "30%" }} />
                <Typography sx={{ color: "primary.normal" }} variant="h7">
                  Trusted by
                </Typography>
                <Divider sx={{ width: "30%" }} />
              </Box>
              <Box sx={styles.brandContainer}>
                 <Box>
                <Grid sx={{ mt: 2, mr: 0 }} container spacing={3}>
                  <Grid item xs={6}>
                    <Box component={"img"} src="/assets/accenture-4.png" />
                  </Grid>

                  <Grid item xs={6}>
                    <Box component={"img"} src="/assets/react.png" />
                  </Grid>
                  <Grid item xs={6}>
                    <Box component={"img"} src="/assets/airbnb.png" />
                  </Grid>
                  <Grid item xs={6}>
                    <Box component={"img"} src="/assets/sky-4.png" />
                  </Grid>
                </Grid>
              </Box>
              </Box>
             
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
         <LoginPage/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

const styles = {
  cardContainer: {
    width: "fit-content",
    boxShadow: "none",

    alignContent: "center",
  },
  headingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dividerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ml: {xs: 'auto', md: 10}
  },
  loginContainer: {},
};
