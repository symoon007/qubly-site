import { Box, Button, Container, Typography } from "@mui/material"


const Contact = () => {
  return (
    <Box>
      <Container sx={styles.contactContainer}>
        <Box sx={styles.prodactImg} component={"img"} src="/assets/Group 21.png" />
        <Box>
          <Box sx={styles.slogan}>
            <Box component={"img"} src="/assets/electronic-circuit.png" />
            <Typography>For Product Teams</Typography>
          </Box>
          <Box>
            <Typography variant="h3" sx={styles.contactHeading}>
              Launch with the best stack
            </Typography>
            <Typography variant="h7">
              A centralized platform that integrates zillions of data sources{" "}
              <br />
              using Big Data ELT (Extract, Load & Transform) that leaves <br />{" "}
              no data behind
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button variant="contained" sx={styles.btnTrial}>
                Start Free Trial
              </Button>

              <Button
                variant="outlined"
                sx={{ borderRadius: "50px", px: 2, textTransform: "inherit" }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* engineer team section */}

      <Box sx={styles.engineerContainer}>
        <Box>
          <Box sx={styles.slogan}>
            <Box component={"img"} src="/assets/compass.png" />
            <Typography>For Engineering Teams</Typography>
          </Box>
          <Box>
            <Typography variant="h3" sx={styles.contactHeading}>
              Data-driven pipelines in minutes
            </Typography>
            <Typography variant="h7">
              Maintenance-free data pipelines with quick set-up and <br />
              straight-forward deployments that are powered by a modern <br /> &
              scalable platform.
            </Typography>
           
          </Box>
        </Box>
        <Box sx={styles.engineerImage} component={"img"} src="/assets/image 6.png" />
      </Box>
    </Box>
  );
    // engineerin team section

    
}

export default Contact

const styles = {
  contactContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: 0, md: 11 },
    mt: 10,
  },
  prodactImg: {
    width: "100%",
    maxWidth: { xs: 350, md: 500 },
  },
  slogan: {
    display: "flex",
    gap: 1,
    bgcolor: "secondary.main",
    width: "fit-content",
    color: "primary.main",
    px: 2,
    py: 1,
    borderRadius: "40px",
  },
  contactHeading: {
    fontSize: 38,
    fontWeight: 600,
    my: 3,
  },
  engineerContainer: {
    mx: { xs: 5, md: 10 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: 0, md: 11 },
    mt: 10,
  },
  engineerImage: {
    width: "100%",
    maxWidth: 500,
  },
};