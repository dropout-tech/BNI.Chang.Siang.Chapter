import React from 'react';

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`animate-pulse ${className}`}>
        <div className="bg-white border border-gray-100 shadow-sm  rounded-2xl p-6 space-y-4">
            <div className="h-4 bg-gray-50 rounded w-3/4" />
            <div className="h-3 bg-gray-50 rounded w-full" />
            <div className="h-3 bg-gray-50 rounded w-5/6" />
            <div className="h-3 bg-gray-50 rounded w-2/3" />
        </div>
    </div>
);

export const SkeletonMember: React.FC = () => (
    <div className="animate-pulse flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-50 mb-3" />
        <div className="h-3 bg-gray-50 rounded w-16 mb-2" />
        <div className="h-2 bg-gray-50 rounded w-12" />
    </div>
);

export const SkeletonHero: React.FC = () => (
    <div className="min-h-screen flex flex-col items-center justify-center animate-pulse px-4">
        <div className="h-12 bg-gray-50 rounded w-64 mb-6" />
        <div className="h-6 bg-gray-50 rounded w-96 mb-3" />
        <div className="h-4 bg-gray-50 rounded w-80" />
    </div>
);

export const SkeletonSection: React.FC<{ title?: string; cards?: number }> = ({ title, cards = 3 }) => (
    <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
            {title && <div className="text-center mb-12 animate-pulse"><div className="h-8 bg-gray-50 rounded w-48 mx-auto mb-4" /><div className="h-1 bg-gray-50 rounded w-20 mx-auto" /></div>}
            <div className={`grid grid-cols-1 md:grid-cols-${cards} gap-6`}>
                {Array.from({ length: cards }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
        </div>
    </section>
);
