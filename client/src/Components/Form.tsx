import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import "./Form.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  name: string;
  email: string;
  role: number;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  role: yup.string().required(),
});

function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const history = useHistory();
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      history.push("/");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
    createUser({
      variables: {
        name: name,
        email: email,
        role: role,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          required
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          {...register("email")}
          type="text"
          required
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          {...register("role")}
          type="text"
          required
          placeholder="Role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
