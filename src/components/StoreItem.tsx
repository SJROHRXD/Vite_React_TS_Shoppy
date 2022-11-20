import { Card } from 'react-bootstrap';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    return (
        <Card>
            <Card.Img
            variant="top"
            src={imgUrl}
            height="250px"
            style= {{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{price}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

// style= {{ objectFit: "cover" }} is a CSS property that tells the browser to scale the image to fit the container, but to keep the aspect ratio of the image the same. This is useful for images that are not the same size as the container, so that they don't get stretched out.