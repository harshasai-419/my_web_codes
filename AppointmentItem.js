import './index.css'

const AppointmentItem = props => {
  const {item, starTheAppointment, key} = props
  const {date, title, id, isStarred} = item
  const year = date.getFullYear()
  const month = date.getMonth()
  const date1 = date.getDate()
  const day = date.getDay()
  console.log(key)
  const daysList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const str = `${date1} ${monthsList[month]} ${year}, ${daysList[day]}`
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const changeStar = () => {
    starTheAppointment(id)
  }
  return (
    <li className="appointments-con">
      <div>
        <p>{title}</p>
        <p>date: {str}</p>
      </div>
      <button className="star-button" testid="star">
        <img
          src={imgUrl}
          className="star-image"
          onClick={changeStar}
          alt="star"
        />
      </button>
    </li>
  )
}

export default AppointmentItem
