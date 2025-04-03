import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Two principles I stand behind in
					<br className="sm:hidden xm:hidden" /> every part of my work:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Whether a product needs to engage or
								<br /> educate, it must always enhance the user’s experience.
								<br /> I seek insights that make digital solutions
								<br /> unexpectedly intuitive and impactful.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Great software reveals what’s hidden, simplifies the complex,
								<br /> and enhances understanding. I use clean design and
								<br /> thoughtful engineering to guide users seamlessly, ensuring
								<br /> they not only see the solution but truly experience it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
