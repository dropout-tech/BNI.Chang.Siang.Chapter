export interface Achievement {
  id: string;
  type: "story" | "stat";
  title: string;
  description: string;
  amount?: string;
  members?: string[];
  date?: string;
}

export const stats = {
  totalReferralAmount: "NT$ 50,000,000+",
  totalReferrals: "500+",
  totalMembers: "30+",
  yearsActive: "3+",
};

export const achievements: Achievement[] = [
  {
    id: "story-1",
    type: "story",
    title: "手工柚子皂的美好合作",
    description:
      "莉菁老師與鳳珠姐透過長翔的引薦平台相遇，兩人結合手工皂的精緻工藝與在地柚子的天然原料，共同打造出獨具特色的手工柚子皂品牌。這不僅是一次商業合作，更是一段從信任到共好的精彩故事。",
    members: ["莉菁老師", "鳳珠姐"],
    date: "2024",
  },
  {
    id: "story-2",
    type: "story",
    title: "跨產業整合的成功典範",
    description:
      "透過長翔夥伴之間的深度交流，室內設計師與建築工程師攜手合作，為客戶提供從設計到落成的一站式服務，大幅提升客戶滿意度與專案效率。",
    members: ["設計團隊", "工程團隊"],
    date: "2025",
  },
  {
    id: "story-3",
    type: "story",
    title: "從陌生到信任的商業夥伴",
    description:
      "一位新加入的會員，在短短半年內透過長翔平台獲得超過二十筆有效引薦，不僅業績成長了三倍，更結交了一群志同道合的事業夥伴。",
    date: "2025",
  },
];
