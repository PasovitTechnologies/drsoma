import { Mail, Phone, ThumbsUp, ThumbsUpIcon } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Appointment() {
  return (
    <section className="px-6 md:px-20  lg:px-24 lg:pl-36 py-10 mb-8 text-gray-900">
      {/* Heading */}

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center">
        <div className=" md:w-[65%] overflow-hidden text-[rgb(15,58,97)] pr-6">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[2.4rem] text-[rgb(15,58,97)] font-poppins font-semibold mb-6"
          >
            Как попасть на приём?
          </motion.h2>
          <div className="space-y-6 text-justify md:text-left">
            <p className="font-poppins">
              <strong className="font-bold font-poppins">
                Сомасундарам Субраманиан
              </strong>{" "}
              (доктор Сома) ведет{" "}
              <strong className="font-bold font-poppins">
                очный приём в Москве.
              </strong>{" "}
              Для жителей других регионов и стран возможна консультация в{" "}
              <strong className="font-bold font-poppins">
                дистанционном формате.
              </strong>
            </p>
            <p className="font-poppins">
              Доктор Сома обладает обширными навыками и опытом в лечении
              опухолевых заболеваний головы и шеи, полости рта, гортани, кожи,
              щитовидной и молочной желез. Выполняет все виды хирургических
              вмешательств по поводу этих заболеваний, в том числе
              реконструктивно-пластические{" "}
              <strong className="font-bold font-poppins">
                {" "}
                (вмешательства подробно перечислены в разделе «Специализация»).
              </strong>
            </p>
            <p className="font-poppins">
              Консультация специалиста является обязательным условием перед
              хирургическим лечением. Запишитесь на консультацию на сайте{" "}
              <a
                href="https://health-direct.info/"
                target="_blank"
                className="underline font-poppins font-bold"
              >
                Health-Direct
              </a>
              .
            </p>
            <p className="font-poppins">
              <strong className="font-bold font-poppins">
                Заполните обязательные поля, и менеджер свяжется с Вами, чтобы
                уточнить удобные дату и время.
              </strong>
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 flex flex-wrap  md:w-[35%] text-[rgb(59,59,59)] justify-center md:justify-between gap-x-16 gap-y-10 md:gap-6 overflow-hidden">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10 "
          >
            <Phone size={28} />
            <a
              href="https://wa.me/79153333066"
              target="_blank"
              className="text-center text-sm "
            >
              <span className="font-poppins font-[300]">+7 915 333 30 66</span>{" "}
              <br />
              <span className=" ">[WhatsApp]</span>
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10 "
          >
            <Mail size={28} />
            <a
              href="mailto:drsoma@gmail.com"
              className="text-sm font-poppins font-[300]"
            >
              drsoma@gmail.com
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10  text-2xl"
          >
            <ThumbsUpIcon size={28} />
            <div className="flex gap-3">
              <a href="https://www.facebook.com/wix" target="_blank">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.twitter.com/wix" target="_blank">
                <FaTwitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/wix-com"
                target="_blank"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.instagram.com/wix" target="_blank">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
