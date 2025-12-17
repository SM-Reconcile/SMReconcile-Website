import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { ChevronRight, ChevronDown, Droplets, Filter, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 1,
    title: "Primary Treatment",
    description: "Removal of floating debris and coarse solids through screening and grit chambers.",
    reduction: "30% Reduction",
    icon: Filter,
    color: "from-slate-700 to-slate-500", // Dark/Grey for raw input
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-700",
    accent: "bg-slate-100 text-slate-800"
  },
  {
    id: 2,
    title: "Secondary Treatment",
    description: "Biological processing where BOD, COD, and TSS are significantly reduced.",
    reduction: "65% Reduction",
    icon: Waves,
    color: "from-teal-600 to-teal-400", // Transitioning to clean
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-700",
    accent: "bg-teal-100 text-teal-800"
  },
  {
    id: 3,
    title: "Tertiary Treatment",
    description: "Final filtration through sand and carbon filters for clear, reusable water.",
    reduction: "5% Reduction",
    icon: Droplets,
    color: "from-sky-500 to-blue-400", // Clean blue water
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-700",
    accent: "bg-sky-100 text-sky-800"
  }
];

const ProcessFlow = () => {
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <MaxWidthWrapper className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Water Purification Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">Sewage / Effluent Treatment Process</h2>
          <p className="max-w-3xl mx-auto text-lg text-zinc-600 leading-relaxed">
            Our comprehensive multi-stage treatment ensures the removal of suspended solids and organic matter, returning clean water to the ecosystem.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="relative mt-12 mb-20">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-zinc-200 -translate-y-1/2 rounded-full z-0 overflow-hidden">
                 <div className="w-full h-full bg-gradient-to-r from-slate-400 via-teal-400 to-blue-500 opacity-30 animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={index} className="relative group">
                            {/* Card */}
                            <div className={cn(
                                "bg-white p-8 rounded-3xl shadow-sm border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center h-full z-20 relative",
                                step.border
                            )}>
                                {/* Step Indicator */}
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-md bg-gradient-to-br transition-transform group-hover:scale-110 duration-500",
                                    step.color
                                )}>
                                    <Icon size={32} />
                                </div>
                                
                                <h3 className={cn("text-2xl font-bold mb-3", step.text)}>{step.title}</h3>
                                <p className="text-zinc-600 mb-6 leading-relaxed flex-grow">{step.description}</p>
                                
                                {/* Stats Badge */}
                                <div className={cn("px-4 py-2 rounded-full font-semibold text-sm shadow-sm", step.accent)}>
                                    {step.reduction}
                                </div>
                            </div>

                            {/* Mobile Connector with Line */}
                             {index < steps.length - 1 && (
                                <div className="md:hidden flex flex-col items-center justify-center -my-2 py-4 relative z-0">
                                    {/* Vertical connecting line */}
                                    <div className="absolute top-0 bottom-0 w-2 bg-zinc-100 z-[-1] rounded-full overflow-hidden">
                                        <div className={cn("w-full h-full bg-gradient-to-b opacity-20", step.color.replace('from-', 'from-').replace('to-', 'to-'))}></div>
                                    </div>
                                    {/* Small dot instead of arrow */}
                                    <div className="w-3 h-3 rounded-full bg-zinc-300 border-2 border-white z-10"></div>
                                </div>
                            )}
                             {/* Desktop Connector Arrow overlay */}
                             {index < steps.length - 1 && (
                                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-0 translate-x-1/2">
                                     <div className="bg-white p-2 rounded-full border border-zinc-100 shadow-sm">
                                        <ChevronRight className="text-zinc-400" size={24} />
                                     </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Thumb Rule Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
             {steps.map((step, index) => (
                 <div key={index} className={cn("p-4 rounded-xl border flex items-center justify-between shadow-sm bg-white/50 backdrop-blur-sm", step.border)}>
                     <span className="font-semibold text-zinc-700">Stage {index + 1} Reduction</span>
                     <span className={cn("font-bold text-lg", step.text)}>{step.reduction.split(' ')[0]}</span>
                 </div>
             ))}
        </div>

      </MaxWidthWrapper>
    </section>
  );
};

export default ProcessFlow;
