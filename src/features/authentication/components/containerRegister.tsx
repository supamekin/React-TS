import InputField from "./inputField";

type inputFielType = {
  label: string;
  placeholder: string;
  value?: string;
  type?: string;
  onChange?: (value: any) => void;
  setValue?: (value: any) => void;
  register?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  errors: string | undefined;
}[];
type ContainerRegisterType = {
  header: string;
  title?: string;
  title2?: string;
  inputs: inputFielType;
  inputs2: inputFielType;
  inputs3?: inputFielType;
  inputs4?: inputFielType;
  bgimages: string;
  btnSubmitName: string;
  onSubmit: (data: any) => any;
  isflexInputs?: boolean;
};
const ContainerRegister = ({
  header,
  title,
  title2,
  inputs,
  inputs2,
  inputs3,
  inputs4,
  bgimages,
  btnSubmitName,
  onSubmit,
  isflexInputs=true,
}: ContainerRegisterType) => {
  return (
    <div className=" flex min-h-screen items-center justify-center ">
      <div
        style={{ backgroundImage: `url(${bgimages})` }}
        className=" flex h-full min-h-[90vh] min-w-[70%] shadow-gray-300 shadow-xl rounded-2xl  max-[1000px]:w-[100%] max-[1000px]:h-[100vh] max-[1000px]:bg-cover max-[1000px]:rounded-none max-[1200px]:w-[90vw] md:min-h-[600px] sm:min-h-[600px] max-[640px]:min-h-[700px]"
      >
        <div
          style={{ backgroundImage: `url(${bgimages})` }}
          className=" bg-cover bg-center w-6/12 rounded-l-xl max-[1000px]:hidden "
        ></div>

        <form
          onSubmit={onSubmit}
          className=" bg-gray-100 w-6/12 rounded-e-xl max-[1000px]:bg-transparent max-[1000px]:w-[80%] max-[500px]:w-[100%]"
        >
          <div className=" p-10  calc(p-[100vw * 0.03]) max-[700px]:p-5">
            <div className=" text-5xl pb-6 font-medium">
              <h1 className="max-[1000px]:text-white">{header}</h1>
            </div>
            <h2 className="max-[1000px]:text-white">{title}</h2>
            <div className=" my-5 ">
              <div
                className={`w-full ${isflexInputs ? "flex": "" } gap-[10px] max-[300px]:flex-col `}
              >
                {inputs &&
                  inputs?.length > 0 &&
                  inputs.map((input) => {
                    return (
                      <InputField
                        key={input.label}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        register={input.register}
                        error={input.errors}
                      />
                    );
                  })}
              </div>
              <div className=" block max-[1000px]:w-[75%] max-[860px]:w-full">
                {inputs2 &&
                  inputs2?.length > 0 &&
                  inputs2.map((input) => {
                    return (
                      <InputField
                        key={input.label}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        register={input.register}
                        error={input.errors}
                      />
                    );
                  })}
              </div>
              <div className=" w-[100%] flex gap-[10px] max-[300px]:flex-col">
                {inputs3 &&
                  inputs3?.length > 0 &&
                  inputs3?.map((input) => {
                    return (
                      <InputField
                        key={input.label}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        register={input.register}
                        error={input.errors}
                      />
                    );
                  })}
              </div>
              <h2 className="max-[1000px]:text-white my-4 ">{title2}</h2>
              <div className=" w-[100%] flex gap-[10px] max-[300px]:flex-col">
                {inputs4 &&
                  inputs4?.length > 0 &&
                  inputs4?.map((input) => {
                    return (
                      <InputField
                        key={input.label}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        register={input.register}
                        error={input.errors}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[120px]"
                type="submit"
              >
                {btnSubmitName}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContainerRegister;
