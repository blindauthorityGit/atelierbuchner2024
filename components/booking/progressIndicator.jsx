// components/ProgressIndicator.js
import { motion } from "framer-motion";

const ProgressIndicator = ({ step }) => {
    const progress = (step / 3) * 100;

    return (
        <div className="absolute bottom-3 lg:bottom-auto lg:top-8 left-0 right-0 px-4 xl:px-12">
            <div className="h-1 lg:h-2 bg-white rounded-full">
                <motion.div
                    className="h-full bg-darkGrey rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
};

export default ProgressIndicator;
