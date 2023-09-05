import React from "react";
import Style from "./style.module.css";
import { EagleBotLogo } from "../../components/logo/Logo";
import { useForm } from "react-hook-form";
import { GoldenButton } from "../../components/button/CustomButton";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (event) => {
    console.log("contact Send", event);
    reset();
  };
  return (
    <>
      <div className={`${Style.contact_section}`}>
        <div className={Style.logo}>
          <EagleBotLogo />
        </div>
        <h2>Drop us a Question!</h2>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Name"
            name="name"
            {...register("name", {
              minLength: {
                value: 2,
                message: "Name should be at least 2 characters long",
              },
              maxLength: {
                value: 30,
                message: "Name should not exceed 30 characters",
              },
            })}
          />
          {errors.name && (
            <p className={Style.errorMessage} role="alert">
              {errors.name.message}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className={Style.errorMessage} role="alert">
              {errors.email.message}
            </p>
          )}

          <textarea
            rows={4}
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && (
            <p className={Style.errorMessage} role="alert">
              {errors.message.message}
            </p>
          )}
          <GoldenButton
            type={"submit"}
            buttonName={"Send"}
            style={{ padding: "14px 52px" }}
          />
        </form>{" "}
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank">
            Terms of Service
          </a>{" "}
          apply.
        </p>
        <div className={Style.footer}>
          <p className={Style.copyRigthText}>
            Copyright © 2023 Eagle-Bot - An Antimatterr Product. All Rights
            Reserved.
          </p>
          <p className={Style.SupportText}>
            Contact us at support@eagle-bot.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
