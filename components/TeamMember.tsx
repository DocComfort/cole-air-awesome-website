import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  photo: string;
  bio?: string;
  certifications?: string[];
  experience?: string;
  isFounder?: boolean;
  isOwner?: boolean;
}

export default function TeamMember({
  name,
  title,
  photo,
  bio,
  certifications = [],
  experience,
  isFounder = false,
  isOwner = false
}: TeamMemberProps) {
  const badgeColor = isFounder ? "bg-brand-orange" : isOwner ? "bg-brand-blue" : "bg-slate-600";
  const badgeText = isFounder ? "Founder" : isOwner ? "Owner" : "Team Member";

  return (
    <div className="card p-6 text-center group hover:shadow-lg transition-shadow">
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
  );
}

// Placeholder component for when photo doesn't exist yet
export function TeamMemberPlaceholder({
  name = "Team Member",
  title = "HVAC Technician",
  photoPath
}: {
  name?: string;
  title?: string;
  photoPath: string;
}) {
  return (
    <div className="card p-6 text-center border-2 border-dashed border-slate-300 bg-slate-50">
      <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-slate-400">
        <div className="text-center text-slate-500">
          <div className="text-3xl mb-2">👨‍🔧</div>
          <p className="text-xs font-medium">Add Photo</p>
        </div>
      </div>
      <h4 className="font-semibold text-slate-700 mb-1">{name}</h4>
      <p className="text-sm text-slate-500 mb-3">{title}</p>
      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <p className="text-xs text-slate-600">
          <strong>Photo Path:</strong><br />
          <code className="bg-slate-100 px-1 rounded text-xs">{photoPath}</code>
        </p>
      </div>
    </div>
  );
}