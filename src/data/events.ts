export interface EventItem {
  id: string;
  title: string;
  date: string;
  category: "power-day" | "bod" | "celebration" | "training" | "other";
  description: string;
  photos?: string[];
}

export const eventCategories = {
  "power-day": { label: "Power Day", color: "#D4AF37" },
  bod: { label: "BOD 會議", color: "#E8C547" },
  celebration: { label: "尾牙春酒", color: "#B8960C" },
  training: { label: "教育訓練", color: "#D4AF37" },
  other: { label: "其他活動", color: "#94A3B8" },
};

export const events: EventItem[] = [
  {
    id: "event-1",
    title: "2025 長翔春酒聯歡",
    date: "2025-02",
    category: "celebration",
    description:
      "一年一度的春酒聯歡，長翔全體夥伴齊聚一堂，回顧過去一年的豐碩成果，展望未來無限可能。溫馨的氣氛中，夥伴們分享歡笑與感動，再次印證長翔不只是商業平台，更是一個溫暖的大家庭。",
  },
  {
    id: "event-2",
    title: "Power Day — 產業鏈串聯日",
    date: "2025-01",
    category: "power-day",
    description:
      "Power Day 是長翔分會最具能量的活動之一。在這天，夥伴們深度交流各自的專業領域與需求，透過結構化的媒合流程，創造更多精準的商業合作機會。",
  },
  {
    id: "event-3",
    title: "BOD 策略會議",
    date: "2024-12",
    category: "bod",
    description:
      "長翔核心幹部團隊定期召開 BOD（Board of Directors）策略會議，針對分會發展方向、會員成長計畫與活動規劃進行深入討論，確保長翔持續精進。",
  },
  {
    id: "event-4",
    title: "引薦技巧工作坊",
    date: "2024-11",
    category: "training",
    description:
      "邀請 BNI 資深顧問進行專題訓練，從引薦話術、需求挖掘到後續追蹤，全面提升夥伴們的引薦能力與信心。",
  },
  {
    id: "event-5",
    title: "2024 長翔尾牙盛宴",
    date: "2024-12",
    category: "celebration",
    description:
      "歲末年終的尾牙活動，是長翔感恩彼此、凝聚共識的重要時刻。精彩的表演、豐富的抽獎，還有夥伴們發自內心的感謝與祝福。",
  },
];
