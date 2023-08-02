import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const message = notification.length === 0 ? null : notification
  console.log("message at Notification:", message)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (message) {
    return (
      <div style={style}>
        {message}
      </div>
    )
  }

}

export default Notification