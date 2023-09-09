import DealsOfWeeks from "../home/DealsOfWeeks"
import SeasonOffer from "../home/SeasonOffer"
import SpecialOffer from "../home/SpecialOffer"


const index = () => {
    return (
        <div>
          <SeasonOffer/>
          <DealsOfWeeks/>
          <SpecialOffer/>
        </div>
    )
  }
  
  export default index