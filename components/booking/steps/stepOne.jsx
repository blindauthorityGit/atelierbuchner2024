// components/Step1.js
import { useState, useEffect } from "react";
import useStore from "../../../store/store";

import { MainButtonNOLink } from "../../buttons";
import { H2, H3, H4 } from "../../typography";

//HOOKS
//HOOKS
import useDimension from "../../../hooks/useDimension";

const Step1 = ({ next, options, preselectedOption, param }) => {
    const { formData, setFormData } = useStore();
    const { width, height } = useDimension();

    // Set the initial selected option based on the param, preselectedOption, or default to the first option
    const initialOption = param && options.includes(param) ? param : preselectedOption || options[0];

    const [selectedOption, setSelectedOption] = useState(formData.selectedOption || preselectedOption || options[0]);
    const [fullName, setFullName] = useState(formData.fullName || "");
    const [email, setEmail] = useState(formData.email || "");
    const [phone, setPhone] = useState(formData.phone || "");
    const [message, setMessage] = useState(formData.message || "");

    const [charCount, setCharCount] = useState(0);

    const isValid =
        fullName.trim().length > 0 && email.trim().includes("@") && phone.trim().length > 0 && charCount <= 400;

    // Ensure selectedOption updates correctly when param or options change
    useEffect(() => {
        // Only update selectedOption if formData.selectedOption is not set
        // This prevents overwriting formData.selectedOption when it should be used
        if (!formData.selectedOption) {
            console.log(
                options
                    .map((e) => {
                        return e
                            .split("")
                            .map((e) => e.toLowerCase())
                            .join("");
                    })
                    .includes(param)
            );
            const newOption =
                param &&
                options
                    .map((e) => {
                        return e
                            .split("")
                            .map((e) => e.toLowerCase())
                            .join("");
                    })
                    .includes(param)
                    ? param
                    : preselectedOption || options[0];
            setSelectedOption(newOption.charAt(0).toUpperCase() + newOption.slice(1));
        }
    }, [preselectedOption, options, param, formData.selectedOption]); // Include formData.selectedOption as a dependency

    const handleTextAreaChange = (e) => {
        const text = e.target.value;
        setMessage(text);
        setCharCount(text.length);
    };

    const handleNext = () => {
        if (isValid) {
            const formData = { selectedOption, fullName, email, phone, message };
            setFormData(formData);
            next(formData);
        }
    };

    useEffect(() => {
        console.log(width, height);
    }, [param]);

    return (
        <div className="flex flex-col h-full pt-10 font-body">
            <div className="flex-grow">
                <H3 klasse="mb-4">Kurs buchen</H3>
                <hr className="w-full h-1 border-darkGrey opacity-30 mb-6" />

                <div className="mb-4 lg:mb-8">
                    <label className="block text-darkGrey font-semibold xl:text-xl">Select Option</label>
                    <select
                        className="w-full px-3 py-2 border rounded bg-transparent border-thin border-b-darkGrey"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4 lg:mb-8">
                    <label className="block text-darkGrey font-semibold xl:text-xl">Full Name</label>
                    <input
                        className="w-full px-3 py-2 border rounded bg-transparent border-thin border-b-darkGrey"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className="flex mb-8 space-x-4">
                    <div className="w-1/2">
                        <label className="block text-darkGrey font-semibold xl:text-xl">Email</label>
                        <input
                            className="w-full px-3 py-2 border rounded bg-transparent border-thin border-b-darkGrey"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-darkGrey font-semibold xl:text-xl">Phone</label>
                        <input
                            className="w-full px-3 py-2 border rounded bg-transparent border-thin border-b-darkGrey"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4 lg:mb-8">
                    <label className="block text-darkGrey font-semibold xl:text-xl">Message</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded bg-transparent border-thin border-b-darkGrey"
                        value={message}
                        onChange={handleTextAreaChange}
                        maxLength={400}
                        rows={width < 420 ? "3" : "5"} // Default rows for mobile
                    />
                    <div className="text-right text-gray-500 text-sm">{charCount}/400</div>
                </div>
            </div>
            <div className="flex justify-between space-x-2">
                <MainButtonNOLink
                    klasse={`px-4 py-2 rounded ${
                        isValid ? "bg-darkGrey text-white" : "bg-darkGrey opacity-30 text-white cursor-not-allowed"
                    }`}
                    onClick={() => isValid && next({ selectedOption, fullName, email, phone, message })}
                    disabled={!isValid}
                >
                    Weiter
                </MainButtonNOLink>
            </div>
        </div>
    );
};

export default Step1;
