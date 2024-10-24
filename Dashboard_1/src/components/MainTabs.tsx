const MainTabs = () => {
    return (
        <div className="mt-6 font-['poppins'] text-xs text-muted-foreground relative px-4">
            <div className="flex gap-6 overflow-auto">
                <div>
                    <div className="text-brand">Overview</div>
                    <div className="h-[2px] bg-brand absolute bottom-0 w-[60px]"></div>
                </div>
                <div>Table</div>
                <div className="whitespace-nowrap">List view</div>
                <div>Segment</div>
                <div>Custom</div>
            </div>
            <div className="h-[2px] bg-secondary mt-4"></div>
        </div>
    )
}

export default MainTabs
