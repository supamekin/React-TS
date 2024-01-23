import { bgCafe02 } from "../../../../assets/images";
import ContainerRegister from "../../components/containerRegister";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UserloginPages = () => {
  const schema = yup.object().shape({
    Email: yup.string().email().required("กรุณาป้อนอีเมลของคุณ"),
    Password: yup.string().min(8).max(32).required("กรุณาป้อนรหัสผ่านของคุณ"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    console.log("success submit", data);
  };

  return (
    // <InputForm
    //   header="Login."
    //   bgimages={bgCafe02}
    //   btsubmit="Login"
    //   inputs={[
    //     {
    //       label: "Email",
    //       placeholder: "Email",
    //       type: "email",
    //       value: email,
    //       onChange: handleInputChange,
    //       setValue: setEmail,
    //     },

    //   ]}
    //   inputs2={[
    //     {
    //       label: "Password",
    //       placeholder: "Password",
    //       type: "password",
    //       value: password,
    //       onChange: handleInputChange,
    //       setValue: setPassword,
    //     },
    //   ]}
    // />
    <><form action="" style={{ backgroundImage: `url(${bgCafe02})`}}>
      <ContainerRegister
        header={"Login."}
        isflexInputs={false}
        inputs={[
          {
            label: "Email",
            placeholder: "Email or Account name",
            type: "email",
            register: { ...register("Email") },
            errors: errors.Email?.message,
          },
        ]}
        inputs2={[
          {
            label: "Password",
            placeholder: "Password",
            type: "password",
            register: { ...register("Password") },
            errors: errors.Password?.message,
          },
        ]}
        bgimages={bgCafe02}
        btnSubmitName={"Sign in"}
        onSubmit={handleSubmit(onSubmitHandler)}
      />
      </form>
    </>
  );
};

export default UserloginPages;
