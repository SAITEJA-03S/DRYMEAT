import { Component } from '@angular/core';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proccess',
  imports: [Header, CommonModule],
  templateUrl: './proccess.html',
  styleUrl: './proccess.css',
})
export class Proccess {
  menuOpen = false;

  processSteps = [
    {
      number: '01',
      label: 'Sourcing',
      title: 'Fresh Local Meat',
      description:
        'Sourced directly from local village farmers and butchers. Only freshly slaughtered meat — no cold storage, no imports.',
    },
    {
      number: '02',
      label: 'Cleaning',
      title: 'Hand-Cleaned & Cut',
      description:
        'Each piece is cleaned meticulously by hand, trimmed to tradition-defined thickness for even drying and maximum flavour.',
    },
    {
      number: '03',
      label: 'Marination',
      title: 'Spice-Rubbed Overnight',
      description:
        'A dry rub of red chilli, turmeric, salt, and regional spices — massaged in and left overnight. No liquid marinades, no shortcuts.',
    },
    {
      number: '04',
      label: 'Sun Drying',
      title: '72+ Hours Under Open Sky',
      description:
        'Hung on traditional bamboo racks under direct sunlight for three full days. Weather-dependent. Patience is the ingredient.',
    },
    {
      number: '05',
      label: 'Smoke Curing',
      title: 'Wood-Fire Smoked',
      description:
        'Finished over slow-burning native wood — neem, tamarind, or mango — to seal flavour and extend natural shelf life.',
    },
    {
      number: '06',
      label: 'Packing',
      title: 'Hand-Packed & Sealed',
      description:
        'Cooled, inspected piece by piece, and packed in breathable food-grade pouches. Dispatched within 24 hours.',
    },
  ];

  whyReasons = [
    {
      title: 'Time-honoured slow process',
      text: "Factories rush. We don't. Each batch takes 4–5 days from raw meat to ready-to-ship. That time is the taste.",
      iconPath: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z M12 6v6l4 2',
      iconPath2: null,
    },
    {
      title: 'Village-scale, not mass-scale',
      text: 'Made in small batches by village families who stake their reputation on every piece. Not an assembly line.',
      iconPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
      iconPath2: 'M9 22V12h6v10',
    },
    {
      title: 'Zero preservatives, ever',
      text: 'Sun and smoke are the only preservatives. Salt and spice do the rest. This is food that lasts because of craft, not chemicals.',
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      iconPath2: null,
    },
  ];
}
