import { Container } from "@/src/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MenuSheet } from "../../menu-sheet";

export const Header: FC = () => {
  return (
    <div className="shadow-lg py-1">
      <Container className="grid grid-cols-3 gap-2 items-center">
        <MenuSheet />

        <Link href="/" className="mx-auto">
          <Image
            src="/icons/logo.png"
            alt="Лапки и сердца"
            width={70}
            height={70}
          />
        </Link>

        <div className="justify-self-end">social</div>
      </Container>
    </div>
  );
};
