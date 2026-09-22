import { Tour } from '@/types/tour';
import * as pdfMake from 'pdfmake/build/pdfmake';

// We need to fetch the fonts dynamically or include a vfs_fonts.js. 
// For this implementation, we will fetch standard fonts and Noto Sans Devanagari at runtime.
const NOTO_SANS_DEVANAGARI_URL = 'https://fonts.gstatic.com/s/notosansdevanagari/v21/5aUu9-C8y8njTEezVb1q3n9C1m53yQj5Y-0i9Xh8_C4Y9yO3-S0.ttf';
const ROBOTO_REGULAR_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf';
const ROBOTO_BOLD_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf';

let fontsLoaded = false;

async function loadFonts() {
  if (fontsLoaded) return;
  
  const fetchFontAsBase64 = async (url: string) => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const base64 = btoa(
      new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return base64;
  };

  const [devanagari, robotoReg, robotoBold] = await Promise.all([
    fetchFontAsBase64(NOTO_SANS_DEVANAGARI_URL),
    fetchFontAsBase64(ROBOTO_REGULAR_URL),
    fetchFontAsBase64(ROBOTO_BOLD_URL)
  ]);

  (pdfMake as any).vfs = {
    'NotoSansDevanagari-Regular.ttf': devanagari,
    'Roboto-Regular.ttf': robotoReg,
    'Roboto-Medium.ttf': robotoBold,
  };

  (pdfMake as any).fonts = {
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Regular.ttf',
      bolditalics: 'Roboto-Medium.ttf'
    },
    NotoSansDevanagari: {
      normal: 'NotoSansDevanagari-Regular.ttf',
      bold: 'NotoSansDevanagari-Regular.ttf',
      italics: 'NotoSansDevanagari-Regular.ttf',
      bolditalics: 'NotoSansDevanagari-Regular.ttf'
    }
  };

  fontsLoaded = true;
}

