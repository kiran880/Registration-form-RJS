import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  renderFirstNameInput = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="first name"
          onChange={this.onchangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onchangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({firstNameInput: value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  renderLastNameInput = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          type="test"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({lastNameInput: value})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        className="submit-button"
        type="button"
        onClick={this.onAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  onAnotherResponse = () => {
    this.setState(pervState => ({
      isFormSubmitted: !pervState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidateFirstName = this.validateFirstName()
    const isValidateLastName = this.validateLastName()

    if (isValidateFirstName && isValidateLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidateFirstName,
        showLastNameError: !isValidateLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameInput()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameInput()}
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
