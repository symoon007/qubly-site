/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Container, Divider, Typography } from "@mui/material";

const Pricing = () => {
  return (
    <Container sx={{ mt: 10,pb:5, background: "#f9f0ff" }}>
      <Box sx={styles.pricingQuote}>
        <Box sx={styles.avatarContainer}>
          <Typography sx={{ textAlign: "center", mb: 4 }} variant="h6">
            "What I love about Qubly is the easy way we can collaborate even if
            there is a lot <br /> of people involved in the process"
          </Typography>
          <Avatar src="assets/Profile.png " />
          <Typography sx={{ fontWeight: 700, mt: 4 }} variant="h7">
            Guillaume Cabane <br /> CTO @ BigSpring
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Divider sx={{ width: "50%" }} />
      </Box>

      <Box sx={styles.brandImgContainer}>
        <Box component={"img"} src="assets/Tonkean.png" />
        <Box component={"img"} src="assets/Group 25.png" />
        <Box component={"img"} src="assets/Clearbit.png" />
        <Box component={"img"} src="assets/Mine.png" />
        <Box component={"img"} src="assets/Shake.png" />
      </Box>
    </Container>
  );
};

export default Pricing;

const styles = {
  pricingQuote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 4,
   
    p: 4,
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  brandImgContainer: {
    display: "grid",
   gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
   gap: 5,
    mt: 4
  }
};
