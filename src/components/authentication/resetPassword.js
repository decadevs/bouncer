import React, { useState } from "react";
import Input from "../form/input";
import { resetPasswordValidation } from "./validation";
import { Formik } from "formik";
import { Wrapper, CustomButton } from "./styles";
import { connect, useSelector } from "react-redux";
import { resetPasswordAction } from "../../actions/resetPassword.action";
import izitoast from "izitoast";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";

const Password = props => {
  const param = new URLSearchParams(window.location.search);
  const resetToken = param.get("token") || null;
  const [resetPasswordSent, setResetPasswordSent] = useState(false);

  const {
    resetPasswordReducer: {
      passwordResetSuccess,
      passwordResetFail,
      passwordResetSending
    }
  } = useSelector(state => state);

  useEffect(() => {
  }, []);

  return (
    <Wrapper className="form mt-6">
      <Formik
        initialValues={{ token:resetToken,password: "" }}
        validationSchema={resetPasswordValidation}
        onSubmit={async values => {
          await props.resetPasswordAction(values);
          setResetPasswordSent(true);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name="token"
              medium
              label={resetToken?"":"Token:"}
              type={resetToken?"hidden":"text"}
              onChange={handleChange}
              value={values.token}
              disabled={resetToken?true:false}
            />
            {errors.password ? errors.password : null}
            <Input
              name="password"
              medium
              label="Reset Password:"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password ? errors.password : null}

            <CustomButton
              className="d-flex justify-content-center"
              btndangerDark
              btnLarge
              type="submit"
            >
              {(passwordResetSending && <BeatLoader color="#fff" size={5} />) ||
                "Submit"}
            </CustomButton>
          </form>
        )}
      </Formik>

      {passwordResetSuccess && resetPasswordSent === true
        ? izitoast.show({
            messageColor: "white",
            title: "Success:",
            backgroundColor: "green ",
            titleColor: "white",
            timeout: 5000,
            message: "Password Reset Successful",
            onClosed: setResetPasswordSent(false)
          })
        : passwordResetFail.length > 1 && resetPasswordSent === true
        ? izitoast.show({
            messageColor: "white",
            title: "Error:",
            backgroundColor: "red",
            titleColor: "white",
            timeout: 5000,
            message: passwordResetFail,
            onClosed: setResetPasswordSent(false)
          })
        : null}
    </Wrapper>
  );
};

const mapDispatchToProps = {
  resetPasswordAction
};
export default connect(null, mapDispatchToProps)(Password);
