import { BsThreeDotsVertical } from "react-icons/bs"
import { HiArrowUp } from "react-icons/hi"

interface Props {
    title: string
    value: string
    increase?: number
    images?: string[]
}

const Card = (props: Props) => {
    return (
        <div className="flex-1 rounded-md border-[2px] px-6 py-4 border-secondary md:basis-[250px]">
            <div className="flex items-center justify-between">
                <div className="font-['poppins'] font-semibold text-muted-foreground text-sm">
                    {props.title}
                </div>
                <BsThreeDotsVertical className="text-muted-foreground" />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="font-['poppins'] text-3xl font-semibold text-primary">
                    {props.value}
                </div>
                <div className="flex w-fit items-center gap-1 rounded-full bg-green-100 px-2 font-['poppins'] text-xs font-semibold text-green-700">
                    {props.increase !== undefined &&
                        props.increase !== null && (
                            <>
                                <HiArrowUp
                                    size={14}
                                    className="text-green-700"
                                />
                                {props.increase + "%"}
                            </>
                        )}
                </div>
                {props.images && (
                    <div className="flex">
                        {props.images.map((image, index) => (
                            <div key={index} className="ml-[-15px]">
                                <img
                                    src={image}
                                    alt="users"
                                    className="aspect-square w-[35px] rounded-full border-2 border-white object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card
