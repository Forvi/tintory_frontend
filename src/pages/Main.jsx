import { Fragment, useEffect, useState } from "react"
import { generateColor } from "../services/generateColor"
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

export default function Main() {
    const [color, setColor] = useState([]);
    const [quantity, setQuantity] = useState();

    async function handleColor() {
        let generatedColor = await generateColor(quantity);
        setColor(generatedColor);
    }

    const handleQuantityChange = (valueString, valueNumber) => {
        setQuantity(valueNumber);
    };


    useEffect(() => {
        if (color && color.length) {
            color.forEach((item, index) => {
                document.documentElement.style.setProperty(`--generatedColor-${index}`, item);
            });
        }
    }, [color]);

    return (
        <section>
            <NumberInput 
                size='xs' 
                maxW={16} 
                defaultValue={8} 
                min={2} 
                max={10}
                className="absolute left-1/2 top-24"
                onChange={handleQuantityChange}
                value={quantity}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <button onClick={handleColor} className="p-4 bg-blue-500 text-white rounded-xl absolute text-l left-1/2 bottom-24">Сгенерировать</button>
            <div className="flex flex-row justify-center">
                <Fragment>
                    <div className="flex flex-row h-screen w-full">
                        {color && color.map((item, index) => (
                            <div
                                key={index}
                                style={{ backgroundColor: `var(--generatedColor-${index})` }}
                                className="w-1/4"
                            >
                                <div className="text-xl flex justify-center align-bottom">{item}</div>
                            </div>
                        ))}
                    </div>
                </Fragment>
            </div>
        </section>
    )
}
