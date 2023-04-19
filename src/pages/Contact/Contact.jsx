import emailjs from 'emailjs-com';
import React, { useState } from "react";
import { TbBrandAirbnb, TbBrandBooking } from 'react-icons/tb';
import { styles } from "../../utilities/style";
import { useTranslation } from "react-i18next";


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
        to_name: 'João Borges Mendonça',
        from_name: name,
        message: message,
        };

        emailjs.send('joao_borges_mendonca_23', 'template_svfcq3v', templateParams, 'd21ayNZqYS2otgINP')
        .then((result) => {
            console.log(result.text);
            alert('Your message was sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('There was an error sending your message. Please try again later.');
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
      <div id="contact" className={`${styles.padding}  mx-auto relative z-0`}>
        <div
          className={`xl:mt-5 flex xl:flex-row flex-col gap-10 overflow-hidden`}
        >
          <div className=" flex-[0.4] p-8  border-4 border-black rounded-[20px] ">
            <p className={`${styles.sectionSubText} text-tertiary`}>
            {t("contact.subtitle")}
            </p>
            <h3 className={styles.sectionHeadText}>{t("contact.title")}</h3>

            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="text-black text-xl mb-4">
                {t("contact.what_name")}
                </span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-tertiary py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-bold"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-black text-xl mb-4">
                {t("contact.what_mail")}
                </span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@mail.com"
                  className="bg-tertiary py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-bold"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-black text-xl mb-4">
                {t("contact.what_message")}
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I want to make an reservation :)"
                  className="bg-tertiary py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-bold"
                />
              </label>

              <button
                type="submit"
                className="bg-[#292d33] hover:border-primary py-3 px-8 rounded-xl text-white font-bold text-xl ease-in-out duration-200 transform hover:scale-90"
              >
                {t("contact.send")}
              </button>
            </form>
          </div>

          <div className="flex flex-[0.6] flex-col md:flex-col items-center justify-center md:space-x-8">
            <div className="flex flex-col md:flex-col items-center justify-center md:space-x-8">
              <div className=" flex flex-col text-center mt-10 md:text-left">

                <div className="mb-3">
                  <h2 className="text-[35px] font-bold mb-2">{t("contact.address")}</h2>
                  <p className="text-lg text-tertiary mb-2">
                    Estrada Regional nº 5, 9630-250 Nordestinho, Portugal
                  </p>
                </div>
               
                <div className="mb-3">
                  <h2 className="text-[35px] font-bold mb-2">WhatsApp</h2>
                  <a
                    href="https://wa.me/351912224090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-tertiary mb-2"
                  >
                    +351 912 224 090
                  </a>
                </div>
                
                <div>
                  <h2 className="text-[35px] font-bold mb-2">
                  {t("contact.others")}
                  </h2>
                  <div className="flex flex-row items-center justify-center">
                    <a
                      href="https://www.booking.com/hotel/pt/casa-do-sr-paulo.en-gb.html?aid=356980&label=gog235jc-1DCAsouwFCEGNhc2EtZG8tc3ItcGF1bG9IM1gDaDuIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Aoa1-qEGwAIB0gIkY2ZjZWVlNzctMjVmNS00ZGU0LWEwMmMtNDc2MTk4MTdjNzUx2AIE4AIB&sid=7f5c3f5207823f9f91396e64d759f63d&dist=0&keep_landing=1&sb_price_type=total&type=total&"
                      target="_blank"
                      className="flex items-center justify-center mr-4 border-none"
                      rel="noreferrer"
                    >
                      <TbBrandBooking className="w-6 h-6 text-tertiary mr-2" />
                      <span className="text-tertiary text-lg cursor-pointer no-underline transform hover:scale-105 text-decoration-none hover:text-decoration-underline hover:no-underline !important">
                        Booking.com
                      </span>
                    </a>
                    <a
                      href="https://www.airbnb.gy/rooms/36148785?source_impression_id=p3_1681825037_Rk2wCH8tGL3LFeRD&_set_bev_on_new_domain=1679949173_NTNmOTE2YmYwYTQ0"
                      target="_blank"
                      className="flex items-center justify-center"
                      rel="noreferrer"
                    >
                      <TbBrandAirbnb className="w-6 h-6 text-tertiary mr-2" />
                      <span className="text-tertiary text-lg cursor-pointer no-underline transform hover:scale-105 text-decoration-none hover:text-decoration-underline hover:no-underline !important">
                        Airbnb
                      </span>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;