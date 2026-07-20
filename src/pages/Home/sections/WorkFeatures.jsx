import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const FeatureItem = ({ title, description, link }) => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noreferrer"
            className="group block p-5 rounded-2xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-theme-card -mx-5 border border-transparent hover:border-gray-100 dark:hover:border-white/5"
        >
            <div className="flex justify-between items-start gap-4">
                <div className="max-w-2xl flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-[18px] font-bold text-theme-text transition-colors group-hover:text-accent">{title}</h3>
                        <ExternalLink size={14} className="text-theme-muted opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all" />
                    </div>
                    <p className="text-theme-muted text-sm leading-relaxed opacity-90 mb-3">
                        {description}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-theme-muted group-hover:text-accent transition-colors uppercase tracking-wider">
                        Read more
                    </span>
                </div>
                <div className="text-theme-muted/50 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-1 flex-shrink-0">
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
            </div>
        </a>
    );
};

const WorkFeatures = () => {
    const features = [
        {
            title: "IP Location Detection",
            description: "I built a feature that tracks and maps user locations based on authorized IP addresses configured in the account settings. This allows account owners to verify exactly where their team is working from, providing better visibility for remote work and improving security compliance.",
            link: "https://help.desktime.com/hc/en-us/articles/34605873392797-Using-IP-location-tracking"
        },
        {
            title: "Coupon Flow Rework",
            description: "I refactored the underlying logic of how discount coupons work. The old system was difficult to maintain, so I rewrote the core flow to make it significantly smoother and more reliable, greatly simplifying how our admins create and manage discount campaigns.",
            link: "https://help.desktime.com/hc/en-us/articles/4413027602321-Applying-a-promo-code"
        }
    ];

    return (
        <div className="flex flex-col gap-1">
            {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
            ))}
        </div>
    );
};

export default WorkFeatures;
