const Mensaje = (props) => {
    return <h1 style={{ color: props.color }}>Hola, el mensaje es: { props.message } </h1>
}

export default Mensaje;