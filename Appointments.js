import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appList: [], getStarred: false}
  getTitle = event => {
    this.setState({title: event.target.value})
  }
  getDate = event => {
    this.setState({date: event.target.value})
  }
  addToList = event => {
    const {date} = this.state
    const newDate = new Date(date)
    event.preventDefault()
    this.setState(prevState => ({
      appList: [
        ...prevState.appList,
        {
          id: uuidv4(),
          title: prevState.title,
          date: newDate,
          isStarred: 0,
        },
      ],
      title: '',
      date: '',
    }))
  }

  starTheAppointment = id => {
    this.setState(prevState => ({
      appList: prevState.appList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  toggleStarred = () => {
    this.setState(prevstate => ({
      getStarred: !prevstate.getStarred,
    }))
  }
  render() {
    const {appList, title, date, getStarred} = this.state
    const filteredList = getStarred
      ? appList.filter(appointment => appointment.isStarred)
      : appList
    const starClass = getStarred ? 'starred2' : 'starred'
    return (
      <div className="bg-container">
        <div className="card">
          <form onSubmit={this.addToList}>
            <div className="alignment">
              <div>
                <h1 className="head">Add Appointment</h1>
                <label className="label-ele" htmlFor="title">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  className="input-ele"
                  placeholder="Title"
                  onChange={this.getTitle}
                  value={title}
                  id="title"
                />
                <br />
                <label className="label-ele" htmlFor="date">
                  DATE
                </label>
                <br />
                <input
                  type="date"
                  className="input-ele"
                  placeholder="dd/mm/yyyy"
                  onChange={this.getDate}
                  value={date}
                  id="date"
                />
                <br />
                <button className="button">Add</button>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="image"
                alt="appointments"
              />
            </div>
            <hr className="hori-line" />
          </form>
          <div className="appointments">
            <h2>Appointments</h2>
            <button
              className={starClass}
              onClick={this.toggleStarred}
              testid="star"
            >
              Starred
            </button>
          </div>
          <ul className="unordered-list">
            {filteredList.map(each => (
              <AppointmentItem
                item={each}
                key={each.id}
                starTheAppointment={this.starTheAppointment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
