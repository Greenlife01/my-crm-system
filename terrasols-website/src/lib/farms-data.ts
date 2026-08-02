export interface FarmSite {
  id: string;
  name: string;
  village: string;
  district: string;
  hectares: number;
  tonnesCO2: number;
  lat: number;
  lng: number;
}

export const farmSites: FarmSite[] = [
  { id: "f1", name: "Nirmatva Site — Khandwa North", village: "Punasa", district: "Khandwa", hectares: 420, tonnesCO2: 310, lat: 22.05, lng: 76.45 },
  { id: "f2", name: "Nirmatva Site — Nimar Belt", village: "Mundi", district: "Khandwa", hectares: 365, tonnesCO2: 275, lat: 22.24, lng: 75.98 },
  { id: "f3", name: "Nirmatva Site — Harsud", village: "Harsud", district: "Khandwa", hectares: 510, tonnesCO2: 402, lat: 22.10, lng: 76.74 },
  { id: "f4", name: "Nirmatva Site — Burhanpur", village: "Shahpur", district: "Burhanpur", hectares: 280, tonnesCO2: 198, lat: 21.31, lng: 76.23 },
  { id: "f5", name: "Nirmatva Site — Khargone", village: "Bhikangaon", district: "Khargone", hectares: 340, tonnesCO2: 260, lat: 21.85, lng: 75.85 },
  { id: "f6", name: "Nirmatva Site — Barwani", village: "Rajpur", district: "Barwani", hectares: 195, tonnesCO2: 141, lat: 21.87, lng: 74.98 },
];

export const deccanTrapsBelt = {
  center: { lat: 21.9, lng: 76.1 },
  label: "Deccan Traps Basalt Belt",
};
