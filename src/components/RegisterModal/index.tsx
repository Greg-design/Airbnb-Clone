"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return <div></div>;
};

export default RegisterModal;
