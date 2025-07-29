export function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <div id="skills" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">
        technical skills.
      </h2>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {Object.entries(data).flatMap(([category, skills]) =>
          skills.map(skill => (
            <span
              key={`${category}-${skill}`}
              className="px-2.5 py-0.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 cursor-pointer transition"
            >
              {skill}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
