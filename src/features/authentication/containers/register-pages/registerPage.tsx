import { bgTable } from "../../../../assets/images";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContainerRegister from "../../components/containerRegister";
import { useRegisterPage } from "./useRegisterPage";
import { payloadCreateUser } from "../../types/payload";

const RegisterPage = () => {
  const { CreateUser } = useRegisterPage();

  const schema = yup.object().shape({
    Firstname: yup.string().required("กรุณาป้อนชื่อของคุณ"),
    Lastname: yup.string().required("กรุณาป้อนนามสกุลของคุณ"),
    Email: yup.string().email().required("กรุณาป้อนอีเมลของคุณ"),
    Password: yup.string().min(8).max(32).required("กรุณาป้อนรหัสผ่านของคุณ"),
    RepeatPassword: yup
      .string()
      .oneOf([yup.ref("Password")], "รหัสผ่านไม่ตรงกัน")
      .required("กรุณาป้อนรหัสผ่านยืนยันของคุณ"),
    AccountName: yup.string().required("กรุณาป้อนบัญชีของคุณ"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data: any) => {
    console.log("success submit", data);
    const payload: payloadCreateUser = await {
      firstname: data.Firstname,
      lastname: data.Lastname,
      accountName: data.AccountName,
      email: data.Email,
      password: data.Password,
    };
    await CreateUser(payload)
      .then((response: { data: object; status: number; msg: string }) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerRegister
      onSubmit={handleSubmit(onSubmitHandler)}
      header="SOCIFY.io"
      bgimages={bgTable}
      title="Join Socify today"
      title2="Account Info"
      btnSubmitName="Sign up"
      inputs={[
        {
          label: "Firstname",
          placeholder: "Firstname",
          register: { ...register("Firstname") },
          errors: errors.Firstname?.message,
        },
        {
          label: "Lastname",
          placeholder: "Lastname",
          register: { ...register("Lastname") },
          errors: errors.Lastname?.message,
        },
      ]}
      inputs2={[
        {
          label: "Email",
          placeholder: "Email",
          type: "email",
          register: { ...register("Email") },
          errors: errors.Email?.message,
        },
      ]}
      inputs3={[
        {
          label: "Password",
          placeholder: "Password",
          type: "password",
          register: { ...register("Password") },
          errors: errors.Password?.message,
        },
        {
          label: "Repeat Password",
          placeholder: "Repeat Password",
          type: "password",
          register: { ...register("RepeatPassword") },
          errors: errors.RepeatPassword?.message,
        },
      ]}
      inputs4={[
        {
          label: "Account Name",
          placeholder: "Account Name",
          register: { ...register("AccountName") },
          errors: errors.AccountName?.message,
        },
      ]}
    />
  );
};

export default RegisterPage;
