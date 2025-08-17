const groups = [
  {
    name: "Programming Languages",
    items: ["C", "C++", "Python"],
  },
  {
    name: "Web Development & Databases",
    items: ["HTML", "CSS", "MySQL"],
  },
  {
    name: "Libraries & Frameworks",
    items: ["Pandas", "NumPy", "Matplotlib", "scikit-learn"],
  },
  {
    name: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "LaTeX", "MS Office"],
  },
  {
    name: "Core Concepts",
    items: [
      "DSA",
      "Algorithm Design",
      "ML",
      "Optimization Theory",
      "Probability & Statistics",
      "Linear Algebra",
    ],
  },
];

export default function Skills() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>

      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">{g.name}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-sm border border-white/10 bg-black/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
