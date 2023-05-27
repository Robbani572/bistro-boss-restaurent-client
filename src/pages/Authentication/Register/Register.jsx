import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/others/authentication2.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {

    const {createUser, loading} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(form)

        createUser(email, password).then(result => {
            const newUser = result.user;
            console.log(newUser);
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-login">
            <div className="hero-content flex-col lg:flex-row p-8 md:shadow-xl bg-login-card">
                <div className="text-center hidden md:block w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full rounded-none max-w-lg">
                    <h1 className="text-5xl text-[#BB8506] font-bold text-center mt-10">Register</h1>
                    <form onSubmit={handleRegister} className="card-body mt-8">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="User Name" className="input input-bordered bg-opacity-20 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                        </div>
                        <div className="form-control mt-8">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered bg-opacity-20 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                        </div>
                        <div className="form-control mt-8">
                            <input type="password" name="password" placeholder="Password" className="input input-bordered bg-opacity-20 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                        </div>
                        <div className="form-control mt-8">
                            <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered bg-opacity-20 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            <label className="flex gap-2 mt-4">
                                <input type="checkbox" className="checkbox"></input>
                                <p className="text-[#BB8506] font-semibold">Accept Terms and Coditions</p>
                            </label>
                        </div>
                        <div className="form-control mt-8">
                            <input className="btn btn-outline text-xl font-bold capitalize border-0 hover:bg-[#BB8506] hover:border-[#BB8506] text-[#BB8506] border-[#BB8506] border-b-4" type="submit" value="Register" />
                        </div>
                        <div>
                            <p className="text-[#BB8506] font-semibold">Already have an account? <Link to="/login" className="hover:underline underline-offset-[4px]">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;