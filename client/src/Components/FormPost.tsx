import React, { useState } from "react";
import { CREATE_POST_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import "./Form.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  body: string;
  userId: string;
}

const schema = yup.object().shape({
  body: yup.string().required(),
  userId: yup.string().required(),
});

const FormPost = () => {
  const [body, setBody] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const history = useHistory();
  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    onError: () => {
      history.push("/wrongUser");
    },
    onCompleted: () => {
      history.push("/posts");
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
    createPost({
      variables: {
        body: body,
        userId: userId,
      },
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("body")}
          type="text"
          required
          placeholder="Enter Content"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <input
          {...register("userId")}
          type="text"
          required
          placeholder="Enter Id of Auther"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormPost;
