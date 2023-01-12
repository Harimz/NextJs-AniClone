import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { loginOptions } from "../utils";
import { useForm } from "react-hook-form";
import { useIsDark } from "../hooks";

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
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
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
              {isLoading ? "Loading..." : "Sign Up"}
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
