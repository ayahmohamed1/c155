export interface GiftData {
  name: string;
  envelopeImage: string;
  birthdayImage: string;
  collageImages: string[]; // ✨ التعديل هنا: خليناها جمع ومصفوفة
  message: string;
  musicUrl?: string;
  accentColor?: string;
}

const giftData: Record<string, GiftData> = {
  aya: {
    name: "ahmed",
    envelopeImage: "/images/envelope-aya.png",
    birthdayImage: "/images/birthday-aya.jpg", 
    // ✨ التعديل هنا: حطينا الـ 4 صور بين أقواس مربعة []
    collageImages: [
      "/images/pic1.jpg", // مسار الصورة الأولى
      "/images/pic2.jpg", // مسار الصورة التانية
      "/images/pic3.jpg", // مسار الصورة التالتة
      "/images/pic4.jpg"  // مسار الصورة الرابعة
    ],
    accentColor: "#7f339d",
    musicUrl: "",
    message: `yesterday is all about celebrating you...`, 
  },
};

export default giftData;