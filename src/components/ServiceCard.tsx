import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
  highlighted?: boolean;
}

const ServiceCard = ({ icon, title, description, features, delay = 0, highlighted = false }: ServiceCardProps) => {
  return (
    <div
      className={`group rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-up ${
        highlighted
          ? "bg-primary text-primary-foreground border-2 border-primary ring-4 ring-primary/20 scale-[1.03]"
          : "bg-card border border-border"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors ${
        highlighted ? "bg-primary-foreground/20 group-hover:bg-primary-foreground/30" : "bg-primary/10 group-hover:bg-primary/20"
      }`}>
        {highlighted ? <span className="[&>svg]:text-primary-foreground">{icon}</span> : icon}
      </div>
      <h3 className={`font-heading text-xl font-bold mb-3 ${highlighted ? "" : "text-card-foreground"}`}>{title}</h3>
      {highlighted && <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground px-3 py-1 rounded-full mb-4">Most Popular</span>}
      <p className={`mb-5 leading-relaxed ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
