import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Gavel, AlertTriangle, ZapOff, CheckCircle2, ClipboardList, ExternalLink, CalendarDays, Building2, Stethoscope, Home, Briefcase, School, ShoppingBag, Clapperboard, Hotel, PlusSquare, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const complianceData = [
  { type: "Factories (with bath)", domestic: 30, flushing: 15, total: 45, icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
  { type: "Factories (no bath)", domestic: 20, flushing: 0, total: 20, icon: Building2, color: "text-blue-500", bg: "bg-blue-50" },
  { type: "Hospitals (< 100 beds)", domestic: 230, flushing: 110, total: 340, icon: PlusSquare, color: "text-red-500", bg: "bg-red-50" },
  { type: "Hospitals (> 100 beds)", domestic: 300, flushing: 150, total: 450, icon: PlusSquare, color: "text-red-600", bg: "bg-red-50" },
  { type: "OPD", domestic: 10, flushing: 5, total: 15, icon: Stethoscope, color: "text-green-500", bg: "bg-green-50" },
  { type: "Nurses Home", domestic: 90, flushing: 45, total: 135, icon: Home, color: "text-indigo-500", bg: "bg-indigo-50" },
  { type: "Hotels (< 3 star)", domestic: 120, flushing: 60, total: 180, icon: Hotel, color: "text-amber-500", bg: "bg-amber-50" },
  { type: "Hotels (> 4 star)", domestic: 260, flushing: 60, total: 320, icon: Hotel, color: "text-amber-600", bg: "bg-amber-50" },
  { type: "Hostels", domestic: 90, flushing: 45, total: 135, icon: Home, color: "text-indigo-500", bg: "bg-indigo-50" },
  { type: "Offices", domestic: 25, flushing: 20, total: 45, icon: Briefcase, color: "text-slate-500", bg: "bg-slate-50" },
  { type: "Cinema/Multiplex", domestic: 10, flushing: 5, total: 15, icon: Clapperboard, color: "text-purple-500", bg: "bg-purple-50" },
  { type: "Schools (Day)", domestic: 20, flushing: 25, total: 45, icon: School, color: "text-orange-500", bg: "bg-orange-50" },
  { type: "Schools (Boarding)", domestic: 90, flushing: 45, total: 135, icon: School, color: "text-orange-600", bg: "bg-orange-50" },
  { type: "Shopping & Retail", domestic: 25, flushing: 20, total: 45, icon: ShoppingBag, color: "text-pink-500", bg: "bg-pink-50" },
];

const ComplianceCard = ({ item }: { item: typeof complianceData[0] }) => {
    const Icon = item.icon;
    const isHighConsumption = item.total >= 100;

    return (
        <div className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group relative overflow-hidden">
            {/* Top Indicator Bar */}
            <div className={cn("absolute top-0 left-0 w-full h-1", isHighConsumption ? "bg-amber-400" : "bg-green-400")}></div>
            
            <div className="flex items-start justify-between mb-4">
                <div className={cn("p-3 rounded-xl", item.bg, item.color)}>
                    <Icon size={24} />
                </div>
                <span className={cn(
                    "text-xs font-bold px-2 py-1 rounded-full",
                    isHighConsumption ? "bg-amber-50 text-amber-700" : "bg-green-50 text-green-700"
                )}>
                    {item.total} LPD
                </span>
            </div>
            
            <h4 className="font-bold text-zinc-800 text-lg mb-4 leading-tight">{item.type}</h4>
            
            <div className="mt-auto space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Domestic</span>
                    <span className="font-semibold text-zinc-700">{item.domestic} L</span>
                </div>
                <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: `${(item.domestic / item.total) * 100}%` }}></div>
                </div>
                
                <div className="flex justify-between text-sm mt-3">
                    <span className="text-zinc-500">Flushing</span>
                    <span className="font-semibold text-zinc-700">{item.flushing} L</span>
                </div>
                    <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${(item.flushing / item.total) * 100}%` }}></div>
                </div>
            </div>
        </div>
    )
}

const ComplianceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Show only first 3 items initially
  const displayedItems = complianceData.slice(0, 3);

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <MaxWidthWrapper>
        {/* Supreme Court Order Section (Unchanged) */}
        <div className="mb-24">
          <div className="flex flex-col items-center text-center mb-12">
             <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-800 mb-6">
                <Gavel className="w-4 h-4 mr-2" />
                Legal Mandate
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Regulatory Compliance & Standards</h2>
            <p className="text-zinc-600 max-w-2xl">Adhering to environmental regulations is not just a choice, but a legal necessity for operational sustainability.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-zinc-200 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
             
             <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-100 pb-6 mb-8 gap-4">
                    <div>
                        <h3 className="text-2xl font-bold text-zinc-900 flex items-center gap-3">
                            Supreme Court Order
                            <span className="hidden md:inline-flex px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-normal rounded-full border border-zinc-200">Writ Petition © No. 375 of 2012</span>
                        </h3>
                        <p className="text-sm text-zinc-500 mt-2 flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            Strict Enforcement Directive
                        </p>
                    </div>
                    <Link href="https://main.sci.gov.in/jonew/judis/44605.pdf" target="_blank" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 hover:bg-blue-100">
                        View Official Order <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-900 mb-1">Mandatory ETP Installation</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">All industrial units requiring "consent to operate" must make their <strong className="text-green-700">primary effluent treatment plants fully operational</strong> within three months.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                                <ClipboardList className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-900 mb-1">SPCB Inspection & Action</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">State Pollution Control Boards will inspect units. Non-compliant units will be <strong className="text-red-600">restrained from industrial activity</strong> immediately.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                        <div className="flex items-start gap-3 mb-4">
                            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
                            <h4 className="font-bold text-red-900">Enforcement Measures</h4>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-red-800 text-sm">
                                <ZapOff className="w-5 h-5 shrink-0" />
                                <span>Directions may be enforced by <strong className="font-bold">disconnecting electricity supply</strong> to defaulting industries.</span>
                            </li>
                            <li className="flex gap-3 text-red-800 text-sm">
                                <Gavel className="w-5 h-5 shrink-0" />
                                <span>Sewage treatment plants must also be set up and made functional within the specified timeline.</span>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Jalshakti Guidelines - Preview & Modal */}
        <div>
          <div className="text-center mb-12">
             <h3 className="text-3xl font-bold text-zinc-900 mb-3">Ministry of Jalshakti Guidelines</h3>
             <p className="text-zinc-500 max-w-2xl mx-auto">Daily Water Requirement Standards (Liters per person per day) across various building types.</p>
          </div>
          
          {/* Initial Grid (3 Items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedItems.map((item, index) => (
                <ComplianceCard key={index} item={item} />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
                onClick={() => setIsModalOpen(true)}
            >
                View Full Guidelines
            </Button>
          </div>

          {/* Full Guidelines Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                <div className="bg-zinc-50 w-full max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-200">
                    
                    {/* Modal Header */}
                    <div className="p-6 border-b border-zinc-200 bg-white flex justify-between items-center sticky top-0 z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900">Ministry of Jalshakti Guidelines</h3>
                            <p className="text-zinc-500 text-sm">Complete List of Daily Water Requirement Standards</p>
                        </div>
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors"
                            title="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Modal Content - Scrollable Grid */}
                    <div className="overflow-y-auto p-6 md:p-8 bg-zinc-50/50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {complianceData.map((item, index) => (
                                <ComplianceCard key={index} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="p-4 border-t border-zinc-200 bg-white text-center">
                        <Button 
                            onClick={() => setIsModalOpen(false)}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                        >
                            Close Guidelines
                        </Button>
                    </div>
                </div>
            </div>
          )}

        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ComplianceSection;
