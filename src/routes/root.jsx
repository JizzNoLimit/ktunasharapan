export default function Root() {
    return(
        <div className="w-screen h-screen max-w-[447px] mx-auto p-4">
            <div className="flex flex-col justify-center w-full px-6 pt-6 pb-8 bg-gray-100 rounded-2xl">
                <div className="flex justify-center pt-6 pb-4 ">
                    <img src="/logo/tunasharapan-logo.png" alt="tunasharapan-logo" width={140} height={140} />
                </div>
                <div className="text-center mb-8">
                    <h3 className="font-semibold text-2xl">Tunas Harapan</h3>
                    <p className="text-sm">Desa Harapan Jaya</p>
                </div>
                <div className="text-justify space-y-3">
                    <p className="">Kami dengan senang hati mengumumkan bahwa website kami saat ini sedang dalam tahap pengembangan untuk memberikan informasi kegiatan kepada pengunjung kami.</p>
                    <p className="">Terima kasih atas kesabaran dan dukungannya dalam perjalanan kami menuju peluncuran website yang lebih baik. Silahkan tetap mengunjungi kami untuk informasi lebih lanjut.</p>
                </div>
            </div>
        </div>
    )
}