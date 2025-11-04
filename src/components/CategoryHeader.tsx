import React from "react";

interface CategoryHeaderProps {
  title: string;
}

export default function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 md:py-24 text-center">
        <h1 className="text-h2 font-bold uppercase tracking-h2 leading-h2">
          {title}
        </h1>
      </div>
    </section>
  );
}