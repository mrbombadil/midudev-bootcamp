const Mensaje = (props) => {
    const {color, message} = props;
    return <h1 style={{ color: color }}>Hola, el mensaje es: { message } </h1>
}

export default Mensaje;