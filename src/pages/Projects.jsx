import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const cards = [
  {
    title: "IMDB Movie Dataset Analysis",
    desc:
      "Explored and visualized IMDB movie data to identify trends in ratings and genres. Improved understanding of EDA and preprocessing for ML tasks.",
    tech: ["Python", "Pandas", "Matplotlib", "Machine Learning"],
    link: "https://github.com/kyaminipriya9/kyaminipriya9.github.io/blob/main/Project_EDIGLOBE.ipynb",
    dates: "12-03-2024 – 27-03-2024",
  },
  {
    title: "Predicting Heart Disease Risk",
    desc:
      "Built and evaluated classification models to predict 10-year coronary heart disease risk using the Framingham dataset (4,000+ records, 15 features).",
    tech: ["Python", "scikit-learn", "Pandas"],
    link: "https://github.com/kyaminipriya9/kyaminipriya9.github.io/blob/main/ML-MAJOR-FEBRUARY.ipynb",
    dates: "17-04-2024 – 07-05-2024",
  },
  {
    title: "Application of Linear Algebra in PCA",
    desc:
      "Applied eigen decomposition for dimensionality reduction; implemented on the Iris dataset with standardization and component analysis.",
    tech: ["Python", "NumPy", "Matplotlib", "Linear Algebra"],
    link: "https://drive.google.com/file/d/1kDPHfgzt9OmaLYM2nlGbf2l7vzOHuLli/view?usp=sharing",
    dates: "Aug 2024 – Sep 2024",
  },
  {
    title: "FamousFoods Sales & Customer Analysis (Case Study)",
    desc:
      "Analyzed customer, order, sales, and cancellation datasets; answered 7 business questions with visuals and recommendations to improve sales and reduce cancellations.",
    tech: ["SQL", "Python", "pandas", "matplotlib"],
    link: "https://www.datacamp.com/datalab/w/7c81036f-7145-4a30-82c7-88026552ca83/edit",
    dates: "2024",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((p) => (
          <motion.article
            key={p.title}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-purple-500/30"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-purple-300">{p.title}</h3>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="opacity-80 hover:opacity-100"
                aria-label="Open project"
                title="Open project"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-lg text-xs border border-white/10 bg-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 text-xs text-gray-400">{p.dates}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
