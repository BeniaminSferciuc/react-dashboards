import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const User = () => {
    return (
        <div className="mt-2 flex items-center gap-2 rounded-md border-0 border-secondary p-0 lg:border-2 lg:p-3">
            <img
                className="aspect-square w-[50px] rounded-full object-cover"
                src="https://img.freepik.com/free-photo/fashion-beauty-portrait-young-brunette-woman-with-evening-stylish-makeup-perfect-clean-skin-smiling-model-with-long-curly-hair-posing-studio-pink-background_158538-21281.jpg?size=626&ext=jpg&ga=GA1.1.27395000.1687932970&semt=sph"
                alt="profile"
            />
            <div className="lg:flex flex-1 items-center justify-between hidden">
                <div className="">
                    <div className="font-['poppins'] text-xs font-bold text-muted-foreground">
                        Frankie Sulivan
                    </div>
                    <div className="font-['poppins'] text-xs text-muted-foreground">
                        @frankie
                    </div>
                </div>
                <div className="cursor-pointer">
                    <div className="flex flex-col">
                        <MdOutlineKeyboardArrowUp className="mb-[-5px] text-muted-foreground" />
                        <MdOutlineKeyboardArrowDown className="text-muted-foreground" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
