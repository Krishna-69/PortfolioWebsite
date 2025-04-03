import Link from "next/link";
import { RoundButton } from "@/components";
import { FormEvent, useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    goal: "",
    date: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, message: "" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // ✅ Validate inputs before sending request
    if (!form.name || !form.goal || !form.date || !form.email || !form.message) {
      setStatus({ success: false, message: "❌ Please fill in all fields." });
      return;
    }

    // ✅ Ensure email is valid (simple regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus({ success: false, message: "❌ Please enter a valid email address." });
      return;
    }

    setLoading(true);
    setStatus({ success: false, message: "" });

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to send email.");
      }

      setStatus({ success: true, message: "✅ Inquiry sent successfully!" });
      setForm({ name: "", goal: "", date: "", email: "", message: "" });
    } catch (error: any) {
      setStatus({ success: false, message: `❌ ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
		<form onSubmit={onSubmit}>
			<section className="w-full padding-x padding-y relative">
				<div className="w-full flex flex-col gap-[15px]">
					<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
						<div className="flex gap-[10px] w-full sm:w-full xm:w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									Hi! My name is
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									placeholder="Enter your name*"
									value={form.name}
									onChange={(e) => setForm({ ...form, name: e.target.value })}
									className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full"
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									I’m looking for a partner to help me with
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									placeholder="Your goal type here*"
									value={form.goal}
									onChange={(e) => setForm({ ...form, goal: e.target.value })}
									className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									With an idea of having that completed
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									placeholder="Date*"
									value={form.date}
									onChange={(e) => setForm({ ...form, date: e.target.value })}
									className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									You can reach me at
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									placeholder="name@example.com"
									value={form.email}
									onChange={(e) => setForm({ ...form, email: e.target.value })}
									className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									Optionally, I’m sharing more:
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									placeholder="Product details type here..."
									value={form.message}
									onChange={(e) => setForm({ ...form, message: e.target.value })}
									className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
					<RoundButton type="submit" bgcolor="#212121" title="Send Inquiry" className="bg-white text-black" style={{ color: "#fff" }} />
				</div>
			</section>
		</form>
	);
}