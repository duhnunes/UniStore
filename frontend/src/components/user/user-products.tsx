import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserCarousel } from "./user-carousel";

export function UserProducts () {
  return (
    <section className="flex flex-col items-center w-full my-5">
          <div className="flex items-center justify-between w-full border-b border-zinc-300/20 pb-2 mb-5">
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/duhnunes.png" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              DuHNunes
            </div>
            Estrelas
          </div>
            <UserCarousel />
        </section>
  )
}