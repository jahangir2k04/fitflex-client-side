

const Button = ({text, style}) => {
    return (
        <button className={`bg-orange-500 text-white py-2 rounded-lg tracking-wider ${style}`}>{text}</button>
    );
};

export default Button;