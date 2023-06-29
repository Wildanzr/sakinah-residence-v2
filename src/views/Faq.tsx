import { Qna } from "@/components";
import { faqs } from "@/constants";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 space-y-5 bg-gradient-to-br from-wood to-wood-2">
      <h2 className="font-lato font-bold text-[48px] text-shadow text-center">
        Pertanyaan yang Sering Diajukan
      </h2>

      <div className="flex flex-col h-full w-full max-w-[876px] space-y-5 items-center justify-center">
        {faqs.map((item, index) => (
          <Qna key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;