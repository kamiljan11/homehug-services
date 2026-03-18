import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ icon, title, description, features, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="group bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-up border border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-5 leading-relaxed">{description}</p>
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
