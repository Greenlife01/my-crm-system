export interface FarmerStory {
  slug: string;
  name: string;
  village: string;
  district: string;
  state: string;
  cropType: string;
  quoteHindi: string;
  quoteEnglish: string;
  soilPhChange: string;
  yieldChange: string;
  youtubeId: string;
}

export const farmerStories: FarmerStory[] = [
  {
    slug: "ramesh-patel",
    name: "Ramesh Patel",
    village: "Punasa",
    district: "Khandwa",
    state: "Madhya Pradesh",
    cropType: "Soybean",
    quoteHindi: "बेसाल्ट डालने के बाद हमारी मिट्टी की सेहत में काफी सुधार हुआ है।",
    quoteEnglish: "After the basalt application, the health of our soil has improved a lot.",
    soilPhChange: "+0.6 pH",
    yieldChange: "+11% yield",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "sunita-devi",
    name: "Sunita Devi",
    village: "Mundi",
    district: "Khandwa",
    state: "Madhya Pradesh",
    cropType: "Wheat",
    quoteHindi: "अब हमें अतिरिक्त आय भी मिलती है और खेती करने का तरीका वही है।",
    quoteEnglish: "Now we also get additional income, and our farming method stays the same.",
    soilPhChange: "+0.4 pH",
    yieldChange: "+9% yield",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "harivallabh-yadav",
    name: "Harivallabh Yadav",
    village: "Harsud",
    district: "Khandwa",
    state: "Madhya Pradesh",
    cropType: "Cotton",
    quoteHindi: "टेरासॉल्स की टीम ने हमें कुछ भी खर्च किए बिना मदद की।",
    quoteEnglish: "The Terrasols team helped us without us having to spend anything.",
    soilPhChange: "+0.5 pH",
    yieldChange: "+13% yield",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "kamla-bai",
    name: "Kamla Bai",
    village: "Shahpur",
    district: "Burhanpur",
    state: "Madhya Pradesh",
    cropType: "Soybean",
    quoteHindi: "हमारी ज़मीन अब पहले से ज़्यादा उपजाऊ है।",
    quoteEnglish: "Our land is now more fertile than before.",
    soilPhChange: "+0.3 pH",
    yieldChange: "+8% yield",
    youtubeId: "dQw4w9WgXcQ",
  },
];
