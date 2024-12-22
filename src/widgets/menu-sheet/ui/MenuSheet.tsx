import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/shared/shadcn";
import {
  HandHeart,
  House,
  Menu,
  PawPrint,
  Phone,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  className?: string;
}

const menu = [
  {
    name: "Главная",
    icon: <House />,
    href: "/",
  },
  {
    name: "Животные",
    icon: <PawPrint />,
    href: "/animals",
  },
  {
    name: "Нашли дом",
    icon: <HandHeart />,
    href: "/found-a-home",
  },
  {
    name: "Наша команда",
    icon: <UsersRound />,
    href: "our-team",
  },
  {
    name: "Контакты",
    icon: <Phone />,
    href: "/contacts",
  },
];

export const MenuSheet: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-3xl">Меню</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <ul className="flex flex-col gap-4 pt-4">
            {menu.map((item) => (
              <li key={item.name}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="flex gap-2 hover:opacity-70 transition-all"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
