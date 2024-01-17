import { Visibility } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ pb: 10 }}>
      <Box sx={styles.bannerContainer}>
        <Box>
          <Box sx={styles.slogan}>
            <Box component={"img"} src="/assets/edit-brightness.png" />
            <Typography>v3.1 released. Learn more</Typography>
          </Box>
          <Box>
            <Typography variant="h3" sx={styles.mainHeading}>
              Your data with <br /> real-time analytics
            </Typography>
            <Typography variant="h7">
              Harness the potential of Big Data Analytics & Cloud Services
              <br /> and become a data-driven organization with Needle tail
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

        <Box sx={styles.heroImageBox} >
          <img style={styles.heroImage}  src="/assets/image 1.png" />
        </Box>
      </Box>
      {/* question container */}
      <Box sx={styles.QuestionBoxContainer}>
        <Box sx={styles.QublyQuestionContainer}>
          <Box sx={styles.questionHeader}>
            <Box sx={styles.slogan}>
              <Visibility />
              <Typography>Why Qubly</Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", mt: 3, fontWeight: 700 }}
            >
              Get actionable insights from Big Data in 3 steps
            </Typography>
            <Typography variant="h7" sx={{ textAlign: "center", mt: 3 }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod <br /> tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
            </Typography>
            <Box sx={styles.QublyFacilities}>
              <Box>
                <Box component={"img"} src="/assets/Group 18.png" />
                <Typography variant="h6" sx={{ my: 2 }}>
                  Valuable business insights
                </Typography>
                <Typography variant="h7">
                  Collect processed & cleansed data that is ready to be analyzed
                  to gather valuable business insights.
                </Typography>
              </Box>
              <Box>
                <Box component={"img"} src="/assets/newsletter-dev.png" />
                <Typography variant="h6" sx={{ my: 2 }}>
                  Powerful Algorithms
                </Typography>
                <Typography variant="h7">
                  With the help of powerful algorithms, quality rules &
                  techniques, obtain simplified & enriched data.
                </Typography>
              </Box>
              <Box>
                <Box component={"img"} src="/assets/timeline.png" />
                <Typography variant="h6" sx={{ my: 2 }}>
                  Data in real-time
                </Typography>
                <Typography variant="h7">
                  Collect data in real-time from multiple channels and move it
                  into a data lake, in its original format.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <br />
      <br /> <br /> */}
    </Container>
  );
};

export default Home;

const styles = {
  bannerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    mt: 5
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
  mainHeading: {
    fontSize: 48,
    fontWeight: 700,
    my: 3,
  },
  heroImageBox: {
  
  },
  heroImage: {
    width: "100%",
  },
  btnTrial: {
    borderRadius: "50px",
    px: 2,
    textTransform: "inherit",
    bgcolor: "primary.main",
    color: "secondary.normal",
    boxShadow: "none",
    "&:hover": {
      bgcolor: "secondary.normal",

      boxShadow: "none",
      border: "1px solid #722ED1",
      color: "primary.main",
    },
  },
  QuestionBoxContainer: {
    mt: 14,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  QublyQuestionContainer: {
    width: 950,
    maxWidth: 1200,
    mx: 5,
  },
  questionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  QublyFacilities: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(auto-fit, minmax(170px, 1fr))",
    },
    mt: 3,

    gap: 3,
    textAlign: "center",
    height: 150,
    width: "100%",
  },
};
