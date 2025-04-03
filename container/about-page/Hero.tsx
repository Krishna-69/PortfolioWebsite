"use client";
import Link from "next/link";
import Image from "next/image";
import { slide } from "@/public";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								I AM <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}>
										<Image
											width={120}
											height={50}
											src={slide}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										KRISHNA RASTOGI
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20px]">
						<div className="w-full flex justify-between  padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[10%] sm:w-full xm:w-full">
								<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
									About Me:
								</h3>
							</div>
							<div className="w-[48%] flex justify-between sm:w-full xm:w-full sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[50%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">
									<div className="flex flex-col gap-y-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry">
											As a software engineer, I believe great technology isn&apos;t just built—it&apos;s experienced.
											<br /> Clean code and intuitive design communicate better than words.
											<br />
											I craft digital solutions that engage, inspire, and drive impact.
											<br /> For me, software is storytelling—turning ideas into
											<br /> seamless user experiences that leave a lasting impression.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="padding-y"
				data-scroll
				data-scroll-speed="-.1">
				<Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
			</div>
			<div className="padding-x">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					I help clients eliminate inefficient
					<br className="sm:hidden xm:hidden" /> software with seamless, 
					<br className="sm:hidden xm:hidden" /> high-performing solutions.
				</h1>
			</div>
		</section>
	);
}
