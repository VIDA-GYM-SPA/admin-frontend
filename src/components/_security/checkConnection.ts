import { useFetch } from "../../hooks/useFetch";

interface IFetch {
  url: string;
  port: string;
}

export default function checkConnection({ url, port }: IFetch) { 
  useFetch(url + port)

  if error
}