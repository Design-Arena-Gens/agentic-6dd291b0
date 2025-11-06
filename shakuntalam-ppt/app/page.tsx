'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "अभिज्ञान शाकुन्तलम्",
      subtitle: "महाकवि कालिदास की कालजयी रचना",
      content: [
        "संस्कृत साहित्य का सर्वश्रेष्ठ नाटक",
        "सात अंकों में विभाजित",
        "प्रेम, वियोग और पुनर्मिलन की अमर कथा"
      ],
      bgColor: "from-orange-400 to-pink-500"
    },
    {
      title: "कालिदास",
      subtitle: "महाकवि का परिचय",
      content: [
        "संस्कृत साहित्य के सबसे महान कवि और नाटककार",
        "गुप्तकाल (4-5वीं शताब्दी) के रत्न",
        "प्रमुख रचनाएं: अभिज्ञान शाकुन्तलम्, मेघदूतम्, रघुवंशम्, कुमारसंभवम्",
        "प्रकृति वर्णन में अद्वितीय"
      ],
      bgColor: "from-purple-400 to-indigo-500"
    },
    {
      title: "कथा का आधार",
      subtitle: "महाभारत से प्रेरित",
      content: [
        "महाभारत के आदिपर्व से लिया गया",
        "शकुन्तला - ऋषि विश्वामित्र और अप्सरा मेनका की पुत्री",
        "पालन-पोषण: ऋषि कण्व के आश्रम में",
        "कालिदास ने मूल कथा में काव्यात्मक सौंदर्य जोड़ा"
      ],
      bgColor: "from-green-400 to-cyan-500"
    },
    {
      title: "मुख्य पात्र",
      subtitle: "नाटक के प्रमुख चरित्र",
      content: [
        "शकुन्तला - सुंदर और सरल तपस्विनी",
        "दुष्यंत - हस्तिनापुर का पराक्रमी राजा",
        "दुर्वासा ऋषि - शाप देने वाले तपस्वी",
        "कण्व ऋषि - शकुन्तला के पालक पिता",
        "प्रियंवदा और अनसूया - शकुन्तला की सखियाँ",
        "मातलि - इंद्र का सारथी"
      ],
      bgColor: "from-yellow-400 to-orange-500"
    },
    {
      title: "प्रथम दृष्टि प्रेम",
      subtitle: "पहला-दूसरा अंक",
      content: [
        "राजा दुष्यंत मृगया के दौरान कण्व आश्रम पहुँचे",
        "शकुन्तला से पहली मुलाकात",
        "गंधर्व विवाह - आश्रम में गुप्त विवाह",
        "दुष्यंत राजधानी लौटे, अंगूठी भेंट की",
        "शकुन्तला को प्रतीक्षा का वचन"
      ],
      bgColor: "from-pink-400 to-rose-500"
    },
    {
      title: "दुर्वासा का शाप",
      subtitle: "तीसरा-चौथा अंक",
      content: [
        "शकुन्तला दुष्यंत के प्रेम में खोई रही",
        "दुर्वासा ऋषि का अनादर हो गया",
        "क्रोधित ऋषि ने शाप दिया: 'जिसके ध्यान में तुम खोई हो, वह तुम्हें भूल जाएगा'",
        "प्रियंवदा ने क्षमा माँगी - शाप में बदलाव",
        "अंगूठी दिखाने पर स्मृति लौट आएगी"
      ],
      bgColor: "from-red-400 to-pink-500"
    },
    {
      title: "वियोग",
      subtitle: "पाँचवाँ अंक",
      content: [
        "शकुन्तला गर्भवती होकर राजमहल गई",
        "राजा दुष्यंत ने उसे नहीं पहचाना (शाप के कारण)",
        "रास्ते में अंगूठी नदी में खो गई",
        "शकुन्तला को अपमान सहना पड़ा",
        "माता अदिति ने शकुन्तला को अपने आश्रम में रख लिया"
      ],
      bgColor: "from-blue-400 to-indigo-500"
    },
    {
      title: "स्मृति की वापसी",
      subtitle: "छठा अंक",
      content: [
        "एक मछुआरे को मछली के पेट में अंगूठी मिली",
        "अंगूठी राजा के पास पहुँची",
        "दुष्यंत को सब याद आया",
        "पश्चाताप और शकुन्तला की खोज",
        "राजा व्याकुल और दुखी"
      ],
      bgColor: "from-teal-400 to-green-500"
    },
    {
      title: "पुनर्मिलन",
      subtitle: "सातवाँ अंक",
      content: [
        "इंद्र की सहायता के लिए दुष्यंत स्वर्ग गए",
        "लौटते समय मारीच ऋषि के आश्रम में रुके",
        "वहाँ अपने पुत्र भरत से मिले",
        "शकुन्तला से पुनर्मिलन",
        "सुखद अंत - परिवार का एकत्रीकरण"
      ],
      bgColor: "from-emerald-400 to-teal-500"
    },
    {
      title: "नाटक की विशेषताएं",
      subtitle: "साहित्यिक महत्व",
      content: [
        "प्रकृति चित्रण में अद्वितीय - हर ऋतु का सुंदर वर्णन",
        "मानवीय भावनाओं का सूक्ष्म चित्रण",
        "संस्कृत और प्राकृत भाषाओं का सुंदर समन्वय",
        "रस - श्रृंगार और करुण रस की प्रधानता",
        "नाट्य शास्त्र के सभी नियमों का पालन"
      ],
      bgColor: "from-violet-400 to-purple-500"
    },
    {
      title: "प्रमुख संवाद और श्लोक",
      subtitle: "अविस्मरणीय पंक्तियाँ",
      content: [
        "\"या कुन्देन्दुतुषारहारधवला...\" - सरस्वती वंदना",
        "शकुन्तला का आश्रम से विदाई दृश्य - अत्यंत मार्मिक",
        "प्रकृति के साथ शकुन्तला का संबंध",
        "भरत के बाल-लीला दृश्य",
        "हर श्लोक में गहन अर्थ और भाव"
      ],
      bgColor: "from-fuchsia-400 to-pink-500"
    },
    {
      title: "वैश्विक प्रभाव",
      subtitle: "विश्व साहित्य में स्थान",
      content: [
        "जर्मन कवि गेटे ने इसकी अत्यधिक प्रशंसा की",
        "अनेक भाषाओं में अनुवाद - अंग्रेजी, जर्मन, फ्रेंच आदि",
        "विश्व के सर्वश्रेष्ठ नाटकों में गिना जाता है",
        "पश्चिमी विद्वानों ने संस्कृत सीखने की प्रेरणा ली",
        "आज भी मंचन और अध्ययन जारी"
      ],
      bgColor: "from-cyan-400 to-blue-500"
    },
    {
      title: "प्रमुख संदेश",
      subtitle: "नाटक की सीख",
      content: [
        "सच्चा प्रेम सभी बाधाओं को पार करता है",
        "भाग्य और नियति की भूमिका",
        "क्षमा और करुणा का महत्व",
        "प्रकृति के साथ सामंजस्य",
        "धैर्य और विश्वास का फल मीठा होता है"
      ],
      bgColor: "from-lime-400 to-green-500"
    },
    {
      title: "धन्यवाद",
      subtitle: "अभिज्ञान शाकुन्तलम्",
      content: [
        "कालिदास की यह कृति आज भी प्रासंगिक है",
        "प्रेम, त्याग और पुनर्मिलन की शाश्वत कथा",
        "संस्कृत साहित्य का अनमोल रत्न",
        "सभी को एक बार अवश्य पढ़ना चाहिए"
      ],
      bgColor: "from-amber-400 to-orange-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Slide */}
        <div className={`relative bg-gradient-to-br ${slides[currentSlide].bgColor} rounded-2xl shadow-2xl p-12 min-h-[600px] flex flex-col justify-center`}>
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 drop-shadow">
              {slides[currentSlide].subtitle}
            </h2>
            <div className="space-y-4 mt-8">
              {slides[currentSlide].content.map((item, index) => (
                <p key={index} className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Slide number */}
          <div className="absolute bottom-6 right-6 text-white/70 text-lg font-semibold">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2 overflow-x-auto max-w-xl">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-200 flex-shrink-0 ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/30 w-3 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-200 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Keyboard instructions */}
        <div className="text-center mt-6 text-white/50 text-sm">
          कीबोर्ड से नेविगेट करें: ← → या स्पेसबार
        </div>
      </div>
    </main>
  );
}