export async function generateTourItineraryPdf(tour: Tour): Promise<void> {
  await loadFonts();

  const brandColor = '#a43700'; // Saffron Orange
  const secondaryColor = '#0D233A'; // Royal Navy

  const docDefinition: any = {
    pageSize: 'A4',
    pageMargins: [40, 60, 40, 60],
    defaultStyle: {
      font: 'Roboto', // Will fallback to devanagari for marathi if needed (pdfmake needs explicit font for marathi, but let's try to map it)
      fontSize: 10,
      color: '#333333'
    },
    header: function(currentPage: number) {
      return {
        columns: [
          {
            text: 'SADGURU TOURISM',
            color: brandColor,
            bold: true,
            fontSize: 14,
            margin: [40, 20, 0, 0]
          },
          {
            text: 'Travel Beyond Expectations',
            color: secondaryColor,
            fontSize: 10,
            alignment: 'right',
            margin: [0, 24, 40, 0]
          }
        ]
      };
    },
    footer: function(currentPage: number, pageCount: number) {
      return {
        columns: [
          {
            text: `Call: 8446999330 / 8446999331`,
            fontSize: 8,
            color: '#666',
            margin: [40, 10, 0, 0]
          },
          {
            text: `Page ${currentPage} of ${pageCount}`,
            alignment: 'right',
            fontSize: 8,
            color: '#666',
            margin: [0, 10, 40, 0]
          }
        ]
      };
    },
    content: [
      // Cover Page
      {
        text: tour.titleEn,
        fontSize: 24,
        bold: true,
        color: secondaryColor,
        alignment: 'center',
        margin: [0, 60, 0, 10]
      },
      {
        text: tour.titleMr,
        font: 'NotoSansDevanagari',
        fontSize: 18,
        color: brandColor,
        alignment: 'center',
        margin: [0, 0, 0, 30]
      },
      {
        canvas: [
          { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: brandColor }
        ],
        margin: [0, 0, 0, 30]
      },
      {
        columns: [
          {
            width: '*',
            stack: [
              { text: 'Tour Duration', bold: true, fontSize: 12, color: secondaryColor },
              { text: tour.duration, margin: [0, 5, 0, 15] },
              { text: 'Departure Dates', bold: true, fontSize: 12, color: secondaryColor },
              { text: tour.departureDates, margin: [0, 5, 0, 15] }
            ]
          },
          {
            width: '*',
            stack: [
              { text: 'Price', bold: true, fontSize: 12, color: secondaryColor },
              { text: `₹${tour.price.toLocaleString('en-IN')} per person`, margin: [0, 5, 0, 15] },
              { text: 'Category', bold: true, fontSize: 12, color: secondaryColor },
              { text: tour.category.toUpperCase(), margin: [0, 5, 0, 15] }
            ]
          }
        ]
      },
      {
        text: 'About This Tour',
        fontSize: 14,
        bold: true,
        color: secondaryColor,
        margin: [0, 20, 0, 10]
      },
      { text: tour.descriptionEn, margin: [0, 0, 0, 10], lineHeight: 1.4 },
      { text: tour.descriptionMr || '', font: 'NotoSansDevanagari', margin: [0, 0, 0, 20], lineHeight: 1.4 },
      
      { text: '', pageBreak: 'after' },

      // Inclusions / Exclusions
      {
        text: 'Package Details',
        fontSize: 18,
        bold: true,
        color: brandColor,
        margin: [0, 0, 0, 20]
      },
      {
        columns: [
          {
            width: '50%',
            stack: [
              { text: 'Tour Includes', bold: true, fontSize: 14, color: secondaryColor, margin: [0, 0, 0, 10] },
              ...(tour.inclusions?.map(inc => ({ text: `• ${inc}`, margin: [0, 0, 0, 5] })) || [{ text: 'Standard inclusions apply.' }])
            ]
          },
          {
            width: '50%',
            stack: [
              { text: 'Tour Excludes', bold: true, fontSize: 14, color: secondaryColor, margin: [0, 0, 0, 10] },
              ...(tour.exclusions?.map(exc => ({ text: `• ${exc}`, margin: [0, 0, 0, 5] })) || [{ text: 'Standard exclusions apply.' }])
            ]
          }
        ]
      },
      {
        text: 'Highlights',
        bold: true,
        fontSize: 14,
        color: secondaryColor,
        margin: [0, 30, 0, 10]
      },
      {
        ul: tour.highlights || ['Check detailed itinerary for highlights'],
        margin: [0, 0, 0, 30]
      },

      { text: '', pageBreak: 'after' },

      // Itinerary
      {
        text: 'Detailed Day-wise Itinerary',
        fontSize: 18,
        bold: true,
        color: brandColor,
        margin: [0, 0, 0, 20]
      },
      ...(tour.itinerary?.map(day => {
        const stack: any[] = [
          {
            text: `Day ${day.day}: ${day.title}`,
            fontSize: 14,
            bold: true,
            color: secondaryColor,
            margin: [0, 15, 0, 5]
          }
        ];

        if (day.date) {
          stack.push({ text: day.date, fontSize: 10, color: '#666', margin: [0, 0, 0, 10] });
        }

        stack.push({ text: day.description, margin: [0, 0, 0, 10], lineHeight: 1.4 });

        if (day.morning) stack.push({ text: `Morning: ${day.morning}`, margin: [0, 0, 0, 5] });
        if (day.afternoon) stack.push({ text: `Afternoon: ${day.afternoon}`, margin: [0, 0, 0, 5] });
        if (day.evening) stack.push({ text: `Evening: ${day.evening}`, margin: [0, 0, 0, 5] });

        if (day.sightseeing && day.sightseeing.length > 0) {
          stack.push({ text: 'Sightseeing:', bold: true, margin: [0, 10, 0, 5] });
          stack.push({ ul: day.sightseeing, margin: [0, 0, 0, 10] });
        }

        const logistics = [];
        if (day.hotel) logistics.push(`Hotel: ${day.hotel}`);
        if (day.meals) logistics.push(`Meals: ${day.meals}`);
        if (day.transport) logistics.push(`Transport: ${day.transport}`);

        if (logistics.length > 0) {
          stack.push({
            text: logistics.join(' | '),
            fontSize: 9,
            color: brandColor,
            bold: true,
            margin: [0, 5, 0, 10]
          });
        }

        stack.push({
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#eeeeee' }],
          margin: [0, 15, 0, 5]
        });

        return stack;
      }).flat() || [{ text: 'Detailed itinerary will be shared soon.' }]),

      // Final Contact Page
      { text: '', pageBreak: 'before' },
      {
        text: 'Contact & Booking Information',
        fontSize: 18,
        bold: true,
        color: brandColor,
        margin: [0, 40, 0, 20]
      },
      {
        text: 'Sadguru Tourism',
        fontSize: 14,
        bold: true,
        color: secondaryColor,
        margin: [0, 0, 0, 5]
      },
      { text: 'Shop No. 1, 1st Floor, P P Tower,', margin: [0, 0, 0, 2] },
      { text: 'Manewada Square,', margin: [0, 0, 0, 2] },
      { text: 'Nagpur, Maharashtra - 440027', margin: [0, 0, 0, 20] },
      {
        columns: [
          {
            width: '50%',
            stack: [
              { text: 'Uday Phadke', bold: true },
              { text: '8446999330' },
              { text: '9881037224' }
            ]
          },
          {
            width: '50%',
            stack: [
              { text: 'Akshata Dolas', bold: true },
              { text: '8446999331' },
              { text: '8668895693' }
            ]
          }
        ]
      },
      {
        text: 'Travel Beyond Expectations',
        fontSize: 12,
        bold: true,
        italic: true,
        color: brandColor,
        alignment: 'center',
        margin: [0, 60, 0, 0]
      }
    ]
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.download(`${tour.slug}-itinerary.pdf`);
}
