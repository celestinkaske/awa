import { useParams } from "react-router-dom";

export default function Day() {
  const { dayId } = useParams();
  return <div>{dayId}</div>;
}
