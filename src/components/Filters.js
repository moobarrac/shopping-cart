import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { CartContex } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
  const {
    productState: {byStock, byFastDelivery, byRating, sort},
    productDispatch
  } = useContext(CartContex);

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onClick={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh"
            })
          }}
          checked={sort === "lowToHigh" && true}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onClick={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow"
            })
          }}
          checked={sort === "highToLow" && true}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onClick={() => {
            productDispatch({
              type: "FILTER_BY_STOCK"
            })
          }}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onClick={() => {
            productDispatch({
              type: "FILTER_BY_DELIVERY"
            })
          }}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) => {
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1
            })
          }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => {
          productDispatch({
            type: "CLEAR_FILTERS"
          })
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;