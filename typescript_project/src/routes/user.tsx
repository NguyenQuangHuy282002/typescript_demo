import { useParams } from "react-router-dom";
import { getUser } from "../data";

export default function User() {
  let params = useParams();
  let user = getUser(params.userName!);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Name: {user!.name}</h2>
      <p>Age: {user!.age}</p>
      <p>Address: {user!.address}</p>
    </main>
  );
}
