import { Button } from "@/src/shared/shadcn";
import { ArrowRight, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const animal = {
  id: 1,
  name: "Джесси",
  description:
    "Домашняя кошка по кличке Джесси. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati illum debitis voluptas. Ad possimus recusandae asperiores necessitatibus dolorem voluptatem autem expedita deleniti soluta repudiandae perferendis dolores, corrupti explicabo totam in quasi reprehenderit beatae dolore. Adipisci inventore excepturi cupiditate esse amet dolores, illo doloremque eos est ducimus, exercitationem laboriosam velit?",
  images: ["/test/1.jpg", "/test/2.jpg", "/test/3.jpg"],
  gender: "самка",
  color: ["серый", "рыжий", "белый"],
  status: "Ищет дом",
  breed: "Уличная",
  type: "Кошка",
  views: 342,
  dateOfBirth: "01.08.2010",
  createdAt: "22.12.2024",
  updateAt: "22.12.2024",
};

export const Animal: FC = () => {
  return (
    <div className="bg-white max-w-[400px] rounded-xl shadow-lg border border-gray-200 hover:scale-105 transition-all duration-300 ease-in-out relative">
      <Image
        className="rounded-t-xl object-fill"
        src={animal.images[2]}
        alt={animal.name}
        width={400}
        height={200}
      />
      <div className="p-3">
        <div className="flex justify-between gap-2 mb-1">
          <div className="font-medium text-2xl">{animal.name}</div>
          <div className="flex items-center gap-2">
            <Eye />
            {animal.views}
          </div>
        </div>
        <div className="flex gap-2 mb-1 font-bold">
          <div>{animal.type}</div>
          <div>{animal.breed}</div>
        </div>
        <div className="line-clamp-2 mb-2">{animal.description}</div>
        <Link href={`/animals/${animal.id}`}>
          <Button className="w-full group">
            Подробнее
            <ArrowRight className="opacity-0 transition duration-300 ease-in-out -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </Link>
      </div>
      <button className="absolute right-3 top-3 bg-[#171717] h-10 w-10 flex items-center justify-center rounded-sm">
        <Heart color="white" size={30} />
      </button>
    </div>
  );
};
