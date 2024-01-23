import {
  GET_USER_API,
  POST_USER_API,
  PUT_USER_API,
  DELETE_USER_API,
} from "../../../../shared/constants";
import { useLocalStorageData } from "../../../../shared/hooks/useLocalStorageData";
import { httpServices } from "../../../../shared/services/apiService";
import { useSWRService } from "../../../../shared/services/swrService";
import {
  payloadCreateUser,
  payloadDeleteUser,
  payloadUpdateUser,
} from "../../types/payload";
import { userProfileType } from "../../types/response";

const useRegisterPage = () => {
  const { token } = useLocalStorageData();
  const urlRead = `${GET_USER_API}`;
  const urlCreate = `${POST_USER_API}`;
  const urlUpdate = `${PUT_USER_API}`;
  const urlDelete = `${DELETE_USER_API}`;

  const ReadUser = () => {
    const { data, error, isLoading, mutate } = useSWRService<
      userProfileType,
      string
    >(urlRead, token, {
      revalidateOnFocus: false,
      refreshInterval: 10000,
    });

    return {
      userData: data,
      error,
      isLoading,
      refreshUserData: mutate,
    };
  };

  const CreateUser = async (credentials: payloadCreateUser) => {
    return await httpServices.createData({
      url: urlCreate,
      credentials,
      token,
    });
  };

  const UpdateUser = async (credentials: payloadUpdateUser) => {
    return await httpServices.updateData({
      url: urlUpdate,
      credentials,
      token,
    });
  };

  const DeleteUser = async (credentials: payloadDeleteUser) => {
    const url = `${urlDelete}/${credentials.id}`;
    return await httpServices.deleteData({ url, token });
  };

  return {
    ReadUser,
    CreateUser,
    UpdateUser,
    DeleteUser,
  };
};

export { useRegisterPage };
