// components/Step2.js
import { useState } from "react";
import useStore from "../../../store/store";
import { MainButtonNOLink } from "../../buttons";
import CustomRadioButton from "../../../components/input/radioButtons";
import { H2, H3, H4 } from "../../typography";

const Step2 = ({ next, prev, courseCost }) => {
    const { formData, setFormData } = useStore();

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(formData.selectedPaymentMethod || "");

    const isValid = selectedPaymentMethod.length > 0;

    const handleNext = () => {
        if (isValid) {
            const updatedFormData = { ...formData, selectedPaymentMethod };
            setFormData(updatedFormData);
            next(updatedFormData);
        }
    };

    const handleCheckboxChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    };

    return (
        <div className="flex flex-col h-full pt-10 font-body">
            <div className="flex-grow">
                <H3 klasse="mb-4">Bezahlmethode</H3>
                <hr className="w-full h-1 border-darkGrey opacity-30 mb-6" />
                <div className="mb-8">
                    <label className="block text-darkGrey font-semibold xl:text-xl">Course Cost</label>
                    <p className="text-lg">{courseCost} 600 €</p>
                </div>
                <hr className="w-full h-1 border-darkGrey opacity-30 mb-6" />

                <div className="mb-8">
                    <label className="block text-darkGrey font-semibold xl:text-xl">Bezahlmethode</label>
                    <div className="mt-8">
                        <CustomRadioButton
                            id="online-bezahlen"
                            name="paymentMethod"
                            value="online bezahlen"
                            checked={selectedPaymentMethod === "online bezahlen"}
                            onChange={handleCheckboxChange}
                            label="Online Bezahlen"
                        />
                        <CustomRadioButton
                            id="bar-bei-kursbeginn"
                            name="paymentMethod"
                            value="bar bei kursbeginn"
                            checked={selectedPaymentMethod === "bar bei kursbeginn"}
                            onChange={handleCheckboxChange}
                            label="Bar Bei Kursbeginn"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between space-x-2">
                <MainButtonNOLink klasse="px-4 py-2 rounded bg-darkGrey text-white" onClick={prev}>
                    Back
                </MainButtonNOLink>
                <MainButtonNOLink
                    klasse={`px-4 py-2 rounded ${
                        isValid ? "bg-darkGrey text-white" : "bg-darkGrey opacity-30 text-white cursor-not-allowed"
                    }`}
                    onClick={handleNext}
                    disabled={!isValid}
                >
                    Next
                </MainButtonNOLink>
            </div>
        </div>
    );
};

export default Step2;
