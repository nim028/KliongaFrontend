import React from "react";
import CardImage from "../../components/cards/CardImage";
import { data_service } from "../../data/Data";

export default function Service() {
  return (
    <div className="min-h-screen bg-primary-content p-5">
      <h1
        id="service"
        className="text-center text-primary font-bold my-5 text-5xl"
      >
        Services
      </h1>
      <p className=" text-xl w-fit lg:w-[500px] mx-auto  text-primary/60 text-center font-semibold">
        <b>Kilonga</b> propose une large gamme de services pour la gestion
        complète des ecoles.
      </p>
      <div className="flex my-5 p-5 flex-wrap items-center justify-center gap-10">
        {data_service.map((s, i) => (
          <div className="">
            <CardImage
              icon={s.icon}
              image={s.image}
              content={s.content}
              title={s.title}
              key={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
