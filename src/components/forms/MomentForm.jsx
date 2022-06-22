import { useEffect, useState } from "react";
import { CtForm, CtInput } from "./Form.styled";


const initForm = {
    title: '',
    imgUrl: '',
};

export function MomentForm () {

    const [form, setForm] = useState({})

    useEffect(() => {
        setForm()
    })

    return (
        <CtForm>
            <CtInput type="text" name="title" placeholder="Moment title" />
            <CtInput></CtInput>
        </CtForm>
    )
}