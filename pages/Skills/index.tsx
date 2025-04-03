"use client";
import {
	Capabilities,
	Expectations,
	HeroSkills,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Skills() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<HeroSkills />
				<Capabilities />
				<Expectations />
				<Ready />
			</Curve>
		</>
	);
}
