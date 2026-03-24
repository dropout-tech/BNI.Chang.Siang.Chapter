/**
 * Site Configuration
 *
 * Clone 新分會時，只需修改此檔案即可完成品牌切換。
 * 所有品牌相關的硬編碼值都應從此處引用。
 */

export const siteConfig = {
    branchName: '長翔名人堂白金分會',
    branchNameEn: 'ChangSiang',
    branchFullName: 'BNI 長翔名人堂白金分會',
    branchFullNameEn: 'BNI Chang Siang Chapter',
    organization: 'BNI',

    siteUrl: 'https://changsiang.tw',
    siteDomain: 'changsiang.tw',

    meeting: {
        day: 'Wednesday',
        dayZh: '週三',
        startTime: '06:30',
        endTime: '08:30',
        timezone: 'Asia/Taipei',
        format: 'offline' as const,
        formatDescription: '實體例會，面對面深度交流',
    },

    location: {
        city: '台北市',
        region: '中山區',
        country: 'TW',
        countryName: '台灣',
        latitude: 25.0583,
        longitude: 121.5425,
        geoRegion: 'TW-TPE',
        address: '台北市中山區民生東路三段8號B2',
        venue: '晶宴會館（民生館）',
    },

    social: {
        facebook: 'https://www.facebook.com/BNI.Chang.Siang.Chapter/',
        instagram: '',
        threads: '',
    },

    logos: {
        square: `${import.meta.env.BASE_URL}images/assets/logo/白色正方形logo.png`,
        horizontal: `${import.meta.env.BASE_URL}images/assets/logo/透明底白字長條logo.png`,
        bni: `${import.meta.env.BASE_URL}images/assets/logo/bni-logo-new.png`,
    },

    defaultPhoto: `${import.meta.env.BASE_URL}images/assets/logo/白色正方形logo.png`,

    claimPassword: import.meta.env.VITE_CLAIM_PASSWORD || 'changsiang2025',

    industries: [
        '居住與空間工程',
        '企業營運與法稅',
        '金融財富與資產',
        '品牌整合與行銷',
        '數位AI與創新科技',
        '身心健康與醫療',
        '飲食文化與食品',
        '教育學習與休閒',
        '永續發展與製造',
    ],
} as const;

export type SiteConfig = typeof siteConfig;
