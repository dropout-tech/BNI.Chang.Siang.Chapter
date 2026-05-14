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
        day: 'Tuesday',
        dayZh: '週二',
        startTime: '06:30',
        endTime: '08:30',
        timezone: 'Asia/Taipei',
        format: 'offline' as const,
        formatDescription: '實體例會，面對面深度交流',
        /** 網站內文、Hero 等處顯示的例會時間地點（一句話） */
        displayLine: '每週二 晶宴日光香頌',
    },

    location: {
        city: '台北市',
        region: '中山區',
        country: 'TW',
        countryName: '台灣',
        latitude: 25.0583,
        longitude: 121.5425,
        geoRegion: 'TW-TPE',
        address: '10480 臺北市中山區民生東路三段8號1F',
        venue: '晶宴日光香頌',
    },

    social: {
        facebook: 'https://www.facebook.com/BNI.Chang.Siang.Chapter/',
        instagram: '',
        threads: '',
    },

    logos: {
        square: `${import.meta.env.BASE_URL}images/assets/logo/bni-logo-new.png`,
        horizontal: `${import.meta.env.BASE_URL}images/assets/logo/bni-logo-new.png`,
        bni: `${import.meta.env.BASE_URL}images/assets/logo/bni-logo-new.png`,
    },

    defaultPhoto: `${import.meta.env.BASE_URL}images/assets/logo/bni-logo-new.png`,

    industries: [
        '健康醫療',
        '工程裝修',
        '企業服務',
        '消費生活',
        '資產管理',
    ],
} as const;

export type SiteConfig = typeof siteConfig;
