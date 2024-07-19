// components/MultiStepForm.js
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "../../store/store";
import ProgressIndicator from "./progressIndicator";
import Step1 from "./steps/stepOne";
import Step2 from "./steps/stepTwo";
import Step3 from "./steps/stepThree";

const MultiStepForm = ({ options, param }) => {
    const [step, setStep] = useState(1);
    const { formData, setFormData } = useStore();

    const nextStep = (data) => {
        setFormData(data);
        setStep((prev) => prev + 1);
        console.log(formData);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    const submitForm = (data) => {
        setFormData(data);
        console.log("Final Form Data:", { ...formData, ...data });
        // Handle form submission
    };

    return (
        <div className="px-4 py-8 xl:p-12 lg:h-full min-h-[80svh] h-[100svh] xl:min-h-0 relative">
            <ProgressIndicator step={step} />
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        className="flex-grow flex flex-col h-full"
                        key="step1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Step1 param={param} options={options} next={nextStep} />
                    </motion.div>
                )}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-grow flex flex-col h-full "
                    >
                        <Step2 next={nextStep} prev={prevStep} />
                    </motion.div>
                )}
                {step === 3 && (
                    <motion.div
                        className="flex-grow flex flex-col h-full"
                        key="step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Step3 submit={submitForm} prev={prevStep} data={formData} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MultiStepForm;
