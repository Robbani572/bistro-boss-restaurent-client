import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart/useCart";



const MenuCard = ({ item }) => {

    const { _id, image, name, recipe, price } = item;
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()
    const addedItem = {
        _id,
        image,
        name,
        price,
        email: user?.email
    }

    const handleAddToCart = item => {
        if (user) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        alert('Food is added')
                    }
                })
        }
        else{
            confirm('You have to login for food')
            navigate('/login')
        }
    }

    return (
        <div className="card rounded-none w-96 bg-[#F3F3F3]">
            <img src={image} alt="" />
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold uppercase text-center">{name}</h2>
                <p>{recipe}</p>
            </div>
            <div className="flex w-full justify-center mb-8">
                <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 bg-[#E8E8E8] w-1/3 text-[#BB8506]">Add to cart</button>
            </div>
        </div>
    );
};

export default MenuCard;