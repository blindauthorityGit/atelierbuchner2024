import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import useStore from "../../store/store";

const Modal = (props) => {
    const resetModalHeight = useStore((state) => state.resetModalHeight);
    const isFullHeightModal = useStore((state) => state.isFullHeightModal);
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            props.onClose();
        }
    };

    const closeModal = () => {
        props.onClose();
    };

    const modalClassNames = `w-full h-full flex flex-col relative transition-colors duration-500 lg:max-w-[98%] min-h-[90%] lg:h-auto 2xl:min-h-[66%] lg:max-w-[80%] 2xl:max-w-[80%] 2xl:min-h-[85svh] lg:max-h-full bg-white py-6 px-6 md:p-12 lg:p-12 xl:p-16 overflow-y-auto ${
        isFullHeightModal ? "!h-full" : ""
    }`;

    const modalVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } },
    };

    return (
        <div onClick={handleClickOutside} className="fixed z-[99] inset-0 flex items-center justify-center p-2 lg:z-50">
            {props.isOpen && (
                <motion.div
                    ref={modalRef}
                    className={modalClassNames}
                    style={{
                        maxHeight: "100vh",
                        background: props.background,
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={modalVariants}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <div
                        className="closer absolute top-2 right-2 text-xl lg:text-4xl cursor-pointer transition hover:opacity-50 z-50"
                        onClick={closeModal}
                    >
                        <MdOutlineClose />
                    </div>
                    {props.children}
                </motion.div>
            )}
        </div>
    );
};

export default Modal;
