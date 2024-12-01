import useStore from "../Stores/ContactStore";

function Greeting() {
    const { name, message } = useStore();

    return (<>
        <h2>Greeting</h2>

        <p>Name: {name}</p>

        <p>Message: {message}</p>
    </>)
}

export default Greeting