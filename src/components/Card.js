import { IMG_CARD } from '../utils/srcs'
import { Link } from 'react-router-dom'
import { card } from '../utils/srcs'
const Card = (props) => {
  const { resdata } = props
  const { name, avgRating, cuisines, cloudinaryImageId } = resdata.info
  const { slaString } = resdata.info.sla

  const imgid = card + cloudinaryImageId

  return (
    <div
      className="card w-[280px] h-[237px] overflow-hidden m-6   rounded-xl hover:scale-[0.9]  shadow-[0_0px_1px_1px_rgba(0,0,0,0.2)]"
      style={{ fontFamily: "'Montserrat', helvetica, arial, sans-serif" }}
    >
      <div className="img">
        <img
          src={imgid}
          alt=""
          className=" h-[150px] w-[100%] object-cover rounded-xl rounded-b-none  "
        />
      </div>
      <div className="card-content pl-3 pt-1  w-max">
        <h2 className="font-semibold">{name}</h2>
        <div className="inline-block mr-3  text-xs">
          <h3>{avgRating}</h3>
        </div>
        <div className=" inline-block  text-xs">
          <h3>{slaString}</h3>
        </div>
        <h3 className="cuisine text-xs">{cuisines.join(',')}</h3>
      </div>
    </div>
  )
}

export default Card
