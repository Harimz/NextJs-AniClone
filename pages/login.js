import React, { useState } from "react";
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
import { loginOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useIsDark } from "../hooks";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm(loginOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { isDark } = useIsDark();
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      const user = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (user.error) {
        throw new Error(user.error);
      }

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
          <Text>{error.email?.message}</Text>
          <Text>{error.password?.message}</Text>
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
              placeholder="Password"
              type="password"
              {...register("password")}
              mb="2rem"
            />

            <Button variant="form" type="submit">
              {isLoading ? <Spinner /> : "Login"}
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

export default LoginPage;
