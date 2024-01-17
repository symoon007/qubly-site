import {
  Button,
  Card,
  CardContent,
  Container,
  Input,
  Typography,
} from "@mui/material";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "primary.medium",
            }}
          >
            Sign Up
          </Typography>
          <Button sx={styles.buttonStart} variant="contained">
            Start Your Free Trial
          </Button>
          <Input
            placeholder="Your Primary Email"
            type="email"
            sx={styles.inputField}
          />
          <Input
            placeholder="New Password"
            type="password"
            sx={styles.inputField}
          />
          <Input
            placeholder="Re-type Password"
            type="password"
            sx={styles.inputField}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "primary.medium",
              mb: 2,
            }}
          >
            OR
          </Typography>

          {profile ? (
            <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
            </div>
          ) : (
            <button onClick={() => login()}>Sign in with Google 🚀 </button>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;

const styles = {
  buttonStart: {
    width: "100%",
    my: 2,
    height: "50px",
    fontSize: "18px",
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
  inputField: {
    border: "0.5px solid gray",
    width: "100%",
    borderRadius: "5px",
    px: 2,
    py: 1,
    mb: 2,
  },
};
