# Company content and image sources

Reviewed on 3 November 2026. Company descriptions are concise paraphrases, not copied marketing paragraphs. Product prices, scale counters, certifications, clinical outcomes and testimonials are intentionally excluded.

| Company | Content sources | Supplied / downloaded imagery |
| --- | --- | --- |
| HAMS Hospital | https://hamshospital.com/introduction/ and https://hamshospital.com/ | Supplied hospital photograph |
| Nagarik Community Teaching Hospital | https://www.nagarikhospital.com.np/about-us/ and homepage (management by HAMS) | Supplied hospital photograph |
| HAMs Motors | https://hams.com.np/ | Supplied showroom photograph and logo |
| QJMOTOR Nepal | https://www.qjmotornepal.com/ | Supplied showroom photograph and logo |
| Om Surgical Concern | https://www.omsurgicalconcern.com/ and https://www.omsurgicalconcern.com/about | Supplied logos; downloaded https://www.omsurgicalconcern.com/HERO-IMAGE.png |
| Bhandari Surgical House | https://www.bhandarisurgicalhouse.com/ | Supplied logo displayed proportionally |
| OmniTrident AI | https://www.omnitridentai.com.np/ | Supplied logo; downloaded https://www.omnitridentai.com.np/assets/service-code.webp |

OmniTrident's homepage was retrieved directly because the web reader could not access it. Its published services are website development, software development, digital marketing and AI automation. The page identifies it as a HAMS Group company.

Contact information is shown only where published on the official sources. Company website buttons open the external website; no bookings, purchases or enquiries are submitted by this site. HAMS Nursing College uses Edusanjal as a third-party content reference, explicitly labelled as a college profile rather than an official website.

The original supplied assets remain in `public/images/`. Where production WebP variants are used, they are resized/compressed copies; source files are preserved.

## Category banners

Automobiles uses the supplied `public/images/Automobile/banner.JPG` in the same photo-banner layout as Hospitals. IT & ITES uses `public/images/IT/coding-laptop.jpg`, downloaded from the user-selected [James Harrison photo on Unsplash](https://unsplash.com/photos/black-laptop-computer-turned-on-on-table-vpOeXr5wmR4) on 2 November 2026, under the Unsplash License. Download URL: https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&fm=jpg&q=85&w=2400.

## Leadership

Board Members names and group roles were supplied by the user: Ram Sharan Bhandari, Chairperson; Ajay Bhardwaj, CEO. Ram Sharan Bhandari's portrait is sourced from the labelled founder profile at https://www.omsurgicalconcern.com/about, image https://www.omsurgicalconcern.com/leaders/R.S.%20Bhandari.jpeg. Ajay Bhardwaj's portrait was supplied by the user, enhanced with the built-in image tool and exported as a web-optimized image. Enhancement prompt: restore clarity and reduce compression while preserving identity, facial features, age, expression, hairstyle, clothing and office background; remove blurred border strips and create a vertical head-and-upper-torso portrait. Master output: `public/images/leadership/ajay-bhardwaj-enhanced.png`; web image: `public/images/leadership/ajay-bhardwaj.webp`.

Leadership panel styling references https://paragonacademy.edu.np/about: alternating portrait/text panels, white surfaces, restrained borders and serif role headings. HAMS copy expresses the brand-book purpose; it is not a personal quote or a purported message from either leader.

## Global alliances and brands

Medical Devices brand logos were downloaded from OM Surgical Concern's public homepage on 2 November 2026: https://www.omsurgicalconcern.com/. The 14 names and local filenames are recorded in `lib/medical-brands.json`; source files live under the original site's `/brands/` directory. The continuous 30-second logo strip follows the original site's marquee style, with a seamless loop, hover pause and reduced-motion support. These alliances are attributed to Om Surgical Concern in the section copy.

Automobile lists the user-requested Kawei, QJ Motor and Naveco brands. All three brands use supplied local logos, displayed in a static row without a scrolling animation. HAMs Motors' public site confirms Kawei and Naveco in its vehicle portfolio: https://hams.com.np/.


## Independent reworded design

The local reworded-version project uses https://www.adani.com/ as its presentation reference (reviewed 2 November 2026): full-screen crossfading hero, rising headline entrances, business vertical tabs, company directory, mega-navigation, scroll-linked word emphasis and large image-led stories. The implementation is newly written for HAMS and retains the HAMS content, colors and supplied images. The reference's video and third-party code/assets are not bundled.

Hero/chairperson refinement: the hero occupies exactly one dynamic viewport, transitions from a bottom-right image frame to full screen over 1.1 seconds and stages copy at 0.5/0.75/1-second delays. All slideshow pause controls were removed. The chairperson section immediately follows the hero, with a 42.1/57.9 desktop portrait/copy split, stacked responsive layout, speech-outline detail and scroll-linked character reveal. The statement is HAMS Group copy, labelled as the group's shared purpose, rather than a personal quotation. Desktop wheel smoothing preserves native touch, keyboard, dialog and menu scrolling and respects reduced motion.

Chairperson portrait updated with the user-supplied photograph on 2 November 2026. Original supplied file saved at `public/images/leadership/ram-sharan-bhandari-portrait.png` and used on the homepage and Board Members page.

## Education and image refresh — 3 November 2026

- HAMS Nursing College: https://edusanjal.com/school/hams-nursing-college/ (third-party content source only). Paraphrased establishment, affiliation, course and contact details. Supplied image: `Education/hams_nursing.jpg`.
- Everest College of Nursing: https://econ.edu.np/ and https://econ.edu.np/about (official sources). Paraphrased affiliation, programs, learning approach and contact details. Supplied image: `Education/everest_nursing.jpg`.
- Education banner: supplied `Education/banner.jpg`.
- HAMS Hospital and Nagarik profiles/cards use the new `HAMS Hospital Entrance.png` and `Nagarik Hospital.jpeg` photographs. The homepage hospital hero/business panel uses the new HAMS photograph.
- Automobile category banner uses `Automobile/banner.JPG`; homepage hero/business panel and HAMs Motors cards/profile use `Automobile/HAMs Motor/HAMsMotors-Showroom.png`.
- Medical Devices category banner and homepage hero/business panel use the supplied cropped `Medical-devices/medical-team.png`.

## Agro Sector — 3 November 2026

Sindhu Poultry and Research Center, Sindhupalchok, Nepal: name, location and sector supplied by the user. Introductory copy is based on that supplied information. No external website or contact details were provided. Supplied images in `public/images/Agro Sector/`: `Sindhu Poultry Hero Section.png` for the homepage hero and business panel, `Agro Sector Banner.jpg` for the category banner, and `Individual Poultry.png` for the company card and description page.
