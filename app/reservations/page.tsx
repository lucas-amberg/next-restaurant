import SubHeader from "../ui/layout/SubHeader"
import HeaderDesc from "../ui/layout/HeaderDesc"
import ReservationsForm from "../ui/layout/reservations/ReservationsForm"

export default async function Reservations() {

  const reservationDesc = 'Indulge in an unparalleled dining experience at Dal, where tradition meets innovation. Secure your place at our culinary haven by making a reservation. Immerse yourself in the artistry of Japanese cuisine, expertly crafted by our seasoned chefs. Whether it\'s an intimate dinner or a celebration, our reservation page ensures your spot in a world of exquisite flavors and unmatched hospitality. Join us at Dal and savor the essence of Japan, meticulously prepared for your discerning palate. Reserve your table now for a culinary journey like no other.'

  return(
    <div>
      <SubHeader text="Reservations" className="reservations-header"/>
      <HeaderDesc header="Make A Reservation" description={reservationDesc}/>
      <ReservationsForm/>
    </div>
  )
}