import React, { useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { DELETE_USER_MUTATION } from "../GraphQL/Mutations";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface UserType {
  id: string;
  name: string;
  email: string;
  role: string;
}

const GetUsers = () => {
  const history = useHistory();
  const classes = useStyles();
  const [users, setUsers] = useState<UserType[]>([]);
  const { error, loading, data, refetch } = useQuery(LOAD_USERS, {
    nextFetchPolicy: "network-only",
  });
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);

  const DeleteUser = (id: string) => {
    deleteUser({
      variables: {
        id,
      },
    });
    refetch();
  };

  useEffect(() => {
    refetch();
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <h1>All Users</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Link to={`/update/user/${user?.id}`}>
                  <Button color="primary">Update User</Button>
                </Link>
                <Button
                  color="secondary"
                  onClick={() => {
                    DeleteUser(user.id);
                    refetch();
                  }}
                >
                  Detele User
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GetUsers;
