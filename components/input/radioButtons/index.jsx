// components/CustomRadioButton.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomRadioButton = ({ id, name, value, checked, onChange, label }) => {
    return (
        <label className="flex mb-6 xl:mb-0 xl:inline-flex items-center  cursor-pointer font-body xl:mr-6">
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            <div className="relative  w-6 h-6 inline-flex border-2 border-darkGrey rounded-full mr-2  items-center justify-center">
                <AnimatePresence>
                    {checked && (
                        <motion.span
                            className="w-3 h-3 absolute bg-darkGrey rounded-full block"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </AnimatePresence>
            </div>
            {label}
        </label>
    );
};

export default CustomRadioButton;
