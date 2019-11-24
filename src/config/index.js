export const key = "insert your api here";
export const API = (lat, long, key) => {
  return `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=${key}`;
};

export const getAQIMessage = aqi => {
  switch (true) {
    case aqi >= 201:
      return "อันตราย";
    case aqi >= 101:
      return "มีผลกระทบต่อสุขภาพ";
    case aqi >= 51:
      return "ปานกลาง";
    case aqi >= 26:
      return "ดี";
    case aqi >= 0:
      return "ดีมาก";
    default:
      return "ไม่พบข้อมูล";
  }
};
export const getAQIColor = aqi => {
  switch (true) {
    case aqi >= 201:
      return "#EE0000";
    case aqi >= 101:
      return "#CC9933";
    case aqi >= 51:
      return "#CCFF00";
    case aqi >= 26:
      return "#66FF00";
    case aqi >= 0:
      return "#00FF00";
    default:
      return "black";
  }
};
