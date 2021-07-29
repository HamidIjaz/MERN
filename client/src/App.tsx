import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form from "./Components/Form";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import UpdateUser from "./Components/UpdateUser";
import Posts from "./Components/Posts";
import FormPost from "./Components/FormPost";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Error from "./Components/Error";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className={classes.margin}
          >
            Home
          </Button>
        </Link>

        <Switch>
          <Route exact path="/" component={Home} />.
          <Route path="/create" component={Form} />
          <Route path="/createPost" component={FormPost} />
          <Route path="/posts" component={Posts} />
          <Route path="/wrongUser" component={Error} />
          <Route path="/update/user/:id" component={UpdateUser} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
