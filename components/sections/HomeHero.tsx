import SearchBox from '@/components/SearchBox'

export default function HomeHero() {
    return (
        <section className="relative bg-[#f5f7fa] mb-20">
            <div
                className="relative w-full h-[300px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/header_bg.jpeg')" }}
            >
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#f3f4f6] via-[#f3f4f6]/30 to-transparent" />

                <div className="relative z-10 flex h-full items-end justify-center">
                    <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                        <div className="translate-y-10 sm:translate-y-12 lg:translate-y-14">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
