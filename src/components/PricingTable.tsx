import { useState } from "react";
import { plans, features, type PlanFeature } from "../data/pricing";

export default function PricingTable() {
	const [annual, setAnnual] = useState(false);

	return (
		<div>
			<div className="flex items-center justify-center gap-3 mb-8">
				<span
					className={`text-sm ${!annual ? "" : ""}`}
					style={{ color: !annual ? "var(--text)" : "var(--text-muted)" }}
				>
					Monthly
				</span>
				<button
					onClick={() => setAnnual(!annual)}
					className="relative h-6 w-11 rounded-full transition-colors"
					style={{ background: annual ? "var(--accent)" : "var(--line)" }}
				>
					<span
						className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform"
						style={{
							transform: annual ? "translateX(1.25rem)" : "translateX(0)",
						}}
					/>
				</button>
				<span
					className={`text-sm ${annual ? "" : ""}`}
					style={{ color: annual ? "var(--text)" : "var(--text-muted)" }}
				>
					Annual{" "}
					<span style={{ color: "var(--accent)", fontSize: "0.75rem" }}>
						(save ~17%)
					</span>
				</span>
			</div>

			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{plans.map((plan) => (
					<div
						key={plan.id}
						className="rounded-xl border p-5 transition relative"
						style={{
							background: plan.highlighted
								? "var(--accent-surface-soft)"
								: "var(--bg-card)",
							borderColor: plan.highlighted
								? "var(--accent-outline-soft)"
								: "var(--line)",
							boxShadow: plan.highlighted
								? "0 0 30px var(--accent-surface-soft), inset 0 1px 0 0 #ffffff08"
								: "inset 0 1px 0 0 #ffffff08",
						}}
					>
						{plan.highlighted && (
							<span
								className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-semibold"
								style={{ background: "var(--accent)", color: "white" }}
							>
								Popular
							</span>
						)}
						<h3
							className="text-lg font-bold"
							style={{
								color: "var(--text)",
								fontFamily: "var(--font-serif, Georgia, serif)",
							}}
						>
							{plan.name}
						</h3>
						<div className="mt-1">
							<span
								className="text-3xl font-bold"
								style={{ color: "var(--text)" }}
							>
								{annual ? plan.priceAnnual : plan.price}
							</span>
							{plan.price !== "Custom" && plan.price !== "$0" && (
								<span
									className="text-sm"
									style={{ color: "var(--text-muted)" }}
								>
									/mo
								</span>
							)}
						</div>
						<p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
							{plan.description}
						</p>
						<p
							className="mt-1 text-xs italic"
							style={{ color: "var(--accent)", opacity: 0.8 }}
						>
							{plan.tagline}
						</p>
						{"target" in plan && plan.target && (
							<p
								className="mt-1 text-xs"
								style={{ color: "var(--text-muted)", opacity: 0.6 }}
							>
								{plan.target}
							</p>
						)}
						<a
							href="/pricing"
							className="mt-4 block rounded-lg py-2 text-center text-sm font-medium transition"
							style={{
								background: plan.highlighted ? "var(--accent)" : "transparent",
								color: plan.highlighted ? "white" : "var(--text-muted)",
								border: plan.highlighted
									? "none"
									: "1px solid var(--line-strong)",
							}}
						>
							{plan.cta}
						</a>
					</div>
				))}
			</div>

			<div className="mt-8 overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr style={{ borderBottom: "1px solid var(--line)" }}>
							<th
								className="pb-3 pr-4 text-left text-xs"
								style={{ color: "var(--text-muted)" }}
							>
								Feature
							</th>
							<th
								className="pb-3 px-3 text-center text-xs"
								style={{ color: "var(--text-muted)" }}
							>
								Spark
							</th>
							<th
								className="pb-3 px-3 text-center text-xs"
								style={{ color: "var(--text-muted)" }}
							>
								Ignite
							</th>
							<th
								className="pb-3 px-3 text-center text-xs"
								style={{ color: "var(--text-muted)" }}
							>
								Blaze
							</th>
							<th
								className="pb-3 pl-3 text-center text-xs"
								style={{ color: "var(--text-muted)" }}
							>
								Enterprise
							</th>
						</tr>
					</thead>
					<tbody>
						{features.map((f: PlanFeature) => (
							<tr
								key={f.name}
								style={{ borderBottom: "1px solid var(--line)" }}
							>
								<td className="py-3 pr-4" style={{ color: "var(--text-copy)" }}>
									{f.name}
								</td>
								<td className="py-3 px-3 text-center">
									{typeof f.spark === "boolean" ? (
										f.spark ? (
											<span style={{ color: "var(--accent)" }}>✓</span>
										) : (
											<span
												style={{ color: "var(--text-muted)", opacity: 0.4 }}
											>
												—
											</span>
										)
									) : (
										<span style={{ color: "var(--text-muted)" }}>
											{f.spark}
										</span>
									)}
								</td>
								<td className="py-3 px-3 text-center">
									{typeof f.ignite === "boolean" ? (
										f.ignite ? (
											<span style={{ color: "var(--accent)" }}>✓</span>
										) : (
											<span
												style={{ color: "var(--text-muted)", opacity: 0.4 }}
											>
												—
											</span>
										)
									) : (
										<span style={{ color: "var(--text-muted)" }}>
											{f.ignite}
										</span>
									)}
								</td>
								<td className="py-3 px-3 text-center">
									{typeof f.blaze === "boolean" ? (
										f.blaze ? (
											<span style={{ color: "var(--accent)" }}>✓</span>
										) : (
											<span
												style={{ color: "var(--text-muted)", opacity: 0.4 }}
											>
												—
											</span>
										)
									) : (
										<span style={{ color: "var(--text-muted)" }}>
											{f.blaze}
										</span>
									)}
								</td>
								<td className="py-3 pl-3 text-center">
									{typeof f.enterprise === "boolean" ? (
										f.enterprise ? (
											<span style={{ color: "var(--accent)" }}>✓</span>
										) : (
											<span
												style={{ color: "var(--text-muted)", opacity: 0.4 }}
											>
												—
											</span>
										)
									) : (
										<span style={{ color: "var(--text-muted)" }}>
											{f.enterprise}
										</span>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
