import { Swiper, SwiperSlide } from "swiper/react";
import type { KeywordsCarouselProps } from "./types";
import Typography from "@components/typography";

function KeywordsCarousel({ keywords }: KeywordsCarouselProps) {
  const random20Itens = keywords.sort(() => Math.random() - 0.5).slice(0, 20);

  return (
    <Swiper
      slidesPerView={4.2}
      spaceBetween={12}
      slidesOffsetAfter={12}
      slidesOffsetBefore={12}
    >
      {random20Itens.map(({ slug, title, description }) => (
        <SwiperSlide key={slug} className="!h-auto">
          <a
            href={`/${slug}`}
            className="p-6 rounded-xl bg-slate-900 flex flex-col h-full hover:bg-slate-800 transition-colors"
          >
            <Typography variant="title-small">{title}</Typography>
            <Typography className="line-clamp-2">{description}</Typography>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default KeywordsCarousel;
