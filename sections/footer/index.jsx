import React from "react";
import Link from "next/link";

//RTYPO
import { H1, H3, H4, P } from "../../components/typography";
//ASSETS
import Galerie from "../../assets/test/galerie.jpg";
import Email from "../../assets/icons/email.svg";
import Phone from "../../assets/icons/phone.svg";

const Footer = () => {
    return (
        <div className="bg-darkGrey w-full py-36 font-body">
            <div className="container mx-auto grid grid-cols-12">
                <div className="col-span-6">
                    <H3 klasse="text-primaryColor-50">Atelier Buchner</H3>
                </div>
                <div className="col-span-2">
                    <Link href="#" className="text-primaryColor-50 text-xl block font-semibold">
                        Partner
                    </Link>
                    <Link href="#" className="text-primaryColor-50 text-xl block font-semibold">
                        Partner
                    </Link>
                    <Link href="#" className="text-primaryColor-50 text-xl block font-semibold">
                        Partner
                    </Link>
                </div>
                <div className="col-span-2">rge</div>
                <div className="col-span-2">erg</div>
            </div>
        </div>
    );
};

export default Footer;
