const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <label>User name / Email
                <input type="text" className="login__input" placeholder="Alex@yastreb.Ku" />
                </label>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>

                <input type="password" className="login__input" placeholder="Password" />

              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input type="password" className="login__input" placeholder="Repeat Password" />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <label>Phone Number
                <input type="number" className="login__input" placeholder="+(972)" />
                </label>
              </div>
              <button className="button login__submit">
                <span className="button__text">Registration</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register