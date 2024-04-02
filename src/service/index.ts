import axios from "axios";

type RequestTypes = "POST" | "GET" | "UPDATE" | "PUT";

export const request = async (
  url: string,
  type: RequestTypes,
  params: any,
  headers?: any
) => {
  const { data }: any = await axios({
    url: url,
    method: type,
    data: params,
    headers: headers,
  });
  return data;
};
