import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart/useCart";
import { FaTrashAlt } from "react-icons/fa";


const MyCart = () => {

    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDeleteItem = item => {
        confirm('do you want to delete')
        if (confirm) {
            fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('item deleted')
                        refetch()
                    }
                })
        }
    }

    return (
        <div className="border-2 container mx-auto">
            <Helmet>
                <title>Bistro Boss | Cart</title>
            </Helmet>
            <div className="uppercase flex justify-evenly mt-10">
                <h3 className="text-2xl font-bold">Total Orders: {cart.length}</h3>
                <h3 className="text-2xl font-bold">Total Cost: ${total}</h3>
                <button className="btn btn-warning btn-sm">pay</button>
            </div>
            <div className="mt-10 flex justify-center items-center w-full">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <td>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td className="flex justify-end">${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;