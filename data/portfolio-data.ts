export type Locale = 'en' | 'ar';

export interface Project {
  id: string;
  number: string;
  titleEn: [string, string]; // two-line stacked title
  titleAr: [string, string];
  contextEn: string;
  contextAr: string;
  year: string;
  duration: string;
  categoryEn: string;
  categoryAr: string;
  roleEn: string;
  roleAr: string;
  synopsisEn: string;
  synopsisAr: string;
  screeningEn?: string;
  screeningAr?: string;
  thumbnail: string;
  videoDuration: string;
}

export interface PortfolioData {
  student: {
    nameEn: [string, string]; // "SULTAN", "AL-FAILAKAWI"
    nameAr: [string, string]; // "سلطان", "الفيلكاوي"
    roleEn: string;
    roleAr: string;
    bioEn: string;
    bioAr: string;
    universityEn: string;
    universityAr: string;
    focusEn: string;
    focusAr: string;
    logoUrl: string;
  };
  stats: {
    projectsCount: string;
    projectsLabelEn: string;
    projectsLabelAr: string;
    hoursEdited: string;
    hoursLabelEn: string;
    hoursLabelAr: string;
  };
  socials: {
    name: string;
    username: string;
    url: string;
    icon: string;
  }[];
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    locationEn: string;
    locationAr: string;
    availabilityEn: string;
    availabilityAr: string;
  };
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  student: {
    nameEn: ['SULTAN', 'AL-FAILAKAWI'],
    nameAr: ['سلطان', 'الفيلكاوي'],
    roleEn: 'Filmmaking Student, American University of Kuwait',
    roleAr: 'طالب صناعة أفلام، الجامعة الأمريكية في الكويت',
    bioEn: 'Telling stories through the lens.',
    bioAr: 'أروي القصص من خلال العدسة.',
    universityEn: 'American University of Kuwait · Class of 2026',
    universityAr: 'الجامعة الأمريكية في الكويت · دفعة ٢٠٢٦',
    focusEn: 'Documentary & Narrative Short Films',
    focusAr: 'السينما الوثائقية والأفلام الروائية القصيرة',
    logoUrl: '/logo.png',
  },
  stats: {
    projectsCount: '12+',
    projectsLabelEn: 'Projects Directed & Cut',
    projectsLabelAr: 'مشروع إخراج ومونتاج',
    hoursEdited: '300+',
    hoursLabelEn: 'Hours in DaVinci & Premiere',
    hoursLabelAr: 'ساعة في غرف المونتاج',
  },
  socials: [
    {
      name: 'Instagram',
      username: '@sultan.films',
      url: 'https://instagram.com',
      icon: 'Instagram',
    },
    {
      name: 'YouTube',
      username: '@sultanfilms',
      url: 'https://youtube.com',
      icon: 'Youtube',
    },
  ],
  contact: {
    phone: '+96566334477',
    phoneFormatted: '+965 6633 4477',
    whatsapp: '+96566334477',
    whatsappLink: 'https://wa.me/96566334477',
    email: 'sultan.alfailakawi@example.com',
    locationEn: 'Kuwait City, Kuwait',
    locationAr: 'مدينة الكويت، دولة الكويت',
    availabilityEn: 'Open for student collaborations, grad shorts & assistant editing roles',
    availabilityAr: 'متاح للمشاريع الطلابية المشتركة ومشاريع التخرج والمونتاج المساعد',
  },
  projects: [
    {
      id: 'between-tides',
      number: '01',
      titleEn: ['BETWEEN', 'TIDES'],
      titleAr: ['بين', 'المد والجزر'],
      contextEn: 'University Short Film Assignment, 2025',
      contextAr: 'مشروع مادة الإنتاج السينمائي الجامعي، ٢٠٢٥',
      year: '2025',
      duration: '14 min',
      categoryEn: 'Narrative Short',
      categoryAr: 'فيلم روائي قصير',
      roleEn: 'Writer, Director & Editor',
      roleAr: 'كتابة، إخراج ومونتاج',
      synopsisEn: 'A coastal drama exploring the quiet routines of an elderly boat builder in Salmiya confronted by urban shoreline expansion.',
      synopsisAr: 'دراما ساحلية ترصد الروتين الهادئ لصانع سفن مسن في السالمية في مواجهة التحولات العمرانية للشريط الساحلي.',
      screeningEn: 'Selected for AUK Student Showcase 2025',
      screeningAr: 'مختار لعرض الطلاب السنوي في الجامعة الأمريكية ٢٠٢٥',
      thumbnail: 'https://picsum.photos/seed/tides/800/500',
      videoDuration: '14:22',
    },
    {
      id: 'voices-at-dawn',
      number: '02',
      titleEn: ['VOICES AT', 'DAWN'],
      titleAr: ['أصوات', 'الفجر'],
      contextEn: 'Personal Documentary Project, 2024',
      contextAr: 'مشروع وثائقي مستقل، ٢٠٢٤',
      year: '2024',
      duration: '18 min',
      categoryEn: 'Observational Doc',
      categoryAr: 'وثائقي استطلاعي',
      roleEn: 'Director & Cinematographer',
      roleAr: 'إخراج وتصوير سينمائي',
      synopsisEn: 'Captured entirely on vintage prime lenses at 4:30 AM in Souq Al-Mubarakiya, capturing the unseen rhythm before the market awakens.',
      synopsisAr: 'تم تصويره بالكامل بعدسات كلاسيكية في الرابعة والنصف فجراً بسوق المباركية، كاشفاً النبض الخفي قبل استيقاظ الأسواق.',
      screeningEn: 'Honorable Mention · Gulf Student Cinema Forum',
      screeningAr: 'تنويه خاص · منتدى سينما الطلاب الخليجي',
      thumbnail: 'https://picsum.photos/seed/dawn/800/500',
      videoDuration: '18:05',
    },
    {
      id: 'echoes-of-failaka',
      number: '03',
      titleEn: ['ECHOES OF', 'FAILAKA'],
      titleAr: ['أصداء', 'فيلكا'],
      contextEn: 'AUK Student Media Fest Jury Winner, 2024',
      contextAr: 'جائزة لجنة التحكيم في مهرجان الإعلام الجامعي، ٢٠٢٤',
      year: '2024',
      duration: '09 min',
      categoryEn: 'Experimental Poetry',
      categoryAr: 'فيلم تجريبي شاعري',
      roleEn: 'Director & Sound Designer',
      roleAr: 'إخراج وهندسة صوت',
      synopsisEn: 'An experimental 16mm audio-visual poem juxtaposing historical ruins on Failaka Island with layered ambient hydrophone recordings.',
      synopsisAr: 'قصيدة بصرية تجريبية بصيغة ١٦ مم تمزج بين أطلال جزيرة فيلكا التاريخية وتسجيلات صوتية هيدروفونية تحت الماء.',
      screeningEn: 'Jury Prize · AUK Student Media Fest 2024',
      screeningAr: 'جائزة لجنة التحكيم · مهرجان الإعلام الجامعي ٢٠٢٤',
      thumbnail: 'https://picsum.photos/seed/failaka/800/500',
      videoDuration: '09:40',
    },
    {
      id: 'concrete-and-sand',
      number: '04',
      titleEn: ['CONCRETE', '& SAND'],
      titleAr: ['خرسانة', 'ورمال'],
      contextEn: 'Urban Architecture Coursework Film, 2024',
      contextAr: 'مشروع مادة السينما والعمارة، ٢٠٢٤',
      year: '2024',
      duration: '11 min',
      categoryEn: 'Visual Essay',
      categoryAr: 'مقال بصري سينمائي',
      roleEn: 'Cinematographer & Colorist',
      roleAr: 'مدير تصوير وتلوين',
      synopsisEn: 'A strict symmetrical visual essay examining brutalist Kuwaiti water towers and modern skyline contrasts during golden hour.',
      synopsisAr: 'دراسة بصرية بتكوينات متناظرة تستكشف أبراج مياه الكويت بروح المدرسة البر Brutalist وتناقضاتها مع الأفق الحديث.',
      screeningEn: 'Coursework High Distinction',
      screeningAr: 'مشروع بدرجة امتياز أكاديمي',
      thumbnail: 'https://picsum.photos/seed/concrete/800/500',
      videoDuration: '11:15',
    },
    {
      id: 'the-last-net',
      number: '05',
      titleEn: ['THE LAST', 'NET'],
      titleAr: ['الشباك', 'الأخيرة'],
      contextEn: 'Kuwait Youth Film Showcase Selection, 2023',
      contextAr: 'مختارات ملتقى شباب الكويت للفيلم القصير، ٢٠٢٣',
      year: '2023',
      duration: '16 min',
      categoryEn: 'Fiction Coursework',
      categoryAr: 'عمل درامي جامعي',
      roleEn: 'Assistant Director & Focus Puller',
      roleAr: 'مساعد مخرج ومساعد مصور',
      synopsisEn: 'Collaborative graduation film support project exploring the intergenerational tension between traditional pearl diving heritage and modern digital life.',
      synopsisAr: 'مشروع تخرج تعاوني يستكشف التوتر الجيلي بين تراث الغوص التقليدي والحياة الرقمية الحديثة.',
      screeningEn: 'Official Selection · Kuwait Youth Cinema 2023',
      screeningAr: 'الاختيار الرسمي · ملتقى سينما الشباب ٢٠٢٣',
      thumbnail: 'https://picsum.photos/seed/net/800/500',
      videoDuration: '16:48',
    },
  ],
};
