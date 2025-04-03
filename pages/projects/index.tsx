"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	Heroprojects,
	Projectsprojects,
} from "@/container";

export default function Presentation() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroprojects />
				<Projectsprojects/>
				<Ready />
			</Curve>
		</>
	);
}
