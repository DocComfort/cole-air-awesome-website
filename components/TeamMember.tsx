import Image from "next/image";
import Link from "next/link";

export interface TeamMemberProps {
	name: string;
	title: string;
	photo: string;
	bio?: string;
	certifications?: string[];
	experience?: string;
	isFounder?: boolean;
	isOwner?: boolean;
	href?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
	name,
	title,
	photo,
	bio,
	certifications = [],
	experience,
	isFounder = false,
	isOwner = false,
	href
}) => {
	const badgeColor = isFounder ? "bg-brand-orange" : isOwner ? "bg-brand-blue" : "bg-slate-600";
	const badgeText = isFounder ? "Founder" : isOwner ? "Owner" : "Team Member";

	if (href) {
		return (
			<Link href={href as any} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-3xl">
				<div className="card p-6 text-center transition-shadow hover:shadow-lg group-hover:shadow-lg">
					<div className="relative mb-6">
						<div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-lg">
							<Image
								src={photo}
								alt={`${name} - ${title}`}
								width={128}
								height={128}
								className="w-full h-full object-cover"
							/>
						</div>
						{(isFounder || isOwner) && (
							<div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
								{badgeText}
							</div>
						)}
					</div>
					<div className="space-y-3">
						<div>
							<h4 className="font-bold text-xl text-slate-900 group-hover:text-brand-blue transition-colors">
								{name}
							</h4>
							<p className="text-brand-blue font-medium">{title}</p>
						</div>
						{experience && (
							<div className="text-sm text-slate-600">
								<span className="font-medium">{experience}</span> of experience
							</div>
						)}
						{bio && (
							<p className="text-slate-700 text-sm leading-relaxed">{bio}</p>
						)}
						{certifications.length > 0 && (
							<div className="space-y-2">
								<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
									Certifications
								</p>
								<div className="flex flex-wrap gap-1 justify-center">
									{certifications.map((cert, index) => (
										<span
											key={index}
											className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
										>
											{cert}
										</span>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</Link>
		);
	}
	// Fallback to div if no href
	return (
		<div className="group">
			<div className="card p-6 text-center transition-shadow hover:shadow-lg group-hover:shadow-lg">
				<div className="relative mb-6">
					<div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-lg">
						<Image
							src={photo}
							alt={`${name} - ${title}`}
							width={128}
							height={128}
							className="w-full h-full object-cover"
						/>
					</div>
					{(isFounder || isOwner) && (
						<div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
							{badgeText}
						</div>
					)}
				</div>
				<div className="space-y-3">
					<div>
						<h4 className="font-bold text-xl text-slate-900 group-hover:text-brand-blue transition-colors">
							{name}
						</h4>
						<p className="text-brand-blue font-medium">{title}</p>
					</div>
					{experience && (
						<div className="text-sm text-slate-600">
							<span className="font-medium">{experience}</span> of experience
						</div>
					)}
					{bio && (
						<p className="text-slate-700 text-sm leading-relaxed">{bio}</p>
					)}
					{certifications.length > 0 && (
						<div className="space-y-2">
							<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
								Certifications
							</p>
							<div className="flex flex-wrap gap-1 justify-center">
								{certifications.map((cert, index) => (
									<span
										key={index}
										className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
									>
										{cert}
									</span>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
