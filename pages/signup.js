import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { signupOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useIsDark } from "../hooks";
import { useRegisterUserMutation } from "../app/services/userApi";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm(signupOptions);
  const { isDark } = useIsDark();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data);

      if (user.error) {
        throw new Error(user.error.data.message);
      }

      await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      router.push("/");
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      toast({
        title: (
          <Flex flexDir="column" gap="0.5rem">
            <Text>{errorMessage}</Text>
          </Flex>
        ),
        status: "error",
        isClosable: true,
        variant: "subtle",
        position: "top",
      });
    }
  };

  const onError = (error) => {
    toast({
      title: (
        <Flex flexDir="column" gap="0.5rem">
          <Text>{error.username?.message}</Text>
          <Text>{error.email?.message}</Text>
          <Text>{error.password?.message}</Text>
          <Text>{error.confirmPassword?.message}</Text>
        </Flex>
      ),
      status: "error",
      isClosable: true,
      variant: "subtle",
      position: "top",
    });
  };

  return (
    <>
      <Container
        maxW="25rem"
        w="95%"
        bgColor={isDark ? "blue.400" : "white"}
        mt="5rem"
        p={{ base: "1rem", lg: "3rem" }}
        mb="25rem"
      >
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Flex direction="column" align="center">
            <Heading size="lg" color="gray.400" textAlign="center" mb="4rem">
              Sign up to AniClone
            </Heading>
            <Input
              bgColor={isDark ? "blue.700" : "gray.50"}
              variant="unstyled"
              p="0.75rem"
              color="gray.400"
              placeholder="Email"
              {...register("email")}
              mb="2rem"
            />
            <Input
              bgColor={isDark ? "blue.700" : "gray.50"}
              variant="unstyled"
              p="0.75rem"
              color="gray.400"
              placeholder="Username"
              {...register("username")}
              mb="2rem"
            />
            <Input
              bgColor={isDark ? "blue.700" : "gray.50"}
              variant="unstyled"
              p="0.75rem"
              color="gray.400"
              placeholder="Password"
              type="password"
              {...register("password")}
              mb="2rem"
            />
            <Input
              bgColor={isDark ? "blue.700" : "gray.50"}
              variant="unstyled"
              p="0.75rem"
              color="gray.400"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              mb="4rem"
            />
            <Button variant="form" type="submit">
              {isLoading ? <Spinner /> : "Sign Up"}
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default SignUpPage;
