import { handleErrorsLogin } from "./Utils";

const Alerts = ({ errorCode }) => {
  const errorMessage = handleErrorsLogin(errorCode)

  return (
    <div className="alert">
      <p>{errorMessage}</p>
      {/* Diseno va aca */}
    </div>
  )
}
export default Alerts