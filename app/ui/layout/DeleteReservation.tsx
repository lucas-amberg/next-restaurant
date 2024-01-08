import { deleteReservation } from "@/app/actions";

export default function DeleteReservation({id}: {id:string}) {
  const handleDeleteReservation = deleteReservation.bind(null, id);

  return  (
  <form action={handleDeleteReservation}>
  <button className="rounded-md border p-2 hover:bg-gray-100">
    Delete
  </button>
</form>)
}