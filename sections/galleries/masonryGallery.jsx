// import React from "react";

// const MasonryGallery = ({ images }) => {
//     return (
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-12 gap-4">
//                 {images.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`${
//                             index === 0
//                                 ? "col-span-12 row-span-2"
//                                 : index === 1
//                                 ? "col-span-6 row-span-1"
//                                 : index === 2
//                                 ? "col-span-6 row-span-2"
//                                 : index === 3
//                                 ? "col-span-3 row-span-1"
//                                 : index === 4
//                                 ? "col-span-3 row-span-2"
//                                 : index === 5
//                                 ? "col-span-6 row-span-1"
//                                 : "col-span-6 row-span-1"
//                         } mb-4`}
//                     >
//                         <img
//                             src={image.src}
//                             alt={image.alt}
//                             className="w-full h-full object-cover rounded-lg shadow-lg"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MasonryGallery;

import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";

import React from "react";

const MasonryGallery = ({ images }) => {
    return (
        <SectionContainer klasse="gap-16  grid-rows-12 xl:h-[100svh]" fullHeight>
            <div className="col-start-3 col-span-4 row-start-1 row-span-8">
                <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="col-start-1 col-span-2 row-start-2 row-span-1">
                <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="col-start-7 col-span-4 row-start-2 row-span-8">
                <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="col-start-11 col-span-2 row-start-1 row-span-3">
                <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
        </SectionContainer>
    );
};

export default MasonryGallery;
