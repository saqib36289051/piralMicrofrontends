import React from "react";
import { BASE_URL, Token } from "../util/constants";

export const useFetchHook = (url: string) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    });

    const data = await res.json();
    setData(data);
  }

  return {
    data: data?.data ?? data,
  };
};
