import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr"

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="next-arrow"
            onClick={onClick}
        >
            <GrNext fontSize={40} fontWeight={400}  filter={"invert(1)"}/>
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="prev-arrow"
            onClick={onClick}
        >
            <GrPrevious fontSize={40} fontWeight={400}  filter={"invert(1)"}/>
        </div>
    );
}

export { SampleNextArrow, SamplePrevArrow}