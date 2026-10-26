import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Tag, 
  ZoomIn
} from 'lucide-react';
import { GALLERY_DATA } from '../data/schoolData';
import type { GalleryPhoto, TabType } from '../types';

interface GalleryProps {
  setCurrentTab: (tab: TabType) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ setCurrentTab }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Cultural', 'Events'];

  const filteredPhotos = GALLERY_DATA.filter((photo) => {
    return activeCategory === 'All' || photo.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
              Moments & Memories
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              School Life & Photo Gallery
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              A visual glimpse into our vibrant school life in Garoora—academic triumphs, cultural celebrations, laboratory experiments, and athletic spirit.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 text-white">
            <ImageIcon className="w-80 h-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 bg-white/90 rounded-full text-blue-950 shadow">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {photo.category}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {photo.caption}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Session {photo.date}
                  </span>
                  <span className="text-blue-900 font-semibold group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:block"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:block"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={filteredPhotos[lightboxIndex].imageUrl}
                  alt={filteredPhotos[lightboxIndex].title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded">
                      {filteredPhotos[lightboxIndex].category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {lightboxIndex + 1} of {filteredPhotos.length}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white">
                    {filteredPhotos[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 max-w-xl">
                    {filteredPhotos[lightboxIndex].caption}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:hidden self-end">
                  <button onClick={prevPhoto} className="p-2 bg-slate-800 rounded text-white text-xs">Prev</button>
                  <button onClick={nextPhoto} className="p-2 bg-slate-800 rounded text-white text-xs">Next</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
