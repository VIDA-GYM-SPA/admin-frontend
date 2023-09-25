import { useFetch } from "../../hooks/useFetch";

interface IFetch {
  url: string;
  port: string;
}

export default function checkConnection({ url, port }: IFetch) { 
  const { error } = useFetch(url + port)

  if (error) {
    console.log(error)
  }
} 