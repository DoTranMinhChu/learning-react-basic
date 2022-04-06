import React from "react";
import mainImage from "../../assets/images/image.jpg";


class DisplayImage extends React.Component {
    render() {
        return (
            <>
                <div>Display Image</div>
                <div>
                    <img width="500px" src={mainImage} alt="mainImage" />
                </div>

            </>
        )
    }
}

export default DisplayImage;