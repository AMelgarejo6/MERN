const Box = props => {
    const {color} = props;

    return (
        <p style={{
            "backgroundColor": color,
            "height": "50px",
            "width": "50px",
            "margin": "10px",
            "color": "white",
        }
        }></p>
    );
}

export default Box;