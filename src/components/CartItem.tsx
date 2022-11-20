import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type CartItemProps = {
    id: number;
    quantity: number;
};
// CartItemProps is a type
// a type is a way to define a shape of an object
// the shape of an object is the properties that it has and the types of those properties
// properties are the key-value pairs that make up an object, they are also called fields
// properties can have any type, including other objects
// the type of a property is the type of the value that the property holds
// the type of a property can be a primitive type, like a string or a number, or it can be a complex type, like an object or an array

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center"
        >
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: ".65rem" }}
                        >
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    );
}
