export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								skills
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							I develop&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								scalable and efficient application,&nbsp;
							</span>
							refining my skills&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								continuously through these projects&nbsp;
							</span>
							and&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								collaborating with talented professionals.&nbsp;
							</span>
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									I do this by following <br /> simple approach:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Goal defines it all
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											What do you want to achieve?
											<br className="sm:hidden xm:hidden" /> Defining the
											purpose of your <br className="sm:hidden xm:hidden" />	
											software ensures a clear direction, <br className="sm:hidden xm:hidden"/> enabling efficient development,
											<br className="sm:hidden xm:hidden" /> hits the mark and
											seamless <br className="sm:hidden xm:hidden"/> functionality, and impactful results.
										</p>
									</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
										    Context Shapes Solutions
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
										    Where will your software run? 
											<br className="sm:hidden xm:hidden" /> Web, mobile, or enterprise? 
											<br className="sm:hidden xm:hidden" /> Understanding the environment helps
											<br className="sm:hidden xm:hidden" /> tailor development for optimal
											<br className="sm:hidden xm:hidden" /> performance and user experience.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
