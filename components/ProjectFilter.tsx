interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button 
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full border transition-all duration-200 ${
            activeCategory === category
              ? 'bg-brand-blue text-white border-brand-blue'
              : 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}