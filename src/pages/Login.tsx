interface ILogin {
  email: string;
  password: string;
}

function Login({}: ILogin) {
  return (
    <div>Login</div>
  )
}

export default Login