

const LoginPage = ({isLoggin})=>{

    return(
        <div className="">
<button>{isLoggin ? 'login' : 'signup'}</button>
        </div>
    )
}

export default LoginPage;