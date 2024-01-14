import { deleteReservation } from "@/app/actions";

//This button will call the deleteReservation action on the reservation if clicked, it takes the ID
//of the reservation so that it can run the function on that specific reservation
export default function DeleteReservation({id}: {id:string}) {
  const handleDeleteReservation = deleteReservation.bind(null, id);

  return  (
  <form action={handleDeleteReservation}>
  <button className="rounded-md border p-2 hover:bg-gray-100">
    Delete
  </button>
</form>)
}