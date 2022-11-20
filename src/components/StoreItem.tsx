import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    // function StoreItem is a function that takes in an object with properties from the StoreItemProps interface and returns a Card component

    // const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart,} = useShoppingCart(); is a destructuring assignment that assigns the values of the properties of the object returned by the useShoppingCart() function to the variables getItemQuantity, increaseCartQuantity, decreaseCartQuantity, and removeFromCart

    // a destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

    const quantity = getItemQuantity(id);

    return (
        // returns a card, image, name, price, and buttons to increase, decrease, or remove item from cart
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="250px"
                style={{ objectFit: "cover" }}
                // style= {{ objectFit: "cover" }} is a CSS property that tells the browser to scale the image to fit the container, but to keep the aspect ratio of the image the same. This is useful for images that are not the same size as the container, so that they don"t get stretched out.
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">
                        {formatCurrency(price)}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button
                            className="w-100"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            + Add To Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    -
                                </Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in
                                    cart
                                </div>
                                <Button
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                onClick={() => removeFromCart(id)}
                                variant="danger"
                                size="sm"
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
