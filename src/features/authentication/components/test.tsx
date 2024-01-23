// InputField.tsx
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label1: string;
  placeholder1: string;
  value1: string;

  label2: string;
  placeholder2: string;
  value2: string;

  label3: string;
  placeholder3: string;
  value3: string;

  type?: string;
  value: string;
  header: string;
  title: string;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFieldProps> = ({
  label1,
  placeholder1,
  value1,
  label2,
  placeholder2,
  value2,
  label3,
  placeholder3,
  value3,
  type = "text",
  header,
  title,
  onChange,
}) => (
  <div className=" flex min-h-screen items-center justify-center ">
    <div className=" flex h-[90vh] min-w-[70%] shadow-gray-300 shadow-xl rounded-2xl max-[1000px]:bg-[url('./assets/images/bgTable.webp')] max-[1000px]:w-[100%] max-[1000px]:h-[100vh] max-[1000px]:bg-cover max-[1000px]:rounded-none max-[1200px]:w-[90vw] md:min-h-[600px] sm:min-h-[600px] max-[640px]:min-h-[700px]">
      <div className=" bg-[url('./assets/images/bgTable.webp')] bg-cover bg-center w-6/12 rounded-l-xl max-[1000px]:hidden "></div>

      <div className=" bg-gray-100 w-6/12 rounded-e-xl max-[1000px]:bg-transparent max-[1000px]:w-[80%] max-[500px]:w-[100%]">
        <div className=" p-10  calc(p-[100vw * 0.03]) max-[700px]:p-5">
          <h1 className=" text-5xl pb-6 font-medium">{header}</h1>

          <h2 className="max-[1000px]:text-white">{title}</h2>

          <div className=" my-7 ">
            <div className=" flex gap-[10px] max-[300px]:flex-col">
              <div className="w-[100%]">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  {label1}
                </label>
                <input
                  type={type}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  placeholder={placeholder1}
                  value={value1}
                  onChange={onChange}
                />
              </div>
              <div className="w-[100%]">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  {label2}
                </label>
                <input
                  type={type}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  placeholder={placeholder2}
                  value={value2}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className=" block">
              <label className="block text-gray-700 text-sm font-bold mb-1">
                {label3}
              </label>
              <input
                type={type}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                placeholder={placeholder3}
                value={value3}
                onChange={onChange}
              />
            </div>



            <div className=" flex min-h-screen items-center justify-center ">
      <div className=" flex h-[90vh] min-w-[70%] shadow-gray-300 shadow-xl rounded-2xl max-[1000px]:bg-[url('./assets/images/bgTable.webp')] max-[1000px]:w-[100%] max-[1000px]:h-[100vh] max-[1000px]:bg-cover max-[1000px]:rounded-none max-[1200px]:w-[90vw] md:min-h-[600px] sm:min-h-[600px] max-[640px]:min-h-[700px]">
        <div className=" bg-[url('./assets/images/bgTable.webp')] bg-cover bg-center w-6/12 rounded-l-xl max-[1000px]:hidden "></div>

        <div className=" bg-gray-100 w-6/12 rounded-e-xl max-[1000px]:bg-transparent max-[1000px]:w-[80%] max-[500px]:w-[100%]">
          <div className=" p-10  calc(p-[100vw * 0.03]) max-[700px]:p-5">
            <div className=" text-5xl pb-6 font-medium">
              <span className=" max-[1000px]:text-white">SOCIFY</span>
              <span className=" text-green-600">.io</span>
            </div>

            <div className="max-[1000px]:text-white">Join Socify today</div>

            <div className=" my-7 ">
              <div className=" flex gap-[10px] max-[300px]:flex-col">
                <div className="w-[100%]">
                  <InputForm
                    label="Firstname"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(event) => handleInputChange(event, setFirstname)}
                    className="border-2 p-1 h-10 mb-3 w-[100%] max-[300px]:w-[80%] max-[700px]:h-8"
                  />
                </div>
                <div className="w-[100%]">
                <InputForm
                    label="Lastname"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(event) => handleInputChange(event, setLastname)}
                    className="border-2 p-1 h-10 mb-3 w-[100%] max-[300px]:w-[80%] max-[700px]:h-8"
                  />
                </div>
              </div>
              <div className=" block">
                <InputForm
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    header="Email"
                    onChange={(event) => handleInputChange(event, setEmail)}
                    className=" border-2 w-full p-1 h-10 mb-3 max-[700px]:h-8"
                  />
              </div>
              <div className=" flex gap-[10px] max-[300px]:flex-col">
                <div className="w-[100%]">
                <InputForm
                     label="Password"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(event) => handleInputChange(event, setPassword)}
                    className=" border-2 w-full p-1 h-10 mb-3 max-[700px]:h-8"
                  />
                </div>
                <div className="w-[100%]">
                  <InputForm
                     label="Repeat Password"
                     type="Repeat Password"
                     placeholder="Repeat Password"
                     value={password}
                     onChange={(event) => handleInputChange(event, setPassword)}
                    className=" border-2 w-full p-1 h-10 mb-3 max-[700px]:h-8"
                  />
                </div>
              </div>
            </div>
            <div className=" mb-2 max-[1000px]:text-white">Account Info</div>
            <input
              type="text"
              placeholder="ACCOUNT NAME"
              className=" border-2 w-full p-1 h-10 mb-5 max-[700px]:h-8"
            />

            <button className=" rounded-md bg-green-500 p-3 text-white ">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InputForm;


    <div className=" flex min-h-screen items-center justify-center ">
      <div className=" flex h-[90vh] min-w-[70%] shadow-gray-300 shadow-xl rounded-2xl max-[1000px]:bg-[url('./assets/images/bgTable.webp')] max-[1000px]:w-[100%] max-[1000px]:h-[100vh] max-[1000px]:bg-cover max-[1000px]:rounded-none max-[1200px]:w-[90vw] md:min-h-[600px] sm:min-h-[600px] max-[640px]:min-h-[700px]">
        <div className=" bg-[url('./assets/images/bgTable.webp')] bg-cover bg-center w-6/12 rounded-l-xl max-[1000px]:hidden "></div>

        <div className=" bg-gray-100 w-6/12 rounded-e-xl max-[1000px]:bg-transparent max-[1000px]:w-[80%] max-[500px]:w-[100%]">
          <div className=" p-10  calc(p-[100vw * 0.03]) max-[700px]:p-5">
            <div className=" text-5xl pb-6 font-medium">
              <span className=" max-[1000px]:text-white">SOCIFY</span>
              <span className=" text-green-600">.io</span>
            </div>

            <div className="max-[1000px]:text-white">Join Socify today</div>

            <div className=" my-7 ">
              <div className=" flex gap-[10px] max-[300px]:flex-col">
                <div className="w-[100%]">
                  <InputForm
                    label="Firstname"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(event) => handleInputChange(event, setFirstname)}
                    className="border-2 p-1 h-10 mb-3 w-[100%] max-[300px]:w-[80%] max-[700px]:h-8"
                  />
                </div>
                <div className="w-[100%]">
                <InputForm
                    label="Lastname"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(event) => handleInputChange(event, setLastname)}
                    className="border-2 p-1 h-10 mb-3 w-[100%] max-[300px]:w-[80%] max-[700px]:h-8"
                  />
                </div>
              </div>
              <div className=" block">
                <InputForm
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    header="Email"
                    onChange={(event) => handleInputChange(event, setEmail)}
                    className=" border-2 w-full p-1 h-10 mb-3 max-[700px]:h-8"
                  />
              </div>
              <div className=" flex gap-[10px] max-[300px]:flex-col">
                <div className="w-[100%]">
                <InputForm
                     label="Password"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(event) => handleInputChange(event, setPassword)}
                    className=" border-2 w-full p-1 h-10 mb-3 max-[700px]:h-8"
                  />
                </div>
                <div className="w-[100%]">
                  <span className="block text-sm font-medium text-slate-700 max-[1000px]:text-white">
                    Repeat Password
                  </span>
                  <input
                    type="text"
                    placeholder="REPEAT PASSWORD"
                    className=" border-2 p-1 h-10 mb-3 w-[100%] max-[300px]:w-[80%] max-[700px]:h-8"
                  />
                  <InputForm
                     label="Password"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(event) => handleInputChange(event, setPassword)}
                    className=" border-2 w-full p-1 h-10 mb-3 max-[700px]:h-8"
                  />
                </div>
              </div>
            </div>
            <div className=" mb-2 max-[1000px]:text-white">Account Info</div>
            <input
              type="text"
              placeholder="ACCOUNT NAME"
              className=" border-2 w-full p-1 h-10 mb-5 max-[700px]:h-8"
            />

            <button className=" rounded-md bg-green-500 p-3 text-white ">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>