function arTimeAgo({ date, max = 30 }) {

    if (!date) {
        throw "A time must be provided"
    }
    let o = {
        ثانية: 1000,
        دقيقة: 60 * 1000,
        ساعة: 60 * 1000 * 60,
        يوم: 24 * 60 * 1000 * 60,
        أسبوع: 7 * 24 * 60 * 1000 * 60,
        شهر: 30 * 24 * 60 * 1000 * 60,
        سنة: 365 * 24 * 60 * 1000 * 60,
    }, plurial = {
        ثانية: ["ثانيتين", "ثوانٍِ"],
        دقيقة: ["دقيقتين", "دقائق"],
        ساعة: ["ساعتين", "ساعات"],
        يوم: ["يومين", "أيام"],
        أسبوع: ["أسبوعين", "أسابيع"],
        شهر: ["شهرين", "أشهر"],
        سنة: ["سنتين", "سنوات"],
    }, r = Math.round,
        dir = "منذ ",
        pl = function (v, n) {
            return (
                dir +
                (n == 1 || n == 2 ? "" : n + " ") +
                (n > 2 && n < 11 ? plurial[v][1] : n == 2 ? plurial[v][0] : v)
            );
        },
        ts = Date.now() - new Date(date).getTime(),
        ii;
    
       if (ts < 0) {
        ts *= -1;
        dir = "من الآن ";
    }else if(ts ==0){
        return "ألآن"
    }

    if (ts / (1000 * 3600 * 24) > max) {
        return new Date(date).toLocaleDateString("ar-EG", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }
    for (let i in o) {
        if (r(ts) < o[i]) return pl(ii || "دقيقة", r(ts / (o[ii] || 1)));
        ii = i;
    }
    return pl(i, r(ts / o[i]));
};


module.exports = arTimeAgo;
