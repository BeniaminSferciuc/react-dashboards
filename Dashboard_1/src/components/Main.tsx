import Card from "./Card"
import MainHeader from "./MainHeader"
import MainTabs from "./MainTabs"
import { images } from "../data"
import FilterSection from "./FilterSection"
import { columns } from "./TableData/Columns"
import { data } from "../data"
import { DataTable } from "./TableData/MainTable"

const Main = () => {
    return (
        <div className="md:ml-[90px] lg:ml-[260px]">
            <MainHeader />
            <MainTabs />
            <div className="mt-8 flex flex-col gap-4 px-4 md:flex-row md:flex-wrap">
                <Card title="Total customers" value="2,420" increase={20} />
                <Card title="Members" value="1,210" increase={15} />
                <Card title="Active now" value="316" images={images} />
            </div>
            <FilterSection />
            <div className="py-6 md:p-4">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Main
