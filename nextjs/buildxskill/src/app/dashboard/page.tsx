import { getData } from "@/actions/todoAction";
import Todos from "@/components/todo/todos";


export default async function DashboardPage() {
  const data = await getData();
  return <Todos todos={data} />;
}
