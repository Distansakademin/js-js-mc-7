import { useState } from "react";
import { useForm } from "react-hook-form";
import useStore from "../Stores/ContactStore";

function Contact() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState({ name: "", message: "" })
    const { setName, setMessage } = useStore();

    const onSubmit = (data) => {
        setData(data);
        setName(data.name);
        setMessage(data.message);
    } 

    return (<>
        <h2>Contact</h2>

        <p>Name: {data.name}</p>
        <p>Message: {data.message}</p>

        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name")} placeholder="Name" />

            <p>
                <textarea {...register("message")} placeholder="Message" />
            </p>

            <button type="submit">Submit</button>

        </form>
    </>)
}

export default Contact;