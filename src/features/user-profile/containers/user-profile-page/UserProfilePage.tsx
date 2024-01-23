import { useState } from "react";
import { useUserProfile } from "./useUserProfilePage";

const UserProfilePage = () => {
  //hooks
  const {
    UserProfile,
    createUserProfile,
    updateUserProfile,
    deleteUserProfile,
  } = useUserProfile();
  
  const { userData, isLoading, refreshUserData } = UserProfile();

  //data
  const [email, setEmail] = useState<string>("");
  const [emailUpdate, setEmailUpdate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  // //handle
  // const handleCreateForm = async () => {
  //   const payload = {
  //     email: email,
  //     password: password,
  //     name: name,
  //   };
  //   await createUserProfile(payload)
  //     .then(() => {
  //       refreshUserData();
  //     })
  //     .catch((error) => {
  //       console.error("Error during create:", error);
  //     });
  // };

  // const handleUpdateForm = async (item: {
  //   id: number;
  //   name: string;
  //   email?: string;
  //   password: string | number;
  // }) => {
  //   const payload = {
  //     id: item.id,
  //     email: emailUpdate,
  //     password: item.password,
  //     name: item.name,
  //   };
  //   await updateUserProfile(payload)
  //     .then(() => {
  //       refreshUserData();
  //     })
  //     .catch((error) => {
  //       console.error("Error during create:", error);
  //     });
  // };

  // const handleDeleteForm = async (id: string | number) => {
  //   const payload = {
  //     id: id,
  //   };
  //   await deleteUserProfile(payload)
  //     .then(() => {
  //       refreshUserData();
  //     })
  //     .catch((error) => {
  //       console.error("Error during create:", error);
  //     });
  // };

  return (
    <section className=" w-screen h-screen min-h-screen p-2 flex items-center flex-col gap-4">
      {/* <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="name"
          className=" border-2 rounded-sm "
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          className=" border-2 rounded-sm "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className=" border-2 rounded-sm "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className=" rounded-md bg-blue-200 p-2"
          onClick={() => handleCreateForm()}
        >
          create
        </button>
      </div>
      <h3 className=" font-bold text-2xl">User Profile</h3>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        userData?.data &&
        userData?.data?.length > 0 &&
        userData?.data?.map((item) => (
          <div key={item?.id} className="flex gap-2 w-[400px] justify-between">
            <div>
              <input
                type="text"
                placeholder="email"
                className=" border-2 rounded-sm "
                defaultValue={item?.email}
                onChange={(e) => setEmailUpdate(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                className=" rounded-md bg-blue-200 p-2"
                onClick={() => handleDeleteForm(item.id)}
              >
                delete
              </button>
              <button
                className=" rounded-md bg-blue-200 p-2"
                onClick={() => handleUpdateForm(item)}
              >
                update
              </button>
            </div>
          </div>
        ))
      )} */}
    </section>
  );
};

export default UserProfilePage;
