// components/SummaryStep.js
import { useState } from "react";
import useStore from "../../../store/store";
import { MainButtonNOLink } from "../../buttons";

import { H2, H3, H4 } from "../../typography";

const Step3 = ({ prev, submit }) => {
    const { formData } = useStore();

    const [gdprChecked, setGdprChecked] = useState(false);
    const [newsletterChecked, setNewsletterChecked] = useState(true);

    const isValid = gdprChecked;

    const handleSubmit = () => {
        if (isValid) {
            submit();
        }
    };

    return (
        <div className="flex flex-col h-full pt-10 font-body">
            <div className="flex-grow">
                <div className="mb-8">
                    <H3 klasse="mb-4">Summary</H3>
                    <hr className="w-full h-1 border-darkGrey opacity-30 mb-6" />

                    <p className="mb-2">
                        <strong>Selected Option:</strong> {formData.selectedOption}
                    </p>
                    <p className="mb-2">
                        <strong>Full Name:</strong> {formData.fullName}
                    </p>
                    <p className="mb-2">
                        <strong>Email:</strong> {formData.email}
                    </p>
                    <p className="mb-2">
                        <strong>Phone:</strong> {formData.phone}
                    </p>
                    <p className="mb-2">
                        <strong>Message:</strong> {formData.message}
                    </p>
                    <p className="mb-2">
                        <strong>Payment Method:</strong> {formData.selectedPaymentMethod}
                    </p>
                </div>
                <hr className="w-full h-1 border-darkGrey opacity-30 mb-6" />
                <div className="mb-8">
                    <label className="block text-darkGrey font-semibold xl:text-xl">Consent</label>
                    <div className="mt-2">
                        <label className="block text-darkGrey">
                            <input
                                type="checkbox"
                                checked={gdprChecked}
                                onChange={(e) => setGdprChecked(e.target.checked)}
                                className="mr-2"
                            />
                            I agree to the GDPR terms
                        </label>
                        <label className="block text-darkGrey mt-2">
                            <input
                                type="checkbox"
                                checked={newsletterChecked}
                                onChange={(e) => setNewsletterChecked(e.target.checked)}
                                className="mr-2"
                            />
                            Sign me up for the newsletter
                        </label>
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
                    onClick={handleSubmit}
                    disabled={!isValid}
                >
                    Submit
                </MainButtonNOLink>
            </div>
        </div>
    );
};

export default Step3;
